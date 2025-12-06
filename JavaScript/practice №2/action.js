const container = document.querySelector(".container");
const containerLeft = document.querySelector(".containerLeft");
const bgImages = document.querySelector(".bg-images");
const bgImageVillage = document.querySelector(".bg-images .village img");
const bgImageVillageParent = document.querySelector(".bg-images .village");
const bgImageRoad = document.querySelector(".bg-images .road img");
const bgImageRoadParent = document.querySelector(".bg-images .road ");
const bgImageForest = document.querySelector(".bg-images .forest img");
const bgImageForestParent = document.querySelector(".bg-images .forest");
const bgImageDeepForest = document.querySelector(".bg-images .deep-forest img");
const bgImageDeepForestParent = document.querySelector(".bg-images .deep-forest");
const bgImageRealDeepForest = document.querySelector(".bg-images .real-deep-forest img");
const bgImageRealDeepForestParent = document.querySelector(
  ".bg-images .real-deep-forest"
);
const bgImageOldMine = document.querySelector(".bg-images .old-mine img");
const bgImageOldMineParent = document.querySelector(".bg-images .old-mine");
const bgImagePit = document.querySelector(".bg-images .pit img");
const bgImagePitParent = document.querySelector(".bg-images .pit");
const bgBackpack = document.querySelector(".bg-player-backpack .bg-backpack img");

const contentWrapper = document.createElement("div");
contentWrapper.classList.add("contentWrapper");
container.appendChild(contentWrapper);

const buttonWrapper = document.createElement("div");
buttonWrapper.classList.add("buttonWrapper");
contentWrapper.appendChild(buttonWrapper);

const buttonMoveForward = document.createElement("button");
buttonMoveForward.textContent = "Вперед!";
buttonWrapper.appendChild(buttonMoveForward);

const buttonMoveBack = document.createElement("button");
buttonMoveBack.textContent = "Назад!";
buttonWrapper.appendChild(buttonMoveBack);

const buttonAttack = document.createElement("button");
buttonAttack.textContent = "Атаковать!";
buttonAttack.classList.add("buttonAttack");

buttonWrapper.appendChild(buttonAttack);

const buttonInventory = document.createElement("button");
buttonInventory.textContent = "Открыть инвентарь";
buttonInventory.classList.add("buttonInventory");
buttonInventory.classList.add("active");
buttonWrapper.appendChild(buttonInventory);

const buttonHideInventory = document.createElement("button");
buttonHideInventory.textContent = "Скрыть инвентарь";
buttonHideInventory.classList.add("buttonHideInventory");
buttonWrapper.appendChild(buttonHideInventory);

const buttonToUse = document.createElement("button");
buttonToUse.textContent = "Использовать";
buttonToUse.classList.add("buttonToUse");
buttonWrapper.appendChild(buttonToUse);

const buttonToResurrection = document.createElement("button");
buttonToResurrection.textContent = "Новая жизнь";
buttonToResurrection.classList.add("buttonToResurrection");
buttonWrapper.appendChild(buttonToResurrection);

const playerParametersWrapper = document.createElement("div");
playerParametersWrapper.classList.add("playerParametersWrapper");
contentWrapper.appendChild(playerParametersWrapper);

const playerParametersClass = document.createElement("div");
playerParametersClass.classList.add("playerParameters");
playerParametersWrapper.appendChild(playerParametersClass);

const playerParametersLevel = document.createElement("div");
playerParametersLevel.classList.add("playerParameters");
playerParametersWrapper.appendChild(playerParametersLevel);

const playerParametersHealthPoints = document.createElement("div");
playerParametersHealthPoints.classList.add("playerParameters");
playerParametersWrapper.appendChild(playerParametersHealthPoints);

const playerParametersDamage = document.createElement("div");
playerParametersDamage.classList.add("playerParameters");
playerParametersWrapper.appendChild(playerParametersDamage);

const playerParametersDefence = document.createElement("div");
playerParametersDefence.classList.add("playerParameters");
playerParametersWrapper.appendChild(playerParametersDefence);

const playerParametersInventory = document.createElement("div");
playerParametersInventory.classList.add("playerParameters");
playerParametersWrapper.appendChild(playerParametersInventory);

const playerParametersCurrentLocation = document.createElement("div");
playerParametersCurrentLocation.classList.add("playerParameters");
playerParametersWrapper.appendChild(playerParametersCurrentLocation);

const backpack = document.createElement("div");
backpack.classList.add("backpack");
containerLeft.appendChild(backpack);

const actionLogInfo = document.createElement("div");
actionLogInfo.classList.add("actionLogInfo");
container.appendChild(actionLogInfo);

const actionLog = [];

const items = {
  healthPotion: "Зелье здоровья",
  healthPotionUse: () => {
    player.healthPoints = player.healthPoints + 20;
  },
  smallHealthPotion: "Малое зелье здоровья",
  smallHealthPotionUse: () => {
    player.healthPoints = player.healthPoints + 10;
  },
  greateAxe: "Большой топор",
  greateAxeUse: () => {
    player.damage = player.damage + 7;
  },
  minerDef: "Шахтерский защитный комплект",
  minerDefUse: () => {
    player.defence = player.defence + 10;
  },
};

const locations = [
  {
    locationName: "Деревня",
    enemy: {
      enemyName: "",
      healthPoints: 0,
      damage: 0,
    },
  },
  {
    locationName: "Старая дорога",
    enemy: {
      enemyName: "Бандит",
      healthPoints: 25,
      damage: 2,
      defence: 10,
      staff: items.smallHealthPotion,
    },
  },
  {
    locationName: "Лес",
    enemy: {
      enemyName: "Волк",
      healthPoints: 32,
      damage: 3,
      defence: 0,
    },
  },
  {
    locationName: "Глубины леса",
    enemy: {
      enemyName: "Дух леса",
      healthPoints: 60,
      damage: 3,
      defence: 0,
      staff: items.healthPotion,
    },
  },
  {
    locationName: "Ваще глубокий лес жесть...",
    enemy: {
      enemyName: "Старый орк",
      healthPoints: 15,
      damage: 3,
      defence: 0,
      staff: items.greateAxe,
    },
  },
  {
    locationName: "Старая шахта",
    enemy: {
      enemyName: "Орк-рудокоп",
      healthPoints: 40,
      damage: 3,
      defence: 50,
      staff: items.minerDef,
    },
  },
  {
    locationName: "Яма",
    enemy: {
      enemyName: "Демон",
      healthPoints: 195,
      damage: 17,
      defence: 40,
    },
  },
];

const player = {
  class: "warrior",
  level: 1,
  healthPoints: 100,
  damage: 4,
  defence: 10,
  inventory: [],
  playerLocationIndex: 0,
  currentLocation: locations[0],
};

bgImageVillageParent.style.height = "100vh";
bgImageVillageParent.style.width = "100vw";

const changeBackgroundImageOnMove = function () {
  switch (locations[player.playerLocationIndex].locationName) {
    case "Деревня":
      bgImageRoad.classList.remove("active");
      bgImageVillage.classList.add("active");
      bgImageRoadParent.style.height = "0vh";
      bgImageRoadParent.style.width = "0vw";
      bgImageVillageParent.style.height = "100vh";
      bgImageVillageParent.style.width = "100vw";
      break;
    case "Старая дорога":
      bgImageVillage.classList.remove("active");
      bgImageForest.classList.remove("active");
      bgImageRoad.classList.add("active");
      bgImageForestParent.style.height = "0vh";
      bgImageForestParent.style.width = "0vw";
      bgImageVillageParent.style.height = "0vh";
      bgImageVillageParent.style.width = "0vw";
      bgImageRoadParent.style.height = "100vh";
      bgImageRoadParent.style.width = "100vw";
      break;
    case "Лес":
      bgImageRoad.classList.remove("active");
      bgImageDeepForest.classList.remove("active");
      bgImageForest.classList.add("active");
      bgImageDeepForestParent.style.height = "0vh";
      bgImageDeepForestParent.style.width = "0vw";
      bgImageRoadParent.style.height = "0vh";
      bgImageRoadParent.style.width = "0vw";
      bgImageForestParent.style.height = "100vh";
      bgImageForestParent.style.width = "100vw";
      break;
    case "Глубины леса":
      bgImageForest.classList.remove("active");
      bgImageRealDeepForest.classList.remove("active");
      bgImageDeepForest.classList.add("active");
      bgImageRealDeepForestParent.style.height = "0vh";
      bgImageRealDeepForestParent.style.width = "0vw";
      bgImageForestParent.style.height = "0vh";
      bgImageForestParent.style.width = "0vw";
      bgImageDeepForestParent.style.height = "100vh";
      bgImageDeepForestParent.style.width = "100vw";
      break;
    case "Ваще глубокий лес жесть...":
      bgImageDeepForest.classList.remove("active");
      bgImageOldMine.classList.remove("active");
      bgImageRealDeepForest.classList.add("active");
      bgImageOldMineParent.style.height = "0vh";
      bgImageOldMineParent.style.width = "0vw";
      bgImageDeepForestParent.style.height = "0vh";
      bgImageDeepForestParent.style.width = "0vw";
      bgImageRealDeepForestParent.style.height = "100vh";
      bgImageRealDeepForestParent.style.width = "100vw";
      break;
    case "Старая шахта":
      bgImageRealDeepForest.classList.remove("active");
      bgImagePit.classList.remove("active");
      bgImageOldMine.classList.add("active");
      bgImagePitParent.style.height = "0vh";
      bgImagePitParent.style.width = "0vw";
      bgImageRealDeepForestParent.style.height = "0vh";
      bgImageRealDeepForestParent.style.width = "0vw";
      bgImageOldMineParent.style.height = "100vh";
      bgImageOldMineParent.style.width = "100vw";
      break;
    case "Яма":
      bgImageOldMine.classList.remove("active");
      bgImagePit.classList.add("active");
      bgImageOldMineParent.style.height = "0vh";
      bgImageOldMineParent.style.width = "0vw";
      bgImagePitParent.style.height = "100vh";
      bgImagePitParent.style.width = "100vw";
      break;
  }
};

const moveForward = function () {
  if (locations[player.playerLocationIndex + 1] !== undefined) {
    player.playerLocationIndex = player.playerLocationIndex + 1;
    player.currentLocation = locations[player.playerLocationIndex];
    actionLog.push(
      `Вы покидаете локацию ${locations[player.playerLocationIndex - 1].locationName}`
    );
    actionLog.push(
      `Вы вошли в локацию ${locations[player.playerLocationIndex].locationName}`
    );
    actionLog.push(
      `Вы видете перед собой ${locations[player.playerLocationIndex].enemy.enemyName}`
    );
  } else {
    actionLog.push("Дальше живут драконы");
  }

  if (locations[player.playerLocationIndex].enemy.healthPoints > 0) {
    buttonAttack.classList.add("active");
  } else {
    buttonAttack.classList.remove("active");
  }
};

const moveBack = function () {
  if (locations[player.playerLocationIndex - 1] !== undefined) {
    player.playerLocationIndex = player.playerLocationIndex - 1;
    player.currentLocation = locations[player.playerLocationIndex];
    actionLog.push(
      `Вы покидаете локацию ${locations[player.playerLocationIndex + 1].locationName}`
    );
    actionLog.push(
      `Вы вошли в локацию ${locations[player.playerLocationIndex].locationName}`
    );

    actionLog.push(
      `Вы видете перед собой ${locations[player.playerLocationIndex].enemy.enemyName}`
    );
  } else {
    actionLog.push("Дальше живут драконы");
  }

  if (locations[player.playerLocationIndex].enemy.healthPoints > 0) {
    buttonAttack.classList.add("active");
  } else {
    buttonAttack.classList.remove("active");
  }
};

const attack = function () {
  const enemy = locations[player.playerLocationIndex].enemy;
  let playerDefenceQ = 1 - player.defence / 100;
  let enemyDefenceQ = 1 - enemy.defence / 100;
  if (playerDefenceQ < 0.1) playerDefenceQ = 0.1;
  if (enemyDefenceQ < 0.1) enemyDefenceQ = 0.1;

  if (enemy.healthPoints > 0) {
    if (enemy.healthPoints - player.damage > 0) {
      const enemyTakenDamage = player.damage * enemyDefenceQ;
      enemy.healthPoints = enemy.healthPoints - enemyTakenDamage;
      enemy.healthPoints = Number(enemy.healthPoints.toFixed(2));
    } else {
      enemy.healthPoints = 0;
    }

    actionLog.push(`Вы нанесли ${enemy.enemyName} : ${player.damage} урона`);

    if (enemy.healthPoints > 0) {
      actionLog.push(`Здоровье ${enemy.enemyName} : ${enemy.healthPoints}`);

      if (player.healthPoints - enemy.damage > 0) {
        const playerTakenDamage = enemy.damage * playerDefenceQ;
        player.healthPoints = player.healthPoints - playerTakenDamage;
        player.healthPoints = Number(player.healthPoints.toFixed(2));

        actionLog.push(`${enemy.enemyName} нанес вам ${enemy.damage} урона`);
      } else {
        player.healthPoints = 0;
        actionLog.push(
          `${enemy.enemyName} нанес вам ${enemy.damage} урона и вы погибли.`
        );
        buttonMoveForward.disabled = true;
        buttonMoveBack.disabled = true;
        buttonAttack.disabled = true;
        buttonInventory.disabled = true;
        buttonHideInventory.disabled = true;
        buttonToUse.disabled = true;
        buttonToResurrection.classList.add("active");
        buttonToResurrection.addEventListener("click", () => {
          location.reload();
        });
      }
    } else {
      actionLog.push(`Вы победили ${enemy.enemyName}!`);

      player.level++;
      player.healthPoints += 10;
      player.damage += 3;

      actionLog.push(
        `С победой над противником ваш уровень увеличился! Вы стали сильнее и выносливее. Здоровье увеличино на 10. Урон увеличен на 3`
      );

      enemy.enemyName = `Поверженный ${enemy.enemyName}`;

      if (enemy.staff !== undefined) {
        player.inventory.push(enemy.staff);
        actionLog.push(`Вы нашли: ${enemy.staff}`);
        delete enemy.staff;
        console.log(player.inventory);
      }
    }

    actionLog.push(`Ваше здоровье : ${player.healthPoints}`);
  }
};

const backpackItems = function () {
  backpack.innerHTML = "";
  player.inventory.forEach((item, index) => {
    const backpackItemRadio = document.createElement("input");
    backpackItemRadio.type = "radio";
    backpackItemRadio.name = "radio-item";
    backpackItemRadio.value = `${player.inventory[index]}`;
    backpackItemRadio.id = `radio-item ${player.inventory[index]}`;
    backpackItemRadio.classList.add("radio-class");

    const backpackItemLabel = document.createElement("label");
    backpackItemLabel.textContent = `${item}`;
    backpackItemLabel.setAttribute("for", `radio-item ${player.inventory[index]}`);

    backpack.appendChild(backpackItemRadio);
    backpack.appendChild(backpackItemLabel);

    // const input = document.querySelector(".radio-class");

    backpackItemRadio.addEventListener("change", () => {
      buttonToUse.classList.toggle("active", backpackItemRadio.checked);
    });
  });
};

const checkInventory = function () {
  containerLeft.classList.add("active");
  bgBackpack.classList.add("active");
};

const hideInventory = function () {
  containerLeft.classList.remove("active");
  bgBackpack.classList.remove("active");
};

const updatePlayerParameters = function () {
  playerParametersClass.innerHTML = `Ваш класс: ${player.class}`;
  playerParametersLevel.innerHTML = `Ваш уровень: ${player.level}`;
  playerParametersHealthPoints.innerHTML = `Ваше здоровье: ${player.healthPoints}`;
  playerParametersDamage.innerHTML = `Ваш урон: ${player.damage}`;
  playerParametersDefence.innerHTML = `Ваша защита: ${player.defence}`;
  // playerParametersInventory.innerHTML = `Ваш инвентарь: ${player.inventory}`;
  playerParametersCurrentLocation.innerHTML = `Ваша текущая локация: ${
    locations[player.playerLocationIndex].locationName
  }`;
};

const use = function () {
  const selectedInput = document.querySelector("input[type='radio']:checked");

  let selectedInputValue;

  if (selectedInput) {
    selectedInputValue = selectedInput.value;
  }
  let indexOfSelectedInputValue;
  switch (selectedInputValue) {
    case "Зелье здоровья":
      items.healthPotionUse();
      indexOfSelectedInputValue = player.inventory.indexOf(selectedInput.value);
      player.inventory.splice(indexOfSelectedInputValue, 1);
      actionLog.push(
        `Вы чувствуете себя горазда лучше. Ваше здоровье: ${player.healthPoints}`
      );
      backpack.innerHTML = "";
      break;
    case "Малое зелье здоровья":
      items.smallHealthPotionUse();
      indexOfSelectedInputValue = player.inventory.indexOf(selectedInput.value);
      player.inventory.splice(indexOfSelectedInputValue, 1);
      actionLog.push(
        `Вы чувствуете себя чуть лучше. Ваше здоровье: ${player.healthPoints}`
      );
      backpack.innerHTML = "";
      break;
    case "Большой топор":
      items.greateAxeUse();
      indexOfSelectedInputValue = player.inventory.indexOf(selectedInput.value);
      player.inventory.splice(indexOfSelectedInputValue, 1);
      actionLog.push(`В этом оружии ощущается сила. Ваш урон увеличен на 7`);
      backpack.innerHTML = "";
      break;
    case "Шахтерский защитный комплект":
      items.minerDefUse();
      indexOfSelectedInputValue = player.inventory.indexOf(selectedInput.value);
      player.inventory.splice(indexOfSelectedInputValue, 1);
      actionLog.push(
        `Похоже этот орк нашел экипировку шахтеров. В ней я чувствую себя в безопасности! Ваша защита увеличина на 10`
      );
      backpack.innerHTML = "";
      break;
  }
};

const actionLogContent = function () {
  actionLogInfo.innerHTML = actionLog.join("<br>");
  actionLogInfo.scrollTop = actionLogInfo.scrollHeight;
};

updatePlayerParameters();

buttonMoveForward.addEventListener("click", () => {
  moveForward();
  hideInventory();
  updatePlayerParameters();
  actionLogContent();
  changeBackgroundImageOnMove();
  buttonToUse.classList.remove("active");
  buttonHideInventory.classList.remove("active");
  buttonInventory.classList.add("active");
});

buttonMoveBack.addEventListener("click", () => {
  moveBack();
  hideInventory();
  updatePlayerParameters();
  actionLogContent();
  changeBackgroundImageOnMove();
  buttonToUse.classList.remove("active");
  buttonHideInventory.classList.remove("active");
  buttonInventory.classList.add("active");
});

buttonAttack.addEventListener("click", () => {
  attack();
  hideInventory();
  updatePlayerParameters();
  actionLogContent();
  buttonToUse.classList.remove("active");
  buttonHideInventory.classList.remove("active");
  buttonInventory.classList.add("active");
});

buttonInventory.addEventListener("click", () => {
  checkInventory();
  updatePlayerParameters();
  actionLogContent();
  backpackItems();
  // buttonToUse.classList.add("active");
  buttonHideInventory.classList.add("active");
  buttonInventory.classList.remove("active");
});

buttonHideInventory.addEventListener("click", () => {
  hideInventory();
  updatePlayerParameters();
  actionLogContent();
  buttonToUse.classList.remove("active");
  buttonHideInventory.classList.remove("active");
  buttonInventory.classList.add("active");
});

buttonToUse.addEventListener("click", () => {
  use();
  hideInventory();
  updatePlayerParameters();
  actionLogContent();
  buttonToUse.classList.remove("active");
  buttonHideInventory.classList.remove("active");
  buttonInventory.classList.add("active");
});

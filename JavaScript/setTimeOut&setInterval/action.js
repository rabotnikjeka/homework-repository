//первое задание
let setTime = 10;

function countDown() {
  setTime--;
  console.log(setTime);
  const time = setTimeout(countDown, 1000);
  if (setTime <= 0) {
    console.log("Таймер завершен");
    clearTimeout(time);
  }
}

countDown();

//второе задание

const waterReminder = function () {
  console.log("Не забудь выпить воды!");
};

const waterReminderInterval = setInterval(waterReminder, 3000000);

//третье задание

const container = document.querySelector(".container");

const form = document.createElement("form");
container.appendChild(form);

const buttonStartStop = document.createElement("button");
buttonStartStop.textContent = "Старт/Стоп";
form.appendChild(buttonStartStop);

const text = document.createElement("span");
text.textContent =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam similique omnis quasi iure magni cum optio ut repellendus, quidem expedita nulla voluptas dolores blanditiis delectus rem explicabo nobis impedit id.";
text.style.display = "none";
form.appendChild(text);

const showText = function () {
  console.log(text.innerHTML);
};

let showTextInterval;

const classCheck = function () {
  if (!text.classList.contains("setInterval")) {
    clearInterval(showTextInterval);
  }
};

buttonStartStop.addEventListener("click", (event) => {
  event.preventDefault();
  text.classList.toggle("setInterval");
  classCheck();
  if (text.classList.contains("setInterval")) {
    showTextInterval = setInterval(showText, 1000);
  }
});

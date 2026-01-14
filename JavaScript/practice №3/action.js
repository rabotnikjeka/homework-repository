const container = document.querySelector(".container");
const tasksWrapper = document.querySelector(".container .tasks-wrapper");
const addNewTaskButton = document.querySelector(
  ".container .add-new-task .add-new-task-button"
);
const addNewTask = document.querySelector(
  ".container .add-new-task .add-new-task-input-wrapper input"
);
const allTasksButtonFilter = document.querySelector(
  ".container .bottom-button-wrapper .all-tasks"
);
const completedTasksButtonFilter = document.querySelector(
  ".container .bottom-button-wrapper .completed-tasks"
);
const uncompletedTasksButtonFilter = document.querySelector(
  ".container .bottom-button-wrapper .uncompleted-tasks"
);

const todoPosts = "https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5";
let todosData;
const selectedFilter = {
  all: true,
  completed: false,
  uncompleted: false,
};
const tasks = [];

const renderDataInfoAll = function (dataToRender) {
  dataToRender.forEach((element) => {
    const dataInfo = document.createElement("div");
    dataInfo.classList.add("data-to-do");
    const dataInfoTextConent = document.createElement("div");
    dataInfoTextConent.textContent = `${element.title} `;
    dataInfoTextConent.classList.add("text-task");
    dataInfoTextConent.classList.add("uncompleted-task");
    dataInfo.appendChild(dataInfoTextConent);
    dataInfo.setAttribute("id", `${element.id}`);
    dataInfo.style.display = "flex";
    dataInfo.style.gap = "10px";
    tasksWrapper.appendChild(dataInfo);
    const dataToDoRightWrapper = document.createElement("div");
    dataToDoRightWrapper.classList.add("data-to-do-right-wrapper");
    dataInfo.appendChild(dataToDoRightWrapper);
    const completedTask = document.createElement("input");
    completedTask.setAttribute("type", "checkbox");
    completedTask.setAttribute("id", `${element.id}`);
    completedTask.classList.add("complite-task");
    if (element.completed) {
      dataInfoTextConent.classList.toggle("completed-task");
      completedTask.setAttribute("checked", "checked");
    }
    dataToDoRightWrapper.appendChild(completedTask);

    const createAlarmButton = () => {
      const alarmButton = document.createElement("button");
      alarmButton.classList.add("alarm-button");
      alarmButton.textContent = "напомнить через";
      alarmButton.addEventListener("click", () => {
        const sec = prompt("Через сколько секунд напомнить?");
        const ms = sec * 1000;
        setTimeout(() => {
          alert(`Напоминание: ${element.title}`);
        }, ms);
        element.reminder = Date.now() + ms;
        localStorage.setItem("todosData", JSON.stringify(dataToRender));
      });
      return alarmButton;
    };
    if (
      (selectedFilter.all || selectedFilter.uncompleted === true) &&
      !element.completed
    ) {
      dataToDoRightWrapper.appendChild(createAlarmButton());
    }

    completedTask.addEventListener("change", () => {
      const indexToComplite = dataToRender.findIndex(
        (obj) => Number(obj.id) === Number(completedTask.id)
      );
      dataInfoTextConent.classList.toggle("uncompleted-task");
      dataInfoTextConent.classList.toggle("completed-task");
      const task = dataToRender[indexToComplite];
      task.completed = !task.completed;
      const alarmButton = dataInfo.querySelector(".alarm-button");
      if (task.completed) {
        alarmButton.remove();
      } else {
        dataToDoRightWrapper.appendChild(createAlarmButton());
      }
      localStorage.setItem("todosData", JSON.stringify(dataToRender));
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "удалить";
    deleteButton.classList.add("delete-button");
    deleteButton.setAttribute("id", `${element.id}`);
    dataToDoRightWrapper.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
      const indexToDelite = dataToRender.findIndex(
        (obj) => Number(obj.id) === Number(deleteButton.id)
      );
      console.log(indexToDelite);
      dataToRender.splice(indexToDelite, 1);
      tasksWrapper.innerHTML = "";
      renderDataInfoAll(dataToRender);
      localStorage.setItem("todosData", JSON.stringify(dataToRender));
    });
  });
};

const initAlarms = function () {
  const currentTime = Date.now();
  todosData.forEach((element) => {
    if (element.reminder) {
      const timeLeft = element.reminder - currentTime;
      if (timeLeft > 0) {
        setTimeout(() => {
          alert(`Напоминание: ${element.title}`);
          delete element.reminder;
          localStorage.setItem("todosData", JSON.stringify(todosData));
        }, timeLeft);
      } else {
        alert(`Пропущенное напоминание: ${element.title}`);
        delete element.reminder;
        localStorage.setItem("todosData", JSON.stringify(todosData));
      }
    }
  });
};

const checkDataStorage = function () {
  const getDataStorage = JSON.parse(localStorage.getItem("todosData"));
  if (getDataStorage) {
    todosData = getDataStorage;
    renderDataInfoAll(todosData);
    initAlarms();
  } else {
    async function getToDosData() {
      const response = await fetch(todoPosts);
      todosData = await response.json();
      console.log(todosData);
      tasksWrapper.innerHTML = "";
      renderDataInfoAll(todosData);
      localStorage.setItem("todosData", JSON.stringify(todosData));
    }
    getToDosData();
  }
};
checkDataStorage();

addNewTaskButton.addEventListener("click", () => {
  let newUserId = 1;
  let newId = 1;
  let i = todosData.length - 1;
  if (todosData.length > 0) {
    newUserId = todosData[i].userId;
    newId = todosData[i].id + 1;
  }
  if (addNewTask.value === "") {
    alert("Введите название задачи");
  } else {
    const newTaskInfo = {
      userId: newUserId,
      id: newId,
      title: addNewTask.value,
      completed: false,
    };
    todosData.push(newTaskInfo);

    console.log(todosData);
    localStorage.setItem("todosData", JSON.stringify(todosData));
    tasksWrapper.innerHTML = "";
    renderDataInfoAll(todosData);
    addNewTask.value = "";
  }
});

completedTasksButtonFilter.addEventListener("click", () => {
  tasksWrapper.innerHTML = "";

  const completedTasksFilter = todosData.filter((obj) => {
    if (obj.completed) {
      return true;
    }
  });
  selectedFilter.all = false;
  selectedFilter.completed = true;
  selectedFilter.uncompleted = false;
  renderDataInfoAll(completedTasksFilter);
});

uncompletedTasksButtonFilter.addEventListener("click", () => {
  tasksWrapper.innerHTML = "";
  const unCompletedTasksFilter = todosData.filter((obj) => {
    if (!obj.completed) {
      return true;
    }
  });
  selectedFilter.all = false;
  selectedFilter.completed = false;
  selectedFilter.uncompleted = true;
  renderDataInfoAll(unCompletedTasksFilter);
});

allTasksButtonFilter.addEventListener("click", () => {
  tasksWrapper.innerHTML = "";
  selectedFilter.all = true;
  selectedFilter.completed = false;
  selectedFilter.uncompleted = false;
  renderDataInfoAll(todosData);
});

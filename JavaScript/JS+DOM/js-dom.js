// Первое задание

const mainTitle = document.querySelector("#main-title");
if (mainTitle) {
  mainTitle.textContent = "Я новый заголовок";
} else {
  console.log("ошибка при обращении к #main-title");
}

//Второе задание

const subTitle = document.querySelector(".black-to-red");
if (subTitle) {
  subTitle.style.color = "red";
} else {
  console.log("ошибка при обращении к .black-to-red");
}

//Третье задение

const newParagraph = document.createElement("p");

newParagraph.textContent = "Я новый параграф";

document.body.appendChild(newParagraph);

//Четвертое задение

const mainSubTitle = document.querySelector("#main-sub-title");
if (mainSubTitle) {
  mainSubTitle.remove();
} else {
  console.log("ошибка при обращении к #main-sub-title");
}

//Пятое задание

const link = document.querySelector(".links a");
if (subTitle) {
  link.setAttribute("href", "https://www.youtube.com");

  console.log(link.getAttribute("href"));
} else {
  console.log("ошибка при обращении к .links a");
}

//Шестое задание

const newElement = document.createElement("h1");

newElement.textContent = "Я второй заголовок";
newElement.classList.add("navigationTitle");

document.body.insertBefore(newElement, newParagraph);

//Седьмое задание

const show = document.querySelector(".hide-show");

show.classList.toggle("hide-show");

console.log(show.classList.contains("hide-show"));

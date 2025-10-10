// Первое задание

const mainTitle = document.querySelector("#main-title");

mainTitle.textContent = "Я новый заголовок";

//Второе задание

const subTitle = document.querySelector(".black-to-red");

subTitle.style.color = "red";

//Третье задение

const newParagraph = document.createElement("p");

newParagraph.textContent = "Я новый параграф";

document.body.appendChild(newParagraph);

//Четвертое задение

const mainSubTitle = document.querySelector("#main-sub-title");

mainSubTitle.remove();

//Пятое задание

const link = document.querySelector(".links a");

link.setAttribute("href", "https://www.youtube.com");

console.log(link.getAttribute("href"));

//Шестое задание

const newElement = document.createElement("h1");

newElement.textContent = "Я второй заголовок";
newElement.classList.add("navigationTitle");

document.body.insertBefore(newElement, newParagraph);

//Седьмое задание

const show = document.querySelector(".hide-show");

show.classList.toggle("hide-show");

console.log(show.classList.contains("hide-show"));

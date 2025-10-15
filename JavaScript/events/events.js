//Первое задание

const buyNow = document.querySelector(".buy-now");

if (buyNow) {
  buyNow.addEventListener("click", () => {
    buyNow.classList.toggle("red");
    if (buyNow.classList.contains("red")) {
      buyNow.style.color = "red";
    } else {
      buyNow.style.color = "black";
    }
  });
} else {
  console.log("Ошибка при обращении к .buy-now");
}

//Второе задание

const sizeChanger = document.querySelector(".size-changer");

if (sizeChanger) {
  sizeChanger.addEventListener("mouseover", () => {
    sizeChanger.style.fontSize = "30px";
    sizeChanger.style.padding = "20px";
  });

  sizeChanger.addEventListener("mouseout", () => {
    sizeChanger.style.fontSize = "15px";
    sizeChanger.style.padding = "0";
  });
} else {
  console.log("Ошибка при обращении к .size-changer");
}

//Третье задание

const text = document.querySelector(".form .text");

if (text) {
  text.addEventListener("keyup", (event) => {
    console.log(`Нажата клавиша:${event.key}`);
  });
} else {
  console.log("Ошибка при обращении к .form .text");
}

//Четвертое задание

const submitForm = document.querySelector(".form");

if (submitForm) {
  submitForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Форма отправлена");
  });
} else {
  console.log("Ошибка при обращении к .form");
}

//Пятое задание

const darkWhite = document.querySelector(".change-theme");
const html = document.querySelector("#dark-white");
const submit = document.querySelector(".form .submit");

if (darkWhite && html && submit) {
  darkWhite.addEventListener("click", () => {
    darkWhite.classList.toggle("dark");
    if (darkWhite.classList.contains("dark")) {
      html.style.backgroundColor = "#140E17";
      html.style.color = "white";
      buyNow.style.backgroundColor = "#F5FA93";
      text.style.backgroundColor = "";
      submit.style.backgroundColor = "#F5FA93";
      darkWhite.style.backgroundColor = "#F5FA93";
    } else {
      html.style.backgroundColor = "white";
      html.style.color = "black";
      buyNow.style.backgroundColor = "";
      text.style.backgroundColor = "";
      submit.style.backgroundColor = "";
      darkWhite.style.backgroundColor = "";
    }
  });
} else {
  console.log("Ошибка при выполнении запроса");
}

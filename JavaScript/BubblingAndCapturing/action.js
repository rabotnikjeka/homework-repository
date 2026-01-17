// первое - второе задание
const outer = document.querySelector("#outer");
const middle = document.querySelector("#middle");
const inner = document.querySelector("#inner");

outer.addEventListener("click", () => console.log("1. Всплытие: Outer"));
middle.addEventListener("click", (event) => {
  //   event.stopPropagation();
  console.log("2. Всплытие: Middle "); // если раскоментить event.stopPropagation() то всплытие остановится на middle
});
inner.addEventListener("click", () => console.log("3. Всплытие: Inner"));

// третье задание

const form = document.querySelector("#registrationForm");
const errorDisplay = document.querySelector("#error");

form.addEventListener("input", (event) => {
  const target = event.target;

  if (target.tagName === "INPUT") {
    if (target.value.length > 10) {
      target.style.border = "2px solid red";
      errorDisplay.textContent = `Ошибка в поле ${target.name}: максимум 10 символов!`;
    } else {
      target.style.border = "2px solid green";
      errorDisplay.textContent = "";
    }
  }
}); // заперет отправки добавлять не стал тк основу делигирования продемонтрировал

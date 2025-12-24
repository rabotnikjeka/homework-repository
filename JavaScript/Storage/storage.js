//Первое задание

const container = document.querySelector(".container");
const form = document.createElement("form");
form.setAttribute(
  "style",
  "display: flex; flex-direction: column; max-width: 200px; gap: 10px"
);
container.appendChild(form);
const inputFieldName = document.createElement("input");
inputFieldName.setAttribute("type", "text");
inputFieldName.setAttribute("placeholder", "введите имя");
form.appendChild(inputFieldName);
const inputFieldPhoneNumber = document.createElement("input");
inputFieldPhoneNumber.setAttribute("type", "text");
inputFieldPhoneNumber.setAttribute("placeholder", "введите номер телефона");
form.appendChild(inputFieldPhoneNumber);
const inputFieldEmail = document.createElement("input");
inputFieldEmail.setAttribute("type", "text");
inputFieldEmail.setAttribute("placeholder", "введите email");
form.appendChild(inputFieldEmail);
const saveInfoButton = document.createElement("button");
saveInfoButton.textContent = "save";
form.appendChild(saveInfoButton);
const showData = document.createElement("button");
showData.textContent = "show";
container.appendChild(showData);
const showUserName = document.createElement("div");
container.appendChild(showUserName);
const showUserPhoneNumber = document.createElement("div");
container.appendChild(showUserPhoneNumber);
const showUserEmail = document.createElement("div");
container.appendChild(showUserEmail);

const userInfo = {};

saveInfoButton.addEventListener("click", (event) => {
  event.preventDefault();
  userInfo.userName = inputFieldName.value;
  userInfo.userPhoneNumber = inputFieldPhoneNumber.value;
  userInfo.userEmail = inputFieldEmail.value;

  localStorage.setItem("userInfo", JSON.stringify(userInfo));
});

showData.addEventListener("click", () => {
  const getData = JSON.parse(localStorage.getItem("userInfo"));
  if (!getData === null) {
    showUserName.textContent = getData.userName;
    showUserPhoneNumber.textContent = getData.userPhoneNumber;
    showUserEmail.textContent = getData.userEmail;
  } else {
    console.log("введите данные");
  }
});

//Второе задение

const paymentsWrapper = document.createElement("div");
paymentsWrapper.classList.add("paymentsWrapper");
container.appendChild(paymentsWrapper);
const paymentForm = document.createElement("form");
paymentForm.setAttribute(
  "style",
  "display: flex; flex-direction: column; max-width: 200px; gap: 10px"
);
paymentsWrapper.appendChild(paymentForm);
const paymentDate = document.createElement("input");
paymentDate.setAttribute("type", "text");
paymentDate.setAttribute("placeholder", "введите дату покупки");
paymentForm.appendChild(paymentDate);
const paymentCost = document.createElement("input");
paymentCost.setAttribute("type", "text");
paymentCost.setAttribute("placeholder", "введите стоимость покупки");
paymentForm.appendChild(paymentCost);
const paymentDescription = document.createElement("input");
paymentDescription.setAttribute("type", "text");
paymentDescription.setAttribute("placeholder", "введите описание покупки");
paymentForm.appendChild(paymentDescription);
const saveInfoButtonPayment = document.createElement("button");
saveInfoButtonPayment.textContent = "save";
paymentForm.appendChild(saveInfoButtonPayment);
const deleteInput = document.createElement("input");
deleteInput.setAttribute("type", "text");
deleteInput.setAttribute("placeholder", "ID записи для удаления");
paymentForm.appendChild(deleteInput);
const deleteButton = document.createElement("button");
deleteButton.textContent = "delete";
paymentForm.appendChild(deleteButton);
const paymentsShow = document.createElement("div");
container.appendChild(paymentsShow);

let payments = JSON.parse(localStorage.getItem("paymentInfo")) || [];

let idCount = 0;
saveInfoButtonPayment.addEventListener("click", (event) => {
  event.preventDefault();
  const paymentObject = {};
  paymentObject.id = Date.now();
  paymentObject.date = paymentDate.value;
  paymentObject.cost = paymentCost.value;
  paymentObject.description = paymentDescription.value;

  payments.push(paymentObject);

  localStorage.setItem("paymentInfo", JSON.stringify(payments));
  paymentsShow.innerHTML = "";
  for (let i = 0; i < payments.length; i++) {
    const showUserPaymentsID = document.createElement("div");
    paymentsShow.appendChild(showUserPaymentsID);
    const showUserPaymentsDate = document.createElement("div");
    paymentsShow.appendChild(showUserPaymentsDate);
    const showUserPaymentsCost = document.createElement("div");
    paymentsShow.appendChild(showUserPaymentsCost);
    const showUserPaymentsDescription = document.createElement("div");
    paymentsShow.appendChild(showUserPaymentsDescription);
    showUserPaymentsID.textContent = `ID покупки: ${payments[i].id}`;
    showUserPaymentsDate.textContent = `Дата покупки: ${payments[i].date}`;
    showUserPaymentsCost.textContent = `Цена покупки: ${payments[i].cost}`;
    showUserPaymentsDescription.textContent = `Описание: ${payments[i].description}`;
  }
});

deleteButton.addEventListener("click", (event) => {
  event.preventDefault();
  const idToDelete = Number(deleteInput.value);

  payments = payments.filter((payment) => payment.id !== idToDelete);
  localStorage.setItem("paymentInfo", JSON.stringify(payments));

  paymentsShow.innerHTML = "";

  for (let i = 0; i < payments.length; i++) {
    const showUserPaymentsID = document.createElement("div");
    paymentsShow.appendChild(showUserPaymentsID);
    const showUserPaymentsDate = document.createElement("div");
    paymentsShow.appendChild(showUserPaymentsDate);
    const showUserPaymentsCost = document.createElement("div");
    paymentsShow.appendChild(showUserPaymentsCost);
    const showUserPaymentsDescription = document.createElement("div");
    paymentsShow.appendChild(showUserPaymentsDescription);
    showUserPaymentsID.textContent = `ID покупки: ${payments[i].id}`;
    showUserPaymentsDate.textContent = `Дата покупки: ${payments[i].date}`;
    showUserPaymentsCost.textContent = `Цена покупки: ${payments[i].cost}`;
    showUserPaymentsDescription.textContent = `Описание: ${payments[i].description}`;
  }
});

//Третье задание

const timeCounterOnScreen = document.createElement("div");
timeCounterOnScreen.textContent = "ваше время на сайте: ";
container.appendChild(timeCounterOnScreen);

let userTimeCounter;

const checkUserTimeInStorage = JSON.parse(sessionStorage.getItem("userTimeCount"));

if (checkUserTimeInStorage) {
  userTimeCounter = checkUserTimeInStorage;
} else {
  userTimeCounter = 0;
}

const timeCounter = function () {
  userTimeCounter++;
  sessionStorage.setItem("userTimeCount", JSON.stringify(userTimeCounter));
  timeCounterOnScreen.textContent = "ваше время на сайте: " + userTimeCounter + " сек.";
};

const timeCounterInterval = setInterval(timeCounter, 1000);

const startTest = document.querySelector(".container .start-page .start-test");

const nextButton = document.querySelector(".container .next-button");

const confirmButton = document.querySelector(".container .confirm-button");

const endButton = document.querySelector(".container .end-button-wrapper .submit-button");

const questionsArr = [
  {
    question:
      "Что является основным документом, подтверждающим право собственности на земельный участок?",
    type: "radio",
    options: [
      "Акт осмотра",
      "Кадастровый паспорт",
      "Выписка из Единого государственного реестра недвижимости (ЕГРН)",
      "Земельная книга",
    ],
    rightOption: 2,
  },
  {
    question:
      "Как называется процесс установления на местности границ земельного участка с их закреплением?",
    type: "radio",
    options: ["Картографирование", "Межевание", "Зонирование", "Бонификация"],
    rightOption: 1,
  },
  {
    question: "Какой категории земель не существует?",
    type: "radio",
    options: [
      "Земли населённых пунктов",
      "Земли лесного фонда",
      "Земли сельскохозяйственного назначения",
      "Земли дорожного транспорта",
    ],
    rightOption: 3,
  },
  {
    question: "Что такое кадастровая стоимость?",
    type: "radio",
    options: [
      "Рыночная стоимость участка",
      "Стоимость участка по договорённости",
      "Оценочная стоимость, установленная государством",
      "Инвентаризационная стоимость",
    ],
    rightOption: 2,
  },
  {
    question: "Что является результатом землеустроительного проекта?",
    type: "radio",
    options: [
      "Проект организации и использования земель",
      "Земельный баланс",
      "Генеральный план",
      "Лесоустроительный план",
    ],
    rightOption: 0,
  },
  {
    question: "Какой орган осуществляет государственный земельный надзор?",
    type: "radio",
    options: [
      "Росприроднадзор",
      "Росреестр",
      "Россельхознадзор",
      "Министерство земельных ресурсов",
    ],
    rightOption: 1,
  },
  {
    question:
      "Как называется документ, содержащий описание границ и координат земельного участка?",
    type: "text",
    answer: "Межевой план",
  },
  {
    question:
      "Как называется совокупность сведений о землях, их размерах, категориях, правах и стоимости?",
    type: "text",
    answer: "Кадастр",
  },
  {
    question:
      "Как называется показатель, характеризующий природное плодородие почв по 100-балльной шкале?",
    type: "text",
    answer: "Балл бонитета",
  },
  {
    question:
      "Как называется процесс образования земельного участка из уже существуещего?",
    type: "text",
    answer: "Выдел",
  },
];

const allQuestions = questionsArr.length;
let questionNumber = 0;
let questionRequiredRadio;
let yourScore = 0;

startTest.addEventListener("click", () => {
  showQuestion(questionsArr[questionNumber]);
  startTest.classList.remove("active");
});

confirmButton.addEventListener("click", () => {
  confirmButton.classList.remove("active");
  nextButton.classList.add("active");
  checkCorrectAnswer();
  questionRequiredRadio.forEach((disabledRadio) => {
    disabledRadio.disabled = true;
  });
});

function showQuestion(arrayOfQuestions) {
  if (arrayOfQuestions.options) {
    showQuestionRadio(arrayOfQuestions);
    questionRequiredRadio = document.querySelectorAll(
      ".container .questions input[type='radio']"
    );

    questionRequiredRadio.forEach((displayButtonRadio) => {
      displayButtonRadio.addEventListener("click", () => {
        confirmButton.classList.add("active");
      });
    });
  }
  if (arrayOfQuestions.answer) {
    showQuestionText(arrayOfQuestions);
    const questionRequiredText = document.querySelectorAll(
      ".container .questions input[type='text']"
    );
    questionRequiredText.forEach((displayButtonText) => {
      displayButtonText.addEventListener("change", () => {
        confirmButton.classList.add("active");
      });
    });
  }
}

function showQuestionRadio(questionUnit) {
  const containerRadio = document.querySelector(".questions");
  containerRadio.innerHTML = "";
  const questionCounter = document.createElement("h3");
  questionCounter.textContent = questionNumber + 1 + "/" + allQuestions;
  containerRadio.appendChild(questionCounter);
  const questionText = document.createElement("h2");
  questionText.textContent = questionUnit.question;
  containerRadio.appendChild(questionText);

  questionUnit.options.forEach((optionText, index) => {
    const optionWrapper = document.createElement("div");
    optionWrapper.classList.add("radio-button");

    const input = document.createElement("input");

    input.type = "radio";
    input.name = "question" + "-" + questionNumber;
    input.value = index;
    input.id = "question" + "-" + questionNumber + "-option" + "-" + index;

    const label = document.createElement("label");
    label.textContent = optionText;
    label.classList.add("option");
    label.setAttribute(
      "for",
      "question" + "-" + questionNumber + "-option" + "-" + index
    );

    optionWrapper.appendChild(input);
    optionWrapper.appendChild(label);
    containerRadio.appendChild(optionWrapper);
  });
}

function showQuestionText(questionUnit) {
  const containerText = document.querySelector(".questions");
  containerText.innerHTML = "";

  const questionCounter = document.createElement("h3");
  questionCounter.textContent = questionNumber + 1 + "/" + allQuestions;
  containerText.appendChild(questionCounter);

  const inputText = document.createElement("div");
  inputText.classList.add("open-question");
  containerText.appendChild(inputText);

  const questionTextlabel = document.createElement("label");
  questionTextlabel.setAttribute("for", "question" + "-" + questionNumber);

  const questionText = document.createElement("h2");
  questionText.textContent = questionUnit.question;
  questionTextlabel.appendChild(questionText);

  const input = document.createElement("input");

  input.type = "text";
  input.name = "question" + "-" + questionNumber;
  input.id = "question" + "-" + questionNumber;
  input.setAttribute("placeholder", "Введите ответ");

  inputText.appendChild(questionTextlabel);
  inputText.appendChild(input);
}
function checkCorrectAnswer() {
  const currentQuestion = questionsArr[questionNumber];

  let userAnswer;

  if (currentQuestion.type === "radio") {
    const selectedInput = document.querySelector("input[type='radio']:checked");

    if (selectedInput) {
      userAnswer = selectedInput.value;
    }
    if (Number(userAnswer) === Number(currentQuestion.rightOption)) {
      selectedInput.classList.add("correct");
      yourScore++;
      console.log(yourScore);
    } else {
      selectedInput.classList.add("incorrect");
    }
  }

  if (currentQuestion.type === "text") {
    const textInput = document.querySelector("input[type='text']");

    userAnswer = textInput.value.trim().toLowerCase();

    if (userAnswer === currentQuestion.answer.trim().toLocaleLowerCase()) {
      textInput.classList.add("correct");
      yourScore++;
      console.log(yourScore);
    } else {
      textInput.classList.add("incorrect");
    }
  }
}

nextButton.addEventListener("click", () => {
  nextButton.classList.remove("active");
  questionRequiredRadio.forEach((disabledRadio) => {
    disabledRadio.disabled = false;
  });
  questionNumber++;
  if (questionNumber < questionsArr.length) {
    showQuestion(questionsArr[questionNumber]);
  } else {
    const containerRadio = document.querySelector(".questions");
    containerRadio.innerHTML = "";
    endButton.classList.add("active");

    const yourScoreText = document.querySelector(".container .your-score");
    if (yourScoreText) {
      yourScoreText.classList.add("active");
      ratio = (yourScore / allQuestions) * 100;
      yourScoreText.textContent =
        "Ваш результат: " + yourScore + " из " + allQuestions + " (" + ratio + "%)";
    }
    endButton.addEventListener("click", () => {
      location.reload();
    });
  }
});
document.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    if (startTest.classList.contains("active")) {
      startTest.click();
    } else if (confirmButton.classList.contains("active")) {
      confirmButton.click();
    } else if (nextButton.classList.contains("active")) {
      nextButton.click();
    } else if (endButton.classList.contains("active")) {
      endButton.click();
    }
  }
});

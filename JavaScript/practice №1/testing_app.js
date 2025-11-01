const startTest = document.querySelector(".container .start-page .start-test");

const firstQuestion = document.querySelector(".container .questions .question-1");

const QuestionRequiredRadio = document.querySelectorAll(
  ".container .questions #question input[type='radio']"
);
const QuestionRequiredText = document.querySelectorAll(
  ".container .questions #question input[type='text']"
);

const nextButton = document.querySelector(".container .next-button");

const confirmButton = document.querySelector(".container .confirm-button");

const endButton = document.querySelector(".container .questions .submit-button");

const questions = document.querySelectorAll(".container .questions #question");

let allQuestions = 10;
let ratio;
let currentQuestion = 0;
let yourScore = 0;
let answers = {};
let correctAnswers = {
  "question-1": "option-3",
  "question-2": "option-2",
  "question-3": "option-4",
  "question-4": "option-3",
  "question-5": "option-1",
  "question-6": "option-2",
  "question-7": "межевой план",
  "question-8": "кадастр",
  "question-9": "бонитет",
  "question-10": "выдел",
};

startTest.addEventListener("click", (event) => {
  event.preventDefault();
  firstQuestion.classList.add("active");
  startTest.classList.remove("active");
});

QuestionRequiredRadio.forEach((displayButtonRadio) => {
  displayButtonRadio.addEventListener("click", () => {
    confirmButton.classList.add("active");
  });
});
QuestionRequiredText.forEach((displayButtonText) => {
  displayButtonText.addEventListener("change", () => {
    confirmButton.classList.add("active");
  });
});

confirmButton.addEventListener("click", () => {
  confirmButton.classList.remove("active");
  nextButton.classList.add("active");
  QuestionRequiredRadio.forEach((disabledRadio) => {
    disabledRadio.disabled = true;
  });
  const current = questions[currentQuestion];
  const selectedRadio = current.querySelector("input[type='radio']:checked");
  const selectedText = current.querySelector("input[type='text']");
  if (selectedRadio) {
    const name = selectedRadio.name;
    const value = selectedRadio.value;
    answers[name] = value;
    if (answers[name] === correctAnswers[name]) {
      console.log("верно");
      selectedRadio.classList.add("correct");
    } else {
      console.log("не верно");
      selectedRadio.classList.add("incorrect");
    }
  } else if (selectedText) {
    const name = selectedText.name;
    const value = selectedText.value.trim().toLowerCase();
    answers[name] = value;
    if (answers[name] === correctAnswers[name]) {
      console.log("верно");
      selectedText.classList.add("correct");
    } else {
      console.log("не верно");
      selectedText.classList.add("incorrect");
    }
  }
});

nextButton.addEventListener("click", () => {
  nextButton.classList.remove("active");
  QuestionRequiredRadio.forEach((disabledRadio) => {
    disabledRadio.disabled = false;
  });
  questions[currentQuestion].classList.remove("active");
  currentQuestion++;
  if (currentQuestion < questions.length) {
    questions[currentQuestion].classList.add("active");
  } else {
    console.log(answers);
    for (const key in correctAnswers) {
      if (answers[key] === correctAnswers[key]) {
        yourScore++;
      }
    }
    console.log(yourScore);
    const yourScoreText = document.querySelector(".container .your-score");
    if (yourScoreText) {
      yourScoreText.classList.add("active");
      ratio = (yourScore / allQuestions) * 100;
      yourScoreText.textContent =
        "Ваш результат: " + yourScore + " из " + allQuestions + " (" + ratio + "%)";
    }

    endButton.classList.add("active");
  }
});
document.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();

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

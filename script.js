document.addEventListener("DOMContentLoaded", function () {
  const questions = [
    {
      question: "Who came to India first?",
      options: ["Portuguese", "Dutch", "British", "French"],
      correctAnswer: "Portuguese",
    },
    {
      question: "Who translated the Bhagavad Gita into English for the first time?",
      options: [
        "Hariram Acharya",
        "Charles Wilkins",
        "MV Nadkarni",
        "Stephen Mitchell",
      ],
      correctAnswer: "Charles Wilkins",
    },
    {
      question: "The first city to be explored in India was?",
      options: [
        "Mohenjo-daro",
        "Lothal",
        "Harappa",
        "Kali Bangan",
      ],
      correctAnswer: "Harappa",
    },
    {
      question: "Which ruler introduced the rupee?",
      options: [
        "Alauddin Khilji",
        "Sher Shah Suri",
        "Ibrahim Lodi",
        "Firuz Shah Suri",
      ],
      correctAnswer: "Sher Shah Suri",
    },
    {
      question: "Who was the founder of Mughal Empire?",
      options: [
        "Babur",
        "Akbar",
        "Aurangzeb",
        "Shah Jahan",
      ],
      correctAnswer: "Babur",
    },
    
  ];

  let currentQuestion = 0;
  let score = 0;

  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const feedbackElement = document.getElementById("feedback");
  const submitButton = document.getElementById("submit-btn");

  submitButton.addEventListener("click", endQuiz);

  function displayQuestion() {
    const currentQ = questions[currentQuestion];
    questionElement.textContent = currentQ.question;
    optionsElement.innerHTML = "";
    currentQ.options.forEach((option, index) => {
      const optionButton = document.createElement("button");
      optionButton.textContent = option;
      optionButton.addEventListener("click", () => checkAnswer(option));
      optionsElement.appendChild(optionButton);
    });
  }

  function displayIndicators() {
    const indicatorsContainer = document.getElementById("indicators");
    indicatorsContainer.innerHTML = "";
    questions.forEach(() => {
      const indicator = document.createElement("div");
      indicator.classList.add("feedback-indicator");
      indicatorsContainer.appendChild(indicator);
    });
  }

  function updateIndicator(index, isCorrect) {
    const indicators = document.querySelectorAll(".feedback-indicator");
    const indicator = indicators[index];
    if (isCorrect) {
      indicator.classList.add("correct");
      indicator.innerHTML = "&#10003";
    } else {
      indicator.classList.add("incorrect");
      indicator.innerHTML = "&#10007";
    }
  }

  function checkAnswer(selectedAnswer) {
    const currentQ = questions[currentQuestion];
    if (selectedAnswer === currentQ.correctAnswer) {
      score++;
      updateIndicator(currentQuestion, true);
    } else {
      updateIndicator(currentQuestion, false);
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }

  function endQuiz() {
    questionElement.textContent = "";
    optionsElement.innerHTML = "";
    feedbackElement.textContent = `Quiz completed! Your Score is ${score}/${questions.length}.`;
    submitButton.style.display = "none";
  }

  displayIndicators();
  displayQuestion();
});

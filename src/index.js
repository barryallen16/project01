// Quiz Questions with answers in JS
const questions = [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Paris", correct: true },
        { text: "London", correct: false },
        { text: "Berlin", correct: false },
        { text: "Rome", correct: false }
      ]
    },
    {
      question: "Who was the first person to travel in Space?",
      answers: [
        { text: "Yuri Gagarin", correct: true },
        { text: "Laika", correct: false },
        { text: "Neil Armstrong", correct: false },
        { text: "Buzz Aldrin", correct: false }
      ]
    },
    {
      question: "What is the largest planet in our solar system?",
      answers: [
        { text: "Jupiter", correct: true },
        { text: "Saturn", correct: false },
        { text: "Earth", correct: false },
        { text: "Mars", correct: false }
      ]
    },
    {
        question: "Which element is the most abundant in Earth's atmosphere?",
        answers: [
          { text: "Oxygen", correct: false },
          { text: "Nitrogen", correct: true },
          { text: "Carbon Dioxide", correct: false },
          { text: "Hydrogen", correct: false }
        ]
      },
      {
        question: "What is the longest river in the world?",
        answers: [
          { text: "Amazon River", correct: true },
          { text: "Nile River", correct: false },
          { text: "Yangtze River", correct: false },
          { text: "Mississippi River", correct: false }
        ]
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
          { text: "China", correct: false },
          { text: "Japan", correct: true },
          { text: "South Korea", correct: false },
          { text: "Thailand", correct: false }
        ]
      },
      {
        question: "What is the hardest natural substance on Earth?",
        answers: [
          { text: "Gold", correct: false },
          { text: "Diamond", correct: true },
          { text: "Iron", correct: false },
          { text: "Platinum", correct: false }
        ]
      },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question-text");
  const answerButtons = document.getElementById("answer-buttons");
  const nextButton = document.getElementById("next-btn");
  const restartButton = document.getElementById("restart-btn");
  const questionNumberElement = document.getElementById("question-number");
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = "none";
    restartButton.style.display = "none";
    showQuestion();
  }
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    questionNumberElement.textContent = `Question ${currentQuestionIndex + 1}`;
  
    answerButtons.innerHTML = ''; 
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement("button");
      button.classList.add("quiz-option", "bg-blue-500", "hover:bg-blue-700", "text-white", "font-bold", "py-2", "px-4", "rounded", "w-full");
      button.textContent = answer.text;
      button.addEventListener("click", () => selectAnswer(button, answer.correct));
      answerButtons.appendChild(button);
    });
  }
  
  function selectAnswer(selectedButton, isCorrect) {
    const allButtons = answerButtons.querySelectorAll("button");
  
    allButtons.forEach(button => button.disabled = true);
  
    if (isCorrect) {
      selectedButton.classList.add("bg-green-500");
      score++;
    } else {
      selectedButton.classList.add("bg-red-500");
    }
  
    nextButton.style.display = "block";
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
      nextButton.style.display = "none";
    } else {
      showResults();
    }
  });
  
  function showResults() {
    questionElement.textContent = `You scored ${score} out of ${questions.length}`;
    questionNumberElement.textContent = "";
    nextButton.style.display = "none";
    restartButton.style.display = "block";
  }
  
  restartButton.addEventListener("click", () => {
    startQuiz();
  });
  
  window.onload = startQuiz;
  
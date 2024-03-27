// console.log("hello world");
// const question = document.querySelector("#question");
// const choices = document.querySelectorAll(".choice-text");
// const progressText = document.querySelector("#progressText");
// const scoreText = document.querySelector("#score");
// const progressBarFull = document.querySelector("#progressBarFull");
// const timerDisplay = document.getElementById("timer");
// const imgElement = document.getElementById("img");
// const choiceImages = document.querySelectorAll("#choice-image");

// let currentQuestion = {};
// let acceptingAnswers = true;
// let score = 0;
// let questionCounter = 0;
// let availableQuestions = [];
// let countdown; // Declaring countdown variable

// let questions = [
//   {
//     question:
//       " You are assessing Patient's neck : Lymph nodes should not be ______ in a healthy adult patient",
//     img: "",
//     choice1: "Tender",
//     choice1_img: "/characters/Ana.png",
//     choice2: "Too close together",
//     choice2_img: "",
//     choice3: "Palpable ",
//     choice3_img: "",
//     choice4: "Under muscle masses.",
//     choice4_img: "",
//     answer: 1,
//   },
//   {
//     question:
//       "To facilitate palpation of the thyroid gland, you instruct your patient to:",
//     img: "",
//     choice1: "Rotate the neck.",
//     choice1_img: "",
//     choice2: "Hyperextend the neck.",
//     choice2_img: "",
//     choice3: "Swallow",
//     choice3_img: "",
//     choice4: "Hold your breath",
//     choice4_img: "",
//     answer: 3,
//   },

//   {
//     question:
//       "When examining a client's thyroid gland, the nurse ensures this equipment is readily available.",
//     img: "",
//     choice1: "Penlight",
//     choice1_img: "",
//     choice2: "Tongue depressor ",
//     choice2_img: "",
//     choice3: "Centimeter-scale ruler ",
//     choice3_img: "",
//     choice4: "Cup of water",
//     choice4_img: "",
//     answer: 4,
//   },
// ];

// const SCORE_POINTS = 10;
// const MAX_QUESTIONS = 3;
// const QUESTION_TIME = 1000; // Time in seconds for each question

// startGame = () => {
//   questionCounter = 0;
//   score = 0;
//   availableQuestions = [...questions];
//   getNewQuestion();
// };

// getNewQuestion = () => {
//   if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
//     localStorage.setItem("mostRecentScore", score);
//     return window.location.assign("/end.html");
//   }

//   questionCounter++;
//   progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
//   progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

//   // Select the first question in the availableQuestions array
//   currentQuestion = availableQuestions.shift();
//   question.innerText = currentQuestion.question;

//   // Toggle image visibility
//   if (currentQuestion.img !== "") {
//     imgElement.src = currentQuestion.img;
//     imgElement.style.display = "block";
//   } else {
//     imgElement.style.display = "none";
//   }

//   choices.forEach((choice, index) => {
//     choice.innerText = currentQuestion[`choice${index + 1}`];
//     // Set the image source for each choice
//     const imgSrc = currentQuestion[`choice${index + 1}_img`];
//     choiceImages[index].src = imgSrc;
//   });

//   // Reset the timer display
//   timerDisplay.textContent = QUESTION_TIME;
//   // Start the countdown
//   startTimer(QUESTION_TIME);

//   acceptingAnswers = true;
// };

// function startTimer(time) {
//   let timer = time;
//   countdown = setInterval(() => {
//     timer--;
//     timerDisplay.textContent = timer;
//     if (timer <= 0) {
//       clearInterval(countdown);
//       getNewQuestion();
//     }
//   }, 1000);
// }

// choices.forEach((choice) => {
//   choice.addEventListener("click", (e) => {
//     if (!acceptingAnswers) return;

//     acceptingAnswers = false;
//     const selectedChoice = e.target;
//     const selectedAnswer = selectedChoice.dataset["number"];

//     const isCorrect = selectedAnswer == currentQuestion.answer;

//     if (isCorrect) {
//       incrementScore(SCORE_POINTS);
//       selectedChoice.parentElement.style.backgroundColor = "green";
//     } else {
//       decrementScore(SCORE_POINTS);
//       selectedChoice.parentElement.style.backgroundColor = "red";
//     }

//     clearInterval(countdown);
//     setTimeout(() => {
//       selectedChoice.parentElement.style.backgroundColor = "";
//       getNewQuestion();
//     }, 1000);
//   });
// });

// function incrementScore(num) {
//   score += num;
//   scoreText.innerText = score;
// }

// function decrementScore(num) {
//   if (score > 0) {
//     score = Math.max(0, score - 2);
//     scoreText.innerText = score;
//   }
// }

// startGame();

console.log("hello world");
const question = document.querySelector("#question");
const choices = document.querySelectorAll(".choice-text");
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");
const timerDisplay = document.getElementById("timer");
const imgElement = document.getElementById("img");
const choiceImages = document.querySelectorAll("#choice-image");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let countdown; // Declaring countdown variable

let questions = [
  {
    question:
      " You are assessing Patient's neck : Lymph nodes should not be ______ in a healthy adult patient",
    img: "",
    choice1: "Tender",
    choice1_img: "/characters/Ana.png",
    choice2: "Too close together",
    choice2_img: "",
    choice3: "Palpable ",
    choice3_img: "",
    choice4: "Under muscle masses.",
    choice4_img: "",
    answer: 1,
  },
  {
    question:
      "To facilitate palpation of the thyroid gland, you instruct your patient to:",
    img: "",
    choice1: "Rotate the neck.",
    choice1_img: "",
    choice2: "Hyperextend the neck.",
    choice2_img: "",
    choice3: "Swallow",
    choice3_img: "",
    choice4: "Hold your breath",
    choice4_img: "",
    answer: 3,
  },

  {
    question:
      "When examining a client's thyroid gland, the nurse ensures this equipment is readily available.",
    img: "",
    choice1: "Penlight",
    choice1_img: "",
    choice2: "Tongue depressor ",
    choice2_img: "",
    choice3: "Centimeter-scale ruler ",
    choice3_img: "",
    choice4: "Cup of water",
    choice4_img: "",
    answer: 4,
  },

  {
    question:
      "Ms. Ana reported a fluid-filled skin lesion on her right arm. Upon inspection, the nurse noticed that the lesion size was </= to 1cm. What type of skin lesion does Ms. Ana have? ",
      img: "",
    choice1: "papule ",
    choice1_img: "",
    choice2: "vesicle",
    choice2_img: "",
    choice3: "pustule ",
    choice3_img: "",
    choice4: "macule ",
    choice4_img: "",
    answer: 2,
  },
  {
    question: "What does the condition in the picture indicate? ",
    img: "",
    choice1: "not-intact cranial nerve  ",
    choice1_img: "",
    choice2: "damage to the frontal lobe of the brain. ",
    choice2_img: "",
    choice3: "poor oxygenation  ",
    choice3_img: "",
    choice4: "dehydration ",
    choice4_img: "",
    answer: 3,
  },
  {
    question:
      " The gag reflex is controlled by which of the following cranial nerves?  ",
      img: "",
    choice1: "IX and X  ",
    choice1_img: "",
    choice2: "IV and VI ",
    choice2_img: "",
    choice3: "VIII and IX ",
    choice3_img: "",
    choice4: "I and II  ",
    choice4_img: "",
    answer: 1,
  },

];

const SCORE_POINTS = 10;
const MAX_QUESTIONS = 5;
const QUESTION_TIME = 1000; // Time in seconds for each question

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("/end.html");
  }

  questionCounter++;
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  // Select the first question in the availableQuestions array
  currentQuestion = availableQuestions.shift();
  question.innerText = currentQuestion.question;

  // Toggle image visibility
  if (currentQuestion.img !== "") {
    imgElement.src = currentQuestion.img;
    imgElement.style.display = "block";
  } else {
    imgElement.style.display = "none";
  }

  choices.forEach((choice, index) => {
    choice.innerText = currentQuestion[`choice${index + 1}`];
    // Set the image source for each choice
    const imgSrc = currentQuestion[`choice${index + 1}_img`];
    choiceImages[index].src = imgSrc;
  });

  // Reset the timer display
  timerDisplay.textContent = QUESTION_TIME;
  // Start the countdown
  startTimer(QUESTION_TIME);

  acceptingAnswers = true;
};

function startTimer(time) {
  let timer = time;
  countdown = setInterval(() => {
    timer--;
    timerDisplay.textContent = timer;
    if (timer <= 0) {
      clearInterval(countdown);
      getNewQuestion();
    }
  }, 1000);
}

// Add event listeners to both choice text and choice image
choices.forEach((choice, index) => {
  choice.addEventListener("click", (e) => handleChoiceSelection(e, index));
  choiceImages[index].addEventListener("click", (e) =>
    handleChoiceSelection(e, index)
  );
});

// Function to handle choice selection
function handleChoiceSelection(e, index) {
  if (!acceptingAnswers) return;

  acceptingAnswers = false;
  const selectedChoice = e.target;
  const selectedAnswer = selectedChoice.dataset["number"];

  const isCorrect = selectedAnswer == currentQuestion.answer;

  if (isCorrect) {
    incrementScore(SCORE_POINTS);
    selectedChoice.parentElement.style.backgroundColor = "green";
  } else {
    decrementScore(SCORE_POINTS);
    selectedChoice.parentElement.style.backgroundColor = "red";
  }

  clearInterval(countdown);
  setTimeout(() => {
    selectedChoice.parentElement.style.backgroundColor = "";
    getNewQuestion();
  }, 1000);
}

function incrementScore(num) {
  score += num;
  scoreText.innerText = score;
}

function decrementScore(num) {
  if (score > 0) {
    score = Math.max(0, score - 2);
    scoreText.innerText = score;
  }
}

startGame();

//No randomization 
// Not deducted -2 if the user has score 0 
console.log("hello world");
const question = document.querySelector("#question");
const choices = document.querySelectorAll(".choice-text");
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");
const timerDisplay = document.getElementById("timer"); // Reference to timer element

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
    choice1: "Tender",
    choice2: "Too close together",
    choice3: "Palpable ",
    choice4: "Under muscle masses.",
    answer: 1,
  },
  {
    question:
      "To facilitate palpation of the thyroid gland, you instruct your patient to:",
    choice1: "Rotate the neck.",
    choice2: "Hyperextend the neck.",
    choice3: "Swallow",
    choice4: "Hold your breath",
    answer: 3,
  },
  {
    question:
      "When examining a client's thyroid gland, the nurse ensures this equipment is readily available.",
    choice1: "Penlight",
    choice2: "Tongue depressor ",
    choice3: "Centimeter-scale ruler ",
    choice4: "Cup of water",
    answer: 4,
  },
  {
    question:
      "Ms. Ana reported a fluid-filled skin lesion on her right arm. Upon inspection, the nurse noticed that the lesion size was </= to 1cm. What type of skin lesion does Ms. Ana have? ",
    choice1: "papule ",
    choice2: "vesicle",
    choice3: "pustule ",
    choice4: "macule ",
    answer: 2,
  },
  {
    question: "What does the condition in the picture indicate? ",
    choice1: "not-intact cranial nerve  ",
    choice2: "damage to the frontal lobe of the brain. ",
    choice3: "poor oxygenation  ",
    choice4: "dehydration ",
    answer: 3,
  },

  {
    question:
      " The gag reflex is controlled by which of the following cranial nerves?  ",
    choice1: "IX and X  ",
    choice2: "IV and VI ",
    choice3: "VIII and IX ",
    choice4: "I and II  ",
    answer: 1,
  },

  {
    question:
      "Nurse Regie when doing his head-to-toe assessment on his client asks him to smile, frown, wrinkle his forehead, puff cheeks, raise eyebrows, and close his eyelids. In doing this the nurse is assessing which cranial nerve? ",
    choice1: "cranial nerve 5  ",
    choice2: "cranial nerve 7 ",
    choice3: "cranial nerve 3  ",
    choice4: "cranial nerve 4  ",
    answer: 2,
  },

  {
    question:
      "When a nurse assesses a client's vision using either the Snellen chart or newspaper finger-wiggle test which cranial nerve are they assessing?  ",
    choice1: "cranial nerve 5  ",
    choice2: "cranial nerve 7 ",
    choice3: "cranial nerve 3  ",
    choice4: "cranial nerve 2  ",
    answer: 4,
  },

  {
    question:
      "Nurse George has just assessed his client's articulation, language, and other aspects of his speech. In doing these which cranial nerves has he just assessed?  ",
    choice1: "cranial nerves 4 and 5  ",
    choice2: "cranial nerves 6 and 12 ",
    choice3: "cranial nerves 9 and 11 ",
    choice4: "cranial nerves 10 and 12 ",
    answer: 4,
  },

  {
    question: " A balance dysfunction is probably due to which nerve:  ",
    choice1: "IV",
    choice2: "V",
    choice3: "VIII",
    choice4: " VII ",
    answer: 3,
  },

  {
    question:
      " When assessing a client's eyes the very first thing that a nurse should look at is?  ",
    choice1: "eyes internal structures",
    choice2: "the pupil’s reactivity to light",
    choice3: "eyes external structures",
    choice4: "color of the irises of the eye ",
    answer: 3,
  },

  {
    question:
      "Three things a nurse needs to check for when doing an examination on the eyes regarding the external structure is? ",
    choice1: "eyelash distribution, coloring, drainage ",
    choice2: "shape of eyes, pupils reactivity, iris's color ",
    choice3: "eyeslash texture, coloring, drainage ",
    choice4: "drainage, possible tumors, irritation  ",
    answer: 1,
  },

  {
    question:
      "When performing an assessment on a patient's eyes what might the nurse use the ophthalmoscope for?  ",
    choice1: "PERRLA ",
    choice2: "corneal reflex test ",
    choice3: "consensual light reflex test ",
    choice4: "red light reflex ",
    answer: 4,
  },
  {
    question:
      " The clinic nurse notes that the following several eye examinations, the physician has documented a diagnosis of legal blindness in the client's chart. The nurse reviews the results of the Snellen's chart test expecting to note which of the following?  ",
    choice1: "20/20 vision",
    choice2: "20/40 vision ",
    choice3: "20/60 vision ",
    choice4: "20/200 vision ",
    answer: 4,
  },

  {
    question: "The red light reflex is caused by the ",
    choice1: "refraction of light off the conjunctiva ",
    choice2: "reflection of light off the inner retina ",
    choice3: "reflection of light off the choroids layer ",
    choice4: "condensation of light as it passess through the aqueous humore ",
    answer: 2,
  },
  {
    question:
      "When examining the ear with an otoscope, the nurse notes that the tympanic membrane should appear:  ",
    choice1: "light pink with a slight bulge. ",
    choice2: "pearly gray and slightly concave. ",
    choice3: "pulled in at the base of the cone of light.  ",
    choice4: "whitish with a small fleck of light in the superior portion.  ",
    answer: 2,
  },
  {
    question:
      "If sound lateralizes to one ear when performing the Weber test, which of the following is occurring?  ",
    choice1: "sound is heard LONGER in one ear than the other.",
    choice2: "higher FREQUENCIES of sound are heard better in one ear ",
    choice3: "sound is heard LOUDER in one ear ",
    choice4: "electrical impulses are amplified in one ear  ",
    answer: 3,
  },
  {
    question:
      "The nurse is performing a voice test to assess hearing. Which of the following describes the accurate procedure for performing this test? ",
    choice1:
      "Stand 4 feet away from the client to ensure that the client can hear at this distance. ",

    choice2:
      "Whisper a statement and ask the client to repeat it while covering one ear at a time.  ",
    choice3: "Whisper a statement with the examiner back facing the client  ",
    choice4: "Whisper a statement while the client blocks both ears. ",
    answer: 2,
  },
  {
    question:
      " A nurse has explained her intention to conduct Weber's test and Rinne's test. Which is the following pieces of equipment will the nurse require? ",
    choice1: "Ophthalmoscope  ",
    choice2: "Otoscope",
    choice3: "Snellen Chart ",
    choice4: "Tuning Fork ",
    answer: 4,
  },
  {
    question:
      " Nerve deafness would most likely result from an injury or infection that damaged the: ",
    choice1: "Trochlear nerve  ",
    choice2: "Vagus nerve ",
    choice3: "Trigeminal nerve  ",
    choice4: "Vestibuloochlear nerve ",
    answer: 4,
  },
];

const SCORE_POINTS = 10;
const MAX_QUESTIONS = 20;
const QUESTION_TIME = 10; // Time in seconds for each question

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

  choices.forEach((choice, index) => {
    choice.innerText = currentQuestion[`choice${index + 1}`];
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
    timerDisplay.textContent = timer; // Update timer in HTML
    if (timer <= 0) {
      clearInterval(countdown);
      getNewQuestion();
    }
  }, 1000);
}

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const isCorrect = selectedAnswer == currentQuestion.answer;

    if (isCorrect) {
      incrementScore(SCORE_POINTS);
      selectedChoice.parentElement.style.backgroundColor = "green"; // Apply green background for correct answer
    } else {
      decrementScore(SCORE_POINTS); // Decrease score, ensuring it doesn't go below 0
      selectedChoice.parentElement.style.backgroundColor = "red"; // Apply red background for incorrect answer
    }

    clearInterval(countdown); // Clear the countdown when an answer is selected
    setTimeout(() => {
      selectedChoice.parentElement.style.backgroundColor = ""; // Reset background color after some time
      getNewQuestion();
    }, 1000);
  });
});

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





// // No randomization 
// console.log("hello world");
// const question = document.querySelector("#question");
// const choices = document.querySelectorAll(".choice-text");
// const progressText = document.querySelector("#progressText");
// const scoreText = document.querySelector("#score");
// const progressBarFull = document.querySelector("#progressBarFull");

// let currentQuestion = {};
// let acceptingAnswers = true;
// let score = 0;
// let questionCounter = 0;
// let availableQuestions = [];

// const questions = [
//   {
//     question:
//       " You are assessing Patient's neck : Lymph nodes should not be ______ in a healthy adult patient",
//     choice1: "Tender",
//     choice2: "Too close together",
//     choice3: "Palpable ",
//     choice4: "Under muscle masses.",
//     answer: 1,
//   },
//   {
//     question:
//       "To facilitate palpation of the thyroid gland, you instruct your patient to:",
//     choice1: "Rotate the neck.",
//     choice2: "Hyperextend the neck.",
//     choice3: "Swallow",
//     choice4: "Hold your breath",
//     answer: 3,
//   },
//   {
//     question:
//       "When examining a client's thyroid gland, the nurse ensures this equipment is readily available.",
//     choice1: "Penlight",
//     choice2: "Tongue depressor ",
//     choice3: "Centimeter-scale ruler ",
//     choice4: "Cup of water",
//     answer: 4,
//   },
  
// ];

// const SCORE_POINTS = 10;
// const MAX_QUESTIONS = 4;

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

//   const questionIndex = 0; // No randomization, always pick the first question
//   currentQuestion = availableQuestions[questionIndex];
//   questionCounter++;
//   progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
//   progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

//   question.innerText = currentQuestion.question;

//   choices.forEach((choice, index) => {
//     choice.innerText = currentQuestion[`choice${index + 1}`];
//   });

//   availableQuestions.splice(questionIndex, 1);

//   acceptingAnswers = true;
// };

// choices.forEach((choice) => {
//   choice.addEventListener("click", (e) => {
//     if (!acceptingAnswers) return;
    
//     acceptingAnswers = false;
//     const selectedChoice = e.target;
//     const selectedAnswer = selectedChoice.dataset["number"];

//     const isCorrect = selectedAnswer == currentQuestion.answer;

//     if (isCorrect) {
//       incrementScore(SCORE_POINTS);
//       selectedChoice.parentElement.style.backgroundColor = "green"; // Apply green background for correct answer
//     } else {
//       decrementScore(2);
//       selectedChoice.parentElement.style.backgroundColor = "red"; // Apply red background for incorrect answer
//     }

//     setTimeout(() => {
//       selectedChoice.parentElement.style.backgroundColor = ""; // Reset background color after some time
//       getNewQuestion();
//     }, 1000);
//   });
// });

// function incrementScore(num) {
//   score += num;
//   scoreText.innerText = score;
// }

// function decrementScore(num) {
//   score -= num;
//   scoreText.innerText = score;
// }

// startGame();

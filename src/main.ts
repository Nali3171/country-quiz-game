import './styles.scss';
let currentQuestionIndex = 0;
let score = 0;

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

//question type
//create an array of questions text with 4 answer options
const questions: Question[] = [
{
  question: "What is the name of the world's tallest mountain?",
  options: ["Kilimanjaro", "Himalayas", "Mount Everest", "Barisan Mountains"],
  correctAnswer: "Mount Everest",
},
{
  question: "What is the flattest country in the world?",
  options: ["Maldives", "Tanzania", "India", "Russia"],
  correctAnswer: "Maldives",
},
{
  question: "Which country is home to the world's longest Tunnel?",
  options: ["Hungary", "Albania", "Switzerland", "Argentina"],
  correctAnswer: "Switzerland",
},
{
  question: "How many uninhabited villages does Russia have?",
  options: ["9,000", "100", "50,000", "13,000"],
  correctAnswer: "13,000",
},
{
  question: "What is the Taj Mahal made of?",
  options: ["Marble", "Brick", "Rubber", "Timber wood"],
  correctAnswer: "Marble",
},
{
  question: "what is the most spoken african language?",
  options: ["German", "Swahili", "Arabic", "Yoruba"],
  correctAnswer: "Swahili",
},
];

// DOM Elements
const questionElement = document.querySelector(".question") as HTMLElement;

const answerButtons = document.querySelectorAll(".answer-btn") as NodeListOf<HTMLButtonElement>;

const scoreElement = document.getElementById("score") as HTMLElement;

const restartButton = document.getElementById("restart-button") as HTMLButtonElement;

const resultElement = document.getElementById("result") as HTMLElement;

//start game
function startGame() {
  currentQuestionIndex = 0;
  score = 0;
 updateUI();
};

//update current question and answers
function updateUI() {
  const currentQuestion = questions[currentQuestionIndex];

  // Update the question text
  questionElement.textContent = currentQuestion.question;

  // Update the answer button texts and enable them
  answerButtons.forEach((button, index) => {
    button.textContent = currentQuestion.options[index];
    button.disabled = false; // Enable buttons for the new question
  });

  resultElement.textContent ="";

  // Update the score display
  scoreElement.textContent = `Score: ${score}`;

  // Hide the restart button
  restartButton.style.display = "none";
}

// when answer button is clicked
function handleAnswerClick(event: MouseEvent) {
  const targetButton = event.target as HTMLButtonElement;
  const selectedAnswerIndex = parseInt(targetButton.dataset.answer!);

  // Check if the selected answer is correct
  const currentQuestion = questions[currentQuestionIndex];
  if (currentQuestion.options[selectedAnswerIndex] === currentQuestion.correctAnswer) {
    score++; 
    resultElement.textContent = "Correct!";
    }
    else{
      resultElement.textContent = "Incorrect!";
    }

  // Disable all buttons after answering
   answerButtons.forEach(button => button.disabled = true);  

  // Move to the next question 
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      updateUI(); // Load the next question
    } else {
      endGame(); // End the game if no more questions
    }
  }, 1000); // Delay of 1 second before showing the next question
}

// this function will end the game and show final score
function endGame() {
  questionElement.textContent = "Game Over!";
  scoreElement.textContent = `Final Score: ${score} out of ${questions.length}`;
  restartButton.style.display = "block"; // Show restart button
}

function restartGame() {
  currentQuestionIndex = 0;
  score = 0;
  startGame(); // Reset and start the game
}

// Add event listeners to answer buttons
answerButtons.forEach(button => button.addEventListener("click", handleAnswerClick));

// Add event listener to restart button
restartButton.addEventListener("click", restartGame);

// Start the game when the page loads
startGame();


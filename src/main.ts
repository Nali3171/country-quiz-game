import './styles.scss';

 
let currentQuestionIndex = 0;
let score = 0;

const questions: Question[] = [
{
  question: "What is the name of the world's tallest mountain?",
  answers: ["Kilimanjaro", "Himalayas", "Mount Everest", "Barisan Mountains"],
  correctAnswerIndex: 2,
},
{
  question: "What is the flattest country in the world?",
  answers: ["Maldives", "Tanzania", "India", "Russia"],
  correctAnswerIndex: 1,
},
{
  question: "Which country is home to the world's longest Tunnel?",
  answers: ["Hungary", "Albania", "Switzerland", "Argentina"],
  correctAnswerIndex: 2,
},
{
  question: "How many uninhabited villages does Russia have?",
  answers: ["9,000", "100", "50,000", "13,000"],
  correctAnswerIndex: 3,
},
{
  question: "What is the Taj Mahal made of?",
  answers: ["Marble", "Brick", "Rubber", "Timber wood"],
  correctAnswerIndex: 2,
},
{
  question: "what is the most spoken african language?",
  answers: ["German", "Swahili", "Arabic", "Yoruba"],
  correctAnswerIndex: 1,
},
];

// DOM Elements
const questionElement = document.querySelector(".question") as HTMLElement;
const answerButtons = document.querySelectorAll(".answer-btn") as NodeListOf<HTMLButtonElement>;
const scoreElement = document.getElementById("score") as HTMLElement;
const restartButton = document.getElementById("restart-button") as HTMLButtonElement;


//start game
function startGame(){
  currentQuestionIndex = 0;
  score = 0;
 updateUI();
}
function updateUI() {
  const currentQuestion = questions[currentQuestionIndex];

  // Update the question text
  questionElement.textContent = currentQuestion.question;

  // Update the answer button texts and enable them
  answerButtons.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
    button.disabled = false; // Enable buttons for the new question
  });

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
  if (selectedAnswerIndex === currentQuestion.correctAnswerIndex) {
    score++; // Increment score if the answer is correct
  }

  // Disable all buttons after answering
  answerButtons.forEach(button => button.disabled = true);

  // Move to the next question or end the game
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      updateUI(); // Load the next question
    } else {
      endGame(); // End the game if no more questions
    }
  }, 1000); // Delay of 1 second before showing the next question
}


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


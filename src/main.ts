import './styles.scss';


let currentQuestionIndex = 0;
let score = 0;

const questions: Question[] = [
{
  question: "What is the name of the world's tallest mountain?",
  answers: ["Kilimanjaro", "Himalayas", "Mount Everest", "Barisan Mountains"],
  correctAnswerIndex: 2,
},
];


//Dom Elements


//start game
function startGame(){
  currentQuestionIndex = 0;
  score = 0;
//updateUI();
}


function updateUI(){
  const currentQuestion = questions[currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;


  
}




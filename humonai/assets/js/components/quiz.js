// quiz.js

const quizData = [
    {
      question: "Which AI bot are you most interested in?",
      choices: ["ChatGPT", "Bard", "Alexa", "Cortana", "Siri"],
    },
    {
      question: "What is your primary use case?",
      choices: ["Personal assistant", "Customer service", "Education", "Entertainment", "Other"],
    },
    {
      question: "Which feature is most important to you?",
      choices: ["Voice recognition", "Natural language understanding", "Integration with apps", "Privacy and security", "Cost"],
    },
    {
      question: "How would you rate your technical expertise?",
      choices: ["Beginner", "Intermediate", "Advanced"],
    },
  ];
  
  let currentQuestionIndex = 0;
  let selectedAnswers = [];
  
  function showQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');
    const feedbackElement = document.getElementById('feedback');
    const nextButton = document.getElementById('next-btn');
    
    questionElement.textContent = quizData[currentQuestionIndex].question;
    choicesElement.innerHTML = '';
    feedbackElement.textContent = '';
    nextButton.style.display = 'none';
  
    quizData[currentQuestionIndex].choices.forEach(choice => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.textContent = choice;
      button.onclick = () => selectAnswer(choice);
      li.appendChild(button);
      choicesElement.appendChild(li);
    });
    
    updateProgressBar();
  }
  
  function selectAnswer(choice) {
    selectedAnswers[currentQuestionIndex] = choice;
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = `You selected: ${choice}`;
    document.getElementById('next-btn').style.display = 'block';
  }
  
  function updateProgressBar() {
    const progressElement = document.getElementById('progress');
    const progressPercentage = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressElement.style.width = progressPercentage + '%';
  }
  
  function showResults() {
    const quizElement = document.getElementById('quiz-container');
    const resultElement = document.getElementById('result');
    const resultSummary = document.getElementById('result-summary');
    
    quizElement.style.display = 'none';
    resultElement.style.display = 'block';
    
    resultSummary.innerHTML = '';
    selectedAnswers.forEach((answer, index) => {
      const p = document.createElement('p');
      p.textContent = `Q${index + 1}: ${answer}`;
      resultSummary.appendChild(p);
    });
  }
  
  function startQuiz() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    showQuestion();
  }
  
  document.getElementById('start-btn').addEventListener('click', startQuiz);
  document.getElementById('next-btn').addEventListener('click', () => {
    if (currentQuestionIndex < quizData.length - 1) {
      currentQuestionIndex++;
      showQuestion();
    } else {
      showResults();
    }
  });
  
  document.getElementById('retake-btn').addEventListener('click', () => {
    currentQuestionIndex = 0;
    selectedAnswers = [];
    document.getElementById('result').style.display = 'none';
    startQuiz();
  });
  
  // Initialize quiz
  showQuestion();
  
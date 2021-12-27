var TimeLeft = 60;
var CurrentQuestion = 0;
var StartButton = document.querySelector('.start_btn button');
var TimerDisplay = document.querySelector ('.TimeLeft')

//Quiz Questions stored in an array

var Questions = [     
    {
    
        question: "Arrays in JavaScript can be used to store _______.",
        
        answers: {
            1:"numbers and strings",
    
            2:"other arrays",
    
            3:"booleans",
    
            4:"all of the above"
        },
    
        correctAnswer:'4'
    },
    {
        question: "A very useful tool used during development and debuggging for printing content to the debugger is:",
        
        answers: {
            1:"JavaScript",
    
            2:"terminal/bash",
    
            3:"console.log",
    
            4:"for loops"
        },
    
        correctAnswer:'3'
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        
        answers: {
            1:"quotes",
    
            2:"curly brackets",
    
            3:"commas",
    
            4:"parenthesis"
        },
    
        correctAnswer:'1'
    },
    {
        question: "Commonly used data types DO NOT include:",
        
        answers: {
            1:"strings",
    
            2:"booleans",
     
            3:"alerts",
    
            4:"numbers"
        },
    
        correctAnswer:'3'
    },
    {
        question: "Inside which HTML element do we put the JavaScript",
        
        answers: {
            1:"<javascript>",
    
            2:"<script>",
    
            3:"<js>>",
    
            4:"<scripting>"
        },
    
        correctAnswer:'2'
    },
]

// Countdown timer.

function startTimer() {
      function tick(){
      if (TimeLeft > 0 ) {
         TimerDisplay.innerHTML = TimeLeft + ' seconds';
         TimeLeft--;
         setTimeout(tick, 1000);
      } else {
        TimerDisplay.innerHTML = "Game Over!"
      }

    }
    tick();
}

// Starting our Quiz

function beginQuiz() {
    document.

}


TimerDisplay.innerHTML = TimeLeft + ' seconds';

StartButton.addEventListener('click', startTimer)




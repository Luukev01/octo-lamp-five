/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:

      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

*************************** */

window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
  });
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  
   // function to Display the quiz questions and answers from the object
   const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };

  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: 'What is the capital of Australia',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    {
      q: 'What is the largest river in Australia',
      o: ['Darling', 'Cooper', 'Murray', 'Roper'],
      a: 2,
    },
    {
      q: 'What is the Fastest Animal in the world?',
      o: ['White Throated Needletail', 'Peregrine falcon', 'Sail Fish', 'Cheetah'],
      a: 1,
    }
  ];

// call the displayQuiz function
  displayQuiz();

    // Calculate the score
    const resultContainer = document.getElementById('results');


    calculateResult = () => {
      // Going through each question one by one 
      let score = 0;
      quizArray.forEach((quizItem, index) => {
        // Going through each option of the question
        for (let i = 0; i < 4; i++) {
          //highlight the li if it is the correct answer
          let li = `li_${index}_${i}`;
          let r = `radio_${index}_${i}`;
          liElement = document.querySelector('#' + li);
          radioElement = document.querySelector('#' + r);

          
          if (quizItem.a === i) {
            if (radioElement.checked) {
              score++;
            } 
            liElement.style.color = 'green'
          } else {
            liElement.style.color = 'red'
          }
        }
        resultContainer.textContent = `${score}/ ${quizArray.length}`;
      });
    }

// Timer

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

window.onload = function () {
  var fiveMinutes = 60 * 5,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};

window.setTimeout(calculateResult ,300000) // add the submit function into the setTimeout for timer to auto submit



  // event listener 
  const btnSubmit = document.querySelector('#btnSubmit');
  btnSubmit.addEventListener('click', calculateResult);


});

 // Page refresher function --> add onClick="refreshPage()" to the button
 function refreshPage(){
  window.location.reload();
} 

 
  

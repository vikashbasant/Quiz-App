const quizData = [
    {
        Question: 'In which decade was the American Institute of Electrical Engineers (AIEE) founded?',
        a:	'1850s',
        b:	'1880s',
        c:	'1930s',
        d:	'1950s',
        correct: 'b'
    },{
        Question: 'What is part of a database that holds only one type of information?',
        a:	'report',
        b:	'field',
        c:	'record',
        d:	'file',
        correct: 'b'
    },{
        Question: '"OS" computer abbreviation usually means ?',
        a:	'Order of Significance',
        b:	'Open Software',
        c:	'Operating System',
        d:	'fil Optical Sensore',
        correct: 'c'
    },{
        Question: 'In which decade with the first transatlantic radio broadcast occur?',
        a:	'1850s',
        b:	'1860s',
        c:	'1870s',
        d:	'1900s',
        correct: 'd'
    },{
        Question: '".MOV" extension refers usually to what kind of file?',
        a:	'Image file',
        b:	'Animation/movie file',
        c:	'Audio file',
        d:	'MS Office document',
        correct: 'b'
    },{
        Question: 'What year was JavaScript lanuched',
        a:	'2020',
        b:	'1996',
        c:	'1995',
        d:	'None of these',
        correct: 'c'
    }
    
];


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit")

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.Question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
}


function getSelected() {
    

    let answer = undefined;

    answerEls.forEach(answerEl => {

        if(answerEl.checked){
            answer = answerEl.id;
        }
        
    });

    return answer;
}


function deselectAnswers() {
    answerEls.forEach(answerEl => {

        answerEl.checked = false;
        
    });
}


submitBtn.addEventListener("click", () => {
    // check to see the answer:
    const answer = getSelected();
    // console.log(answer);

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            // console.log(score);
            quiz.innerHTML = `
            <h2> You answered correctly at ${score}/${quizData.length} questions. </h2>
            <button onclick="location.reload()">Reload</button>
            `;
        }
    }    
});
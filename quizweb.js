function openChat() {
    document.getElementById("chatbotContainer").style.display = "flex";
    document.getElementById("chatbotToggle").style.display = "none";
}

function closeChat() {
    document.getElementById("chatbotContainer").style.display = "none";
    document.getElementById("chatbotToggle").style.display = "block";
}

function showSignIn() {
    document.getElementById('body1').style.display = 'none';
    document.getElementById('signinForm').style.display = 'block';
}

function showSignUp() {
    document.getElementById('body1').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

function validateSignUpForm() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var errorMessage = document.getElementById('error-message');

    if (password !== confirmPassword) {
        errorMessage.style.display = 'block';
        return false;
    } else {
        errorMessage.style.display = 'none';
    }

    return true;
}

function showHome() {
    document.getElementById('signinForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('quizSection').style.display = 'none';
    document.getElementById('body1').style.display = 'flex';
}

function showQuiz(event) {
    event.preventDefault();
    document.getElementById('signinForm').style.display = 'none';
    document.getElementById('quizSection').style.display = 'block';
    loadQuiz(0);
    startTimer(); 
}


var questions = [
    {
        question: "Which of the following is not a primitive data type in JavaScript?",
        options: ["Number", "String", "Boolean", "Object"],
        correctAnswer: 3,
        answer: null
    },
    {
        question: "What does the “typeof” operator do in JavaScript?",
        options: ["Returns the data type of a variable", "Checks if a variable is defined", "Assigns a value to a variable", "Concatenates two strings"],
        correctAnswer: 0,
        answer: null
    },
    {
        question: "What is the output of the following code: console.log(2 + '2');",
        options: ["'4'", "'22'", "4", "22"],
        correctAnswer: 1,
        answer: null
    },
    {
        question: "Which of the following is not a comparison operator in JavaScript?",
        options: ["==", "===", "!=", "=<"],
        correctAnswer: 3,
        answer: null
    },
    {
        question: "What is the output of the following code: var x = 5; console.log(x++);",
        options: ["4", "5", "6", "Error"],
        correctAnswer: 1,
        answer: null
    },
    {
        question: "What is the output of the following code: var x = true; console.log(!x);",
        options: ["true", "false", "undefined", "null"],
        correctAnswer: 1,
        answer: null
    },
    {
        question: "Which built-in method returns the length of the string?",
        options: ["length()", "size()", "index()", "None of the above"],
        correctAnswer: 0,
        answer: null
    },
    {
        question: "Which of the following function of String object returns the calling string value converted to lower case?",
        options: ["toLocaleLowerCase()", "toLowerCase()", "toString()", "substring()"],
        correctAnswer: 1,
        answer: null
    },
    {
        question: "Which of the following is a valid JavaScript variable name?",
        options: ["2names", "_first_and_last_names", "FirstAndLast", "None of the above"],
        correctAnswer: 1,
        answer: null
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        options: ["changeOrder(order)", "reverse()", "sort(order)", "None of the above"],
        correctAnswer: 1,
        answer: null
    }
];

var currentPage = 0;

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        loadQuiz(currentPage);
    }
}

function nextPage() {
    if (currentPage < questions.length - 1) {
        currentPage++;
        loadQuiz(currentPage);
    }
}

function loadQuiz(page) {
    var quizContainer = document.getElementById('quizContainer');
    quizContainer.innerHTML = '';

    var questionElement = document.createElement('h2');
    questionElement.innerText = questions[page].question;
    quizContainer.appendChild(questionElement);

    var optionsElement = document.createElement('ul');
    quizContainer.appendChild(optionsElement);

    for (var index = 0; index < questions[page].options.length; index++) {
        var option = questions[page].options[index];
        var optionElement = document.createElement('li');
        var radioElement = document.createElement('input');

        radioElement.type = 'radio';
        radioElement.name = 'option';
        radioElement.value = index;

        if (questions[page].answer === index) {
            radioElement.checked = true;
        }

        radioElement.onclick = (function (idx) {
            return function () {
                questions[page].answer = idx;
                loadPagination();
            };
        })(index);

        optionElement.appendChild(radioElement);
        optionElement.appendChild(document.createTextNode(' ' + option));
        optionsElement.appendChild(optionElement);
    }

    loadPagination();
}

function loadPagination() {
    var paginationElement = document.getElementById('pagination');
    paginationElement.innerHTML = '';

    for (var index = 0; index < questions.length; index++) {
        var question = questions[index];
        var pageElement = document.createElement('div');
        pageElement.className = 'page-number';
        pageElement.style.backgroundColor = 'red';

        if (index === currentPage) {
            pageElement.style.backgroundColor = 'white';
        }

        if (question.answer !== null) {
            pageElement.style.backgroundColor = 'green';
        }

        pageElement.innerText = index + 1;

        (function (idx) {
            pageElement.onclick = function () {
                currentPage = idx;
                loadQuiz(currentPage);
            };
        })(index);

        paginationElement.appendChild(pageElement);
    }

    updateButtonStates();
}

function updateButtonStates() {
    document.getElementById('prevButton').disabled = currentPage === 0;
    document.getElementById('nextButton').disabled = currentPage === questions.length - 1;
}
var quizDuration = 15 * 60;
var timerInterval;

function startTimer() {
    var timerElement = document.getElementById('timer');
    var minutes, seconds;

    timerInterval = setInterval(function () {
        minutes = parseInt(quizDuration / 60, 10);
        seconds = parseInt(quizDuration % 60, 10);

        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        timerElement.textContent = minutes + ":" + seconds;

        if (--quizDuration < 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }
    }, 1000);
}


function stopTimer() {
    clearInterval(timerInterval);
}

function submitQuiz() {
    stopTimer();
    calculateAndShowResult();
}

 

function calculateAndShowResult() {
    var score = 0;
    for (var i = 0; i < questions.length; i++) {
        if (questions[i].answer !== null && questions[i].answer === questions[i].correctAnswer) {
            score++;
        }
    }

    var userName = document.getElementById('name').value;
    var examNo = document.getElementById('examNumber').value
    var quizSection = document.getElementById('quizSection');
    quizSection.style.display = 'none';

    var quizResult = document.getElementById('quizResult');
    quizResult.style.display = 'flex';
    quizResult.innerHTML = 'Dear ' + userName + ' , with exam number ' + examNo + ', you scored ' + score + ' out of ' + questions.length;
}



// function calculateAndShowResult() {
//     var score = 0;
//     var resultDetails = '';

//     for (var i = 0; i < questions.length; i++) {
//         var question = questions[i];
//         var selectedAnswer = question.answer !== null ? question.options[question.answer] : 'No answer';
//         var correctAnswer = question.options[question.correctAnswer];
//         var isCorrect = question.answer !== null && question.answer === question.correctAnswer;

//         if (isCorrect) {
//             score++;
//         }

//         resultDetails +=
//             '<div>' +
//             '<p>Your answer: ' + selectedAnswer + '</p>' +
//             '<p style="color: ' + (isCorrect ? 'green' : 'red') + ';">Correct answer: ' + correctAnswer + '</p>' +
//             '</div>';
//     }

//     var userName = document.getElementById('name').value;
//     var examNo = document.getElementById('examNumber').value;
//     var quizSection = document.getElementById('quizSection');
//     quizSection.style.display = 'none';

//     var quizResult = document.getElementById('quizResult');
//     quizResult.style.display = 'flex';
//     quizResult.style.flexDirection = "column"
//     quizResult.innerHTML =
//         '<p>Dear ' + userName + ', with exam number ' + examNo + ', you scored ' + score + ' out of ' + questions.length + '</p>';
//     var resultDetailsContainer = document.createElement('div');
//     resultDetailsContainer.innerHTML = resultDetails;
//     quizResult.appendChild(resultDetailsContainer);
// }

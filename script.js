var question = document.querySelector('.question')
var input = document.querySelector('input')
var confirm = document.querySelector('.confirm')
var aboutNav = document.querySelector('.aboutNav')
var answersNav = document.querySelector('.answersNav')
var settingsNav = document.querySelector('.settingsNav')
var about = document.querySelector('.about')
var answers = document.querySelector('.answers')
var popUp = document.querySelector('.popUp')
var scoreNum = document.querySelector('.scoreNum')
var tutorial = document.querySelector('.tutorial')
var answerBox = document.querySelector('.answerBox')
// modals
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");
var modalShow = document.querySelector(".modalShow");
// modals

numberPlusLetters = { 
    0: 'sz',
    1: 'l',
    2: 'n',
    3: 'm',
            }
numberPlusWords = { 
    0: 'zoo',
    1: 'ale',
    2: 'hen',
    3: 'ham',
    4: 'war',
    5: 'hive',
    6: 'bee',
    7: 'tea',
    8: 'shoe',
    9: 'goo',
    10: 'lice',
    11: 'lily',
    12: 'line',
    13: 'lime',
    14: 'lorry',
    15: 'laugh',
    16: 'lip',
    17: 'light',
    18: 'ledge',
    19: 'leg',
    20: 'nose',
    21: 'nail',
    22: 'nanny',
    23: 'gnome',
    24: 'Nero',
    25: 'knife',
    26: 'nob',
    27: 'knife',
    28: 'notch',
    29: 'nag',
    30: 'moss',
    31: 'mail',
    32: 'money',
    33: 'mum',
    34: 'merry',
    35: 'muff',
    36: 'map',
    37: 'mat'
            }

function newWord() {
    if (+scoreNum.textContent === 5) {
        tutorial.classList.add('show-modal')
    }
    question.textContent = Math.floor((Math.random() * 5) + 0)
}
function restetQuestionArea() {
    setTimeout(function(){
        newWord()
        confirm.textContent = ''
        answerBox.value = ''
        answerBox.disabled = false
    }, 1000)
}
function checkAnswer() {
    
    if (event.key === 'Enter'){
        if (answerBox.value === numberPlusWords[question.textContent]) {
            answerBox.disabled = true
            confirm.textContent = 'correct'
            scoreNum.textContent = +scoreNum.textContent + 1
            restetQuestionArea()
        } else if (answerBox.value !== numberPlusWords[question.textContent]) {
            answerBox.disabled = true
            confirm.textContent = 'incorrect'
            scoreNum.textContent = +scoreNum.textContent - 1
            restetQuestionArea()
        }
    } else {
        return 
    }
}
function aboutPopUp() {
    console.log('hkdjshfk')
}

newWord()
// $.ajax({
//     url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
// }).done(function(res){
// })

// pop up 1




function toggleModal() {

    if (event.target.classList.contains('nav')) {
        event.target.children[0].classList.add("show-modal");
        console.log('if yes')
    } else if (!event.target.classList.contains('closer')) {
        console.log('if no')
        document.querySelector('.show-modal').classList.remove("show-modal");
    }
    // modal.classList.toggle("show-modal");
}


aboutNav.addEventListener("click", toggleModal);
answersNav.addEventListener("click", toggleModal);
settingsNav.addEventListener("click", toggleModal);
tutorial.addEventListener('click', toggleModal)
answerBox.addEventListener('keydown', checkAnswer)

var question = document.querySelector('.question')
var input = document.querySelector('input')
var confirm = document.querySelector('.confirm')
var about = document.querySelector('.about')

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
            }

function newWord() {
    question.textContent = Math.floor((Math.random() * 3) + 0)
}
function checkAnswer() {
    if (input.value === numberPlusWords[question.textContent]) {
        confirm.textContent = 'correct'
        setTimeout(function(){
            newWord()
            confirm.textContent = ''
            input.value = ''
        }, 1000)
    }
}
function aboutPopUp() {
    console.log('hkdjshfk')
}

$.ajax({
    url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
}).done(function(res){
    console.log(res) 
    newWord()
})

var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

about.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

input.addEventListener('input', checkAnswer)
about.addEventListener('click', aboutPopUp)
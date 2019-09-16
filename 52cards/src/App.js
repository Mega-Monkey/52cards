import React from 'react';
import ButtonBarApp from './ButtonBarApp'
import ContainedButtons from './ContainedButtons'
import IntroPage from './IntroPage'
import Play from './Play'
import Tutorial from './Tutorial'
import { Switch, Route, Link } from 'react-router-dom'
import MouseOverPopover from './MouseOverPopover'
import FlipNumbers from 'react-flip-numbers';
import Buiginner from './Buiginner'


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      guess: "",
      correctOrNot: "",
      answer: "",
      number: 0,
      word: "zoo",
      score: 0,
      unlockedNumbers: [0,1,2,3,4],
      newNumberCounter: 0,
      showSnackbar: false,
      snackBarText: "",
      buttonNames: ['Buiginner', 'Intermediate', 'Advanced'],
      numberPlusWords: {
        0: {word: "zoo", counter: 0},
        1: {word: "ale", counter: 0},
        2: {word: "hen", counter: 0},
        3: {word: "ham", counter: 0},
        4: {word: "war", counter: 0},
        5: {word: "hive", counter: 0},
        6: {word: "bee", counter: 0},
        7: {word: "tea", counter: 0},
        8: {word: "shoe", counter: 0},
        9: {word: "goo", counter: 0},
        10: {word: "lice", counter: 0},
        11: {word: "lily", counter: 0},
        12: {word: "line", counter: 0},
        13: {word: "lime", counter: 0},
        14: {word: "lorry", counter: 0},
        15: {word: "laugh", counter: 0},
        16: {word: "lip", counter: 0},
        17: {word: "light", counter: 0},
        18: {word: "ledge", counter: 0},
        19: {word: "leg", counter: 0},
        20: {word: "nose", counter: 0},
        21: {word: "nail", counter: 0},
        22: {word: "nanny", counter: 0},
        23: {word: "gnome", counter: 0},
        24: {word: "Nero", counter: 0},
        25: {word: "knife", counter: 0},
        26: {word: "nob", counter: 0},
        27: {word: "knife", counter: 0},
        28: {word: "notch", counter: 0},
        29: {word: "nag", counter: 0},
        30: {word: "moss", counter: 0},
        31: {word: "mail", counter: 0},
        32: {word: "money", counter: 0},
        33: {word: "mum", counter: 0},
        34: {word: "merry", counter: 0},
        35: {word: "muff", counter: 0},
        36: {word: "map", counter: 0},
        37: {word: "mat", counter: 0}
      },
      numbersPlusLetters: {
        0: {letter: 's, z and the s sound', counter: 0},
        1: {letter: 'l', counter: 0},
        2: {letter: 'n', counter: 0},
        3: {letter: 'm', counter: 0},
        4: {letter: 'r', counter: 0},
        5: {letter: 'f and v', counter: 0},
        6: {letter: 'b', counter: 0},
        7: {letter: 't', counter: 0},
        8: {letter: 'sh and ch', counter: 0},
        9: {letter: 'g', counter: 0},
      } 
    }
  }
  // Advanced page logic
  // 
  // 
  snackBoxTextChooser = (obj) => {
    let arrayWithAllFullCounters = Object.entries(this.state.numberPlusWords)
    .filter(elem => elem[1].counter >= 5)
    let highestUnlockedNumber = arrayWithAllFullCounters.length + this.state.unlockedNumbers.length
    this.setState({ snackBarText: `${highestUnlockedNumber} = ${this.state.numberPlusWords[highestUnlockedNumber].word}` })
  }

  openSnackBar = () => {
    if (this.state.numberPlusWords[this.state.number].counter === 5 ) {
      this.setState({ showSnackbar: true })
    }
  }
  increaseCounterInNumberPlusWords = () => {
    let { numberPlusWords } = this.state
    numberPlusWords[this.state.number].counter += 1
    this.setState({ numberPlusWords })
  }
  setZeroCounterInNumberPlusWords = () => {
    let { numberPlusWords } = this.state
    numberPlusWords[this.state.number].counter = 0
    this.setState({ numberPlusWords })
  }
  
  assignNewNumbersToTheUnlockedNumbersArr = () => {
    let numberPlusWordsArr = Object.entries(this.state.numberPlusWords)
    let numberPlusWordsArrWithFiveNumbers = 
    numberPlusWordsArr
      .filter(elem => elem[1].counter < 5)
      .splice(0,5)
      .map(numPlusWord => numPlusWord[0])
    this.setState({ unlockedNumbers: numberPlusWordsArrWithFiveNumbers })
  }

  chooseNewWord = () => {
    this.assignNewNumbersToTheUnlockedNumbersArr()
    var ranNum = Math.floor((Math.random() * this.state.unlockedNumbers.length) + 0);
    while (this.state.unlockedNumbers[ranNum] === this.state.number) {
      ranNum = Math.floor((Math.random() * this.state.unlockedNumbers.length) + 0); 
    }
    this.setState({ number: this.state.unlockedNumbers[ranNum] })
    return this.state.numberPlusWords[this.state.unlockedNumbers[ranNum]].word
  }
  
  takeGuessIntermediate = e => {
    e.preventDefault()
    this.snackBoxTextChooser()
    var guess = e.target.children[0].children[1].children[0].value
    var target = e.target.children[0].children[1].children[0]
    this.setState({ guess })
    if ( guess === this.state.word ) {
      this.setState({ correctOrNot: 'correct',
      score: Number(this.state.score) + 10,
      })
      this.increaseCounterInNumberPlusWords()
      this.openSnackBar()
    } else if (guess === 'answer') {
      this.setState({ correctOrNot: this.state.word, })
      this.setZeroCounterInNumberPlusWords()
      if (this.state.score > '0') {
        this.setState({
          score: Number(this.state.score) - 10
        }) 
      }
    } else {
      this.setState({ correctOrNot: 'incorrect' }) 
      this.setZeroCounterInNumberPlusWords()
        if (this.state.score > '0') {
          this.setState({
            score: Number(this.state.score) - 5
          }) 
        }
      }
      
    setTimeout(() => {
      var chosenWord = this.chooseNewWord()
      this.setState({ word: chosenWord })
      target.value = ''
      this.setState({ correctOrNot: '' }) 
    }, 1000)
  }

// 
// 
// End Advanced page logic

/// buiginner logic



  handleClose = () => {
    this.setState({ showSnackbar: false }) 
  }

  render() {
    return (
    <div className="App">
      <ButtonBarApp />
      <Switch>
        <Route exact path='/' render={routeProps => <IntroPage {...routeProps} buttonNames={this.state.ButtonNames} /> } />
        
        <Route path='/tutorial' component={Tutorial} />

        <Route path='/buiginner' render={routeProps => <Buiginner {...routeProps} takeGuess={this.takeGuess} correctOrNot={this.state.correctOrNot} number={this.state.number} score={this.state.score} word={this.state.word} numberPlusWords={this.state.numberPlusWords} showSnackbar={this.state.showSnackbar} handleClose={this.handleClose} snackBarText={this.state.snackBarText} numbersPlusLetters={this.state.numbersPlusLetters} /> } />


        <Route path='/play' render={routeProps => <Play {...routeProps} takeGuessIntermediate={this.takeGuessIntermediate} correctOrNot={this.state.correctOrNot} number={this.state.number} score={this.state.score} word={this.state.word} numberPlusWords={this.state.numberPlusWords} showSnackbar={this.state.showSnackbar} handleClose={this.handleClose} snackBarText={this.state.snackBarText} /> } />
      </Switch>
    </div>
    )
  };
}

export default App;

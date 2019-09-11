import React from 'react';
import ButtonBarApp from './ButtonBarApp'
import ContainedButtons from './ContainedButtons'
import IntroPage from './IntroPage'
import Play from './Play'
import Tutorial from './Tutorial'
import { Switch, Route, Link } from 'react-router-dom'
import MouseOverPopover from './MouseOverPopover'
import FlipNumbers from 'react-flip-numbers';



// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  constructor(){
    super();
    console.log("search box imported");
    this.state = {
      guess: "",
      correctOrNot: "",
      answer: "",
      number: 0,
      word: "zoo",
      score: 0,
      unlockedNumbers: 3,
      newNumberCounter: 0,
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
      }
    }
  }
 
  
  // state = {
  //   guess: "",
  //   correctOrNot: ""
  // }
  
  chooseNewNumber = () => {
    var size = Object.keys(this.state.numberPlusWords).length;
    var ranNum = Math.floor((Math.random() * this.state.unlockedNumbers) + 0);
    
    while (ranNum === this.state.number) {
      ranNum = Math.floor((Math.random() * this.state.unlockedNumbers) + 0); 
    } 
      this.setState({ number: ranNum })
      this.state.numberPlusWords[ranNum].counter = this.state.numberPlusWords[ranNum].counter + 1
      return this.state.numberPlusWords[ranNum].word
    
  }
  
  hint = () => {

  }

  addNewNumber = () => {
    if (Number(this.state.score) % 100 === 0 && Number(this.state.score) >= this.state.newNumberCounter) {
      this.setState({ unlockedNumbers: Number(this.state.unlockedNumbers) + 1 })
    }
  }

  takeGuess = e => {
    this.addNewNumber()
    e.preventDefault()
    
    var guess = e.target.children[0].children[1].children[0].value
    var target = e.target.children[0].children[1].children[0]
    this.setState({ guess })
    if ( guess === this.state.word ) {
      this.setState({ correctOrNot: 'correct' }) 
      this.setState({ score: Number(this.state.score) + 10 }) 
    } else {
      this.setState({ correctOrNot: 'incorrect' }) 
        if (this.state.score <= '0') {
        } else {
          this.setState({ score: Number(this.state.score) - 5 }) 
        }
  }
    setTimeout(() => {
      var chosenWord = this.chooseNewNumber()
      this.setState({ word: chosenWord })
      target.value = ''
      this.setState({ correctOrNot: '' }) 
    }, 1000)
  }

  render() {
    return (
    <div className="App">
      <ButtonBarApp />
        <Switch>
          <Route exact path='/' component={IntroPage} />
          <Route path='/tutorial' component={Tutorial} />
          <Route path='/play' render={routeProps => <Play {...routeProps} takeGuess={this.takeGuess} correctOrNot={this.state.correctOrNot} number={this.state.number} score={this.state.score} word={this.state.word} /> } />
        </Switch> 
    </div>
    )
  };
}

export default App;

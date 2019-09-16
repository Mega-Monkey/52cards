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

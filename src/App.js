import React, { Component } from "react"
import Wrapper from './components/Wrapper'
import Score from './components/Score/index'
import Card from './components/Card/index'
import symbols from './symbols.json'

class App extends Component {
  state = {
    symbols
    // ,
    // alreadyClicked = [],
    // score = 0,
    // highScore = 0
  }

  // SHUFFLING IMAGES
  // try to make this a higher order function instead...
  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const swapIndex = Math.floor(Math.random() * (i + 1))
      const currentIndex = array[i]
      const indexToSwap = array[swapIndex]
      array[i] = indexToSwap
      array[swapIndex] = currentIndex
    }
    return array
  } 

  // CHECK IF IMG WAS ALREADY CLICKED
  alreadyClicked() {

  }

  clickImage = id => {
    console.log("testing... card clicked: " + id)
    // if (this.alreadyClicked does contain clicked id) {
    //   alert somehow
    //   do high score logic
    //   reset score
    // } else {
    //   add clicked id to alreadyClicked array
    //   increment score
    //   setState
    // }
    this.setState(this.shuffle(symbols))
  }

  render() {
    return (
      <Wrapper>
        <Score />
        {this.state.symbols.map(symbol => (
          <Card
            clickImage={this.clickImage}
            id={symbol.id}
            key={symbol.id}
            name={symbol.name}
            image={symbol.image}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App;
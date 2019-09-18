import React, { Component } from "react"
import Wrapper from './components/Wrapper'
import Card from './components/Card/index'
import symbols from './symbols.json'

class App extends Component {
  state = {
    symbols,
    alreadyClicked: [],
    score: 0,
    allScores: [],
    highScore: 0
  }

  // SHUFFLE IMAGES
  // make this a higher order function instead...
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

  clickImage = id => {
    console.log("testing... card clicked: " + id)
    if (this.state.alreadyClicked.indexOf(id) !== -1) {
      console.log("Already Clicked!")
      this.state.allScores.push(this.state.score)
      console.log(this.state.allScores)
      this.setState({
        highScore: Math.max(...this.state.allScores),
        score: 0,
        alreadyClicked: []
      })
    } else {
      this.state.alreadyClicked.push(id)
      this.setState({
        symbols: this.shuffle(symbols),
        score: this.state.alreadyClicked.length
      },
        console.log(this.state)
      )  
    }
  }

  render() {
    return (
      <Wrapper>
        <div className="navbar sticky-top" style={{display: "block", textAlign: "center"}}>
            <h4>Click an image to earn a point. Remember not to click it more than once!</h4>
            <h2>Score: {this.state.score} | High Score: {this.state.highScore}</h2>
        </div>

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
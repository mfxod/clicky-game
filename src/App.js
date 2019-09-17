import React, { Component } from "react"
import Wrapper from './components/Wrapper'
// import Score from './components/Score'
import Card from './components/Card'
import symbols from './symbols.json'

class App extends Component {
  state = {
    symbols
  }

  // functions

  render() {
    return (
      <Wrapper>
        {this.state.symbols.map(symbol => (
          <Card
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

// starter code
// function App() {
//   return (
//     <Card />
//   )
// }

export default App;

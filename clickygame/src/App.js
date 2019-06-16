import React, { Component } from 'react';
import './App.css';
import Cards from "./components/Cards";

class App extends Component {

  state = {
    cards: [
        {
            name: "yellow",
            value: 1
        },
        {
            name: "blue",
            value: 2
        },
        {
            name: "orange",
            value: 3
        }
    ]
}

  render() {
    
    return (
    <div>
    <Cards cards={this.state.cards}/>
    </div>
    );

  }
}

export default App;

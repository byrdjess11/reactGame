import React, { Component } from 'react';
import './App.css';
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";

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
        },
        {
            name: "red",
            value: 4
        }
        
    ]
}

  render() {
    
    return (
    <div>
    <Navbar />
    <Cards cards={this.state.cards}/>
    </div>
    );

  }
}

export default App;

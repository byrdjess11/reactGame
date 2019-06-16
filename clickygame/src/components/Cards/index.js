import React, { Component } from "react";
import "./style.css";

class Cards extends Component {

    render () {
        
        return this.props.cards.map((card) => (
            <h2>{ card.name }</h2>
        ));

    }  
} 

export default Cards;
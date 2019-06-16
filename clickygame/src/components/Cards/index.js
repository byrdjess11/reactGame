import React, { Component } from "react";
import "./style.css";
import CardItem from "../CardItem";

class Cards extends Component {

    render () {
        
        return this.props.cards.map((card) => (
            <CardItem card={card}/>
        ));

    }  
} 

export default Cards;
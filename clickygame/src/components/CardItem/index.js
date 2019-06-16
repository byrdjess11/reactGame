import React, { Component } from "react";
import "./style.css";

export class CardItem extends Component {

    render () {
        
        return (
            <div className="box container">
                <p>{this.props.card.name}</p>
                <p>{this.props.card.value}</p>
            </div>

        )

    }  
} 

export default CardItem;
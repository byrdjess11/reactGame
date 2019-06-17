import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {

    render () {
        
        return (
            <div>

            <nav>
            <div class="nav-wrapper">
              <a href="#!" class="brand-logo">Clicky Game</a>
              <ul class="right hide-on-med-and-down">
                <li><a href="sass.html"><i class="material-icons left">restart</i></a></li>
                <li><a href="badges.html"><i class="material-icons right">shuffle</i></a></li>
              </ul>
            </div>
          </nav>

          </div>

        );

    }  
} 

export default Navbar;
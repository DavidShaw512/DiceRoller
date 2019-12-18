import React from 'react';

import d20 from "../img/d20.png"
import d12 from "../img/d12.png"
import d10 from "../img/d10.png"
import d8 from "../img/d8.png"
import d6 from "../img/d6.png"
import d4 from "../img/d4.png"
import './die.css';

const Die = (props) => {

    const results = props.results.join(' / ');

    const dieCount = props.results.length;

    const total = props.results.reduce((a, b) => a + b, 0);

    let image;
    if (props.sides === 20) {
        image = d20;
    } else if (props.sides === 12) {
        image = d12;
    } else if (props.sides === 10) {
        image = d10;
    } else if (props.sides === 8) {
        image = d8;
    } else if (props.sides === 6) {
        image = d6;
    } else if (props.sides === 4) {
        image = d4;
    }

    return (
        <div className="die">
            <button className="dieButton" onClick={props.click}>
                <img className="dieImg" src={image} alt="die icon"/>
                <p className="dieCounts">Dice: {dieCount}<br/>
                Total: {total}
                </p>
            </button>
            <div className="result">
                <p>Results:</p>
                <p>{results}</p>
                <button className="resetButton" onClick={props.reset}>Reset</button>
            </div>
        </div>
    )
}


export default Die;
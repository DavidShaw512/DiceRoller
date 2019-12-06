import React from 'react';
import './dice.css';

const Dice = (props) => {

    let result = 0;

    const roll = () => {
        result = Math.ceil(Math.random() * props.sides);
        console.log(result);
        return result;
    }

    return (
        <section className="die">
            <button className="dieButton" onClick={roll}>
                Roll a d{props.sides}
            </button>
            <div className="result">
                You got: {result}
            </div>
        </section>
    )
}

export default Dice;
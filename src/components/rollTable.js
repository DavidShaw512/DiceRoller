import React from 'react';
// import { connect } from 'react-redux';

import Die from './die';
import './rollTable.css';

class RollTable extends React.Component {
    state = {
        d20results: [],
        d12results: [],
        d10results: [],
        d8results: [],
        d6results: [],
        d4results: []
    }

    // roll = sides => {
    //     const result = Math.ceil(Math.random() * sides);
    //     this.setState
    // }

    roll20 = () => {
        const result = Math.ceil(Math.random() * 20);
        this.setState ({
            d20results: [...this.state.d20results, result]
        })
    }

    roll12 = () => {
        const result = Math.ceil(Math.random() * 12);
        this.setState ({
            d12results: [...this.state.d12results, result]
        })
    }

    roll10 = () => {
        const result = Math.ceil(Math.random() * 10);
        this.setState ({
            d10results: [...this.state.d10results, result]
        })
    }

    roll8 = () => {
        const result = Math.ceil(Math.random() * 8);
        this.setState ({
            d8results: [...this.state.d8results, result]
        })
    }

    roll6 = () => {
        const result = Math.ceil(Math.random() * 6);
        this.setState ({
            d6results: [...this.state.d6results, result]
        })
    }

    roll4 = () => {
        const result = Math.ceil(Math.random() * 4);
        this.setState ({
            d4results: [...this.state.d4results, result]
        })
    }

    reset = (sides) => {
        if (sides === 20) {
            console.log("reset20")
        }
    }

    render() {
        return (
            <section className="rollTable">
                <Die sides={20} click={() => this.roll20()} results={this.state.d20results} reset={() => this.reset()}/>
                <Die sides={12} click={() => this.roll12()} results={this.state.d12results} reset={() => this.reset()}/>
                <Die sides={10} click={() => this.roll10()} results={this.state.d10results} reset={() => this.reset()}/>
                <Die sides={8} click={() => this.roll8()} results={this.state.d8results} reset={() => this.reset()}/>
                <Die sides={6} click={() => this.roll6()} results={this.state.d6results} reset={() => this.reset()}/>
                <Die sides={4} click={() => this.roll4()} results={this.state.d4results} reset={() => this.reset()}/>
            </section>
        )
    }
}

export default RollTable;

// const mapStateToProps = state => {

// }

// const mapDispatchToProps = dispatch => {

// }

// export default connect(mapStateToProps, mapDispatchToProps)(RollTable);
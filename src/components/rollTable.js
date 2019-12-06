import React from 'react';
// import { connect } from 'react-redux';

import Dice from './dice';
import './rollTable.css';

class RollTable extends React.Component {
    
    render() {
        return (
            <section className="rollTable">
                <Dice sides={20}/>
                <Dice sides={12}/>
                <Dice sides={10}/>
                <Dice sides={8}/>
                <Dice sides={6}/>
                <Dice sides={4}/>
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
// react jsx
import React from 'react';

class TestB extends React.Component {
    constructor(props) {
        super(props);
        this.testBAction = this.testBAction.bind(this);
    }

    testBAction() {
        console.log('testBAction');
    }

    render() {
        return (
            <div>
                <h1>TestB</h1>
                <button onClick={this.testBAction}>TestBAction</button>
            </div>
        );
    }
}

export default TestB;
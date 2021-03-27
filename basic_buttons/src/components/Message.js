import React, { Component } from 'react';

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Button not clicked'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Button clicked'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Button</button>
            </div>

        )
        
    }
}

export default Message;
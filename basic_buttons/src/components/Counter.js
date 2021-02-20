import React, { Component } from 'react'
//rce

export class Counter extends Component {

    //rconst
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    
    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {console.log('Callback value', this.state.count)})
        // // callback function callback statement ^^ to execute right after state has been changed

        // // synchronous callback 
        // console.log(this.state.count)

        // to update state based off previous state, pass in prevState into function not current state
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=> this.incrementFive()}>Increment</button>
            </div>
            
        )
    }
}

export default Counter

// Same as Greet.js except class component =: maintains private internal state
// Functional vs class component:
// -Functional: no "this", solution w/o using state, stateless/dumb/presentational comp, hooks
// -Class: own private data - state, UI logic, lifecycle hooks, stateful/smart/container
import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        return <div>
        <h1>
            Hello {this.props.objName} User from {this.props.targetName}
        </h1>
        {this.props.children}
    </div>
        
        // return <h1>Welcome {this.props.objName} User from {this.props.targetName}</h1>
    }
}

export default Welcome;
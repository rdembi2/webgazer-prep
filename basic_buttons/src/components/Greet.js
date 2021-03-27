import React from 'react'

// Without es6:
// function Greet() {
//     return <h1>Hello Webgazer User</h1>
// }

// Named export: (import with { }, name cannot be changed)
/* props vs state:
    Props - passed to the component, function parameters, immutable
        props - functional comp
        this.props - class comp
    State - managed in comp, variables declared in function body, mutable
        useState Hook - functional comp
        this.state - class comp
    */
export const Greet = (props ) => {
    console.log(props)
    return ( // return only 1 html element
        <div>
            <h1>
                Hello {props.objName} User from {props.targetName}
            </h1>
            {props.children}
        </div>
     
    ) 
}
// export default Greet
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// class App extends Component {
//     render() {
//         const first = "Kazu";
//         const last = "Yasu"
//         const dom = (
//             <React.Fragment>
//                 <h1 className="foo">Hi, { first + last }!!</h1>
//                 <label htmlFor="bar">bar</label>
//                 <input type="text" onClick={() => {console.log("I'm clicked.")}}/>
//                 <label htmlFor="baz">baz</label>
//                 <input type="text" onChange={() => {console.log("I'm changed.")}}/>
//             </React.Fragment>
//         );
//         return dom;
//     }
// }

// function App() {
//   const first = "Kazu";
//   const last = "Yasu"
//   const dom = (
//       <React.Fragment>
//         <h1 className="foo">Hi, { first + last }!!</h1>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onClick={() => {console.log("I'm clicked.")}}/>
//         <label htmlFor="baz">baz</label>
//         <input type="text" onChange={() => {console.log("I'm changed.")}}/>
//       </React.Fragment>
//   );
//   return dom
// }

// function App() {
//   return React.createElement(
//       'div',
//       null,
//       "Hello, World!!!!!"
//   )
// }

// const App = () => {
//     const profiles = [
//         { id: 1, name: "Taro", age: 11 },
//         { id: 2, name: "John", age: 23 },
//         { id: 3, name: "Jose", age: 44 },
//         { id: 4, name: "Xi" },
//     ]
//     return (
//         <div>
//             {
//                 profiles.map((profile, index) => {
//                     return <User id={profile.id} name={profile.name} age={profile.age} key={index}/>
//                 })
//             }
//         </div>
//     )
// }
//
// const User = (props) => {
//     return <div>Hi, I'm {props.name} and {props.age} years old! (id: {props.id})</div>
// }
//
// User.defaultProps = {
//     age: 1
// }
//
// User.propTypes = {
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string,
//     age: PropTypes.number
// }

const App = () => (<Counter />)

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    handleButton = (type) => {
        const num = type === 'up' ? + 1 : - 1
        this.setState({ count: this.state.count + num })
    }

    render() {
        return (
            <React.Fragment>
                <div>count: { this.state.count }</div>
                <button onClick={(_) => this.handleButton('up')}>+1</button>
                <button onClick={(_) => this.handleButton('down')}>-1</button>
            </React.Fragment>
        )
    }
}

export default App;

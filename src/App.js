import React, { Component } from 'react';

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

const App = () => {
    const profiles = [
        { name: "Taro", age: 11 },
        { name: "John", age: 23 },
        { name: "Jose", age: 44 },
        { name: "Xi" },
    ]
    return (
        <div>
            {
                profiles.map((profile, index) => {
                    return <User name={profile.name} age={profile.age} key={index}/>
                })
            }
        </div>
    )
}

const User = (props) => {
    return <div>Hi, I'm {props.name} and {props.age} years old!</div>
}

User.defaultProps = {
    age: 1
}

export default App;

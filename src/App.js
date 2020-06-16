import React from 'react';

function App() {
  const first = "Kazu";
  const last = "Yasu"
  const dom = (
      <React.Fragment>
        <h1 className="foo">Hi, { first + last }!!</h1>
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={() => {console.log("I'm clicked.")}}/>
        <label htmlFor="baz">baz</label>
        <input type="text" onChange={() => {console.log("I'm changed.")}}/>
      </React.Fragment>
  );
  return dom
}

// function App() {
//   return React.createElement(
//       'div',
//       null,
//       "Hello, World!!!!!"
//   )
// }

export default App;

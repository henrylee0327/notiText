import React from 'react';
import './App.css';
import YourPromises from './components/YourPromises'
// import AddButton from './components/AddButton'
// import PromiseContent from './components/promise-components/PromiseContent';
// import PromiseWhen from './components/promise-components/PromiseWhen';
// import PromiseWhere from './components/promise-components/PromiseWhere';
// import PhoneNumber from './components/promise-components/PhoneNumber';


// function NextPage () {
//   return (
//     <div>
//       Next Page content here 
//     </div>
//   )
// }


function App() {
  return (
  <>
     <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          Promises
        </h1>
        <h2 className="subtitle">
          We will send you a text message so that you don't forget your promises &#128526;
        </h2>
      </div>
    </div>
  </section>
    <YourPromises />
  </>
  )}

export default App;

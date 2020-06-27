import React from 'react';
import './App.css';
import YourPromises from './components/YourPromises'
import AddButton from './components/AddButton'

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
  <section className="main-body">
    <div className="inputs">
    <br></br><br></br>
      <YourPromises />
    </div>
    <br></br><br></br>
    <div className="add-button">
    <AddButton />
    </div>
  </section>
  </>
  )}

export default App;

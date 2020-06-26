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
          Don't forget
        </h2>
      </div>
    </div>
  </section>
  <section className="main-body">
    <div className="inputs">
    <br></br><br></br>
      <YourPromises />
    </div>
      <AddButton />
  </section>
  </>
  )}

export default App;

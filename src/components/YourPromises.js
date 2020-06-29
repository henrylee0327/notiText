import React, { useState } from 'react';
import PromiseContent from './promise-components/PromiseContent';
import PromiseWhen from './promise-components/PromiseWhen';
import PromiseWhere from './promise-components/PromiseWhere';
import PhoneNumber from './promise-components/PhoneNumber';
import AddButton from './AddButton'


function YourPromises (props) {
  const [promise, setPromise] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [place, setPlace] = useState('')
  const [phone, setPhone] = useState('')
  const [submit, setSubmit] = useState(false)
  const [isValid, setIsValid] = useState(false)

  function phoneValidate () {
    if (phone === "") {
      alert("Enter your phone number")
      return false
    } else if ((phone).length < 10){
      alert("Enter 10 digits of phone number")
      return false
    } else if (typeof phone === "string") {
      alert("Phone number has to be numbers" )
      return false
    } else {
      return true
    }
  }

  function handleSubmit (e) {
    e.preventDefault()
    if (phoneValidate() === true) {
      return setSubmit(true)
    } else {
      return setIsValid(false)
    }
    console.log("Button clicked")
  }
  
  return (
    <>
  <form onSubmit={handleSubmit}>
  <section className="main-body">
    <div className="inputs">
    <br></br><br></br>
    <div className="tile is-ancestor">
      <div className="tile is-parent">
        <article className="tile is-child box">
          <PromiseContent promise={promise} setPromise={setPromise}/>
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child box">
          <PromiseWhen date={date} setDate={setDate} time={time} setTime={setTime}/>
        </article>
      </div>
    <div className="tile is-parent">
      <article className="tile is-child box">
          <PromiseWhere place={place} setPlace={setPlace}/>
      </article>
    </div>
    <div className="tile is-parent">
        <article className="tile is-child box">
          <PhoneNumber phone={phone} setPhone={setPhone}/>
        </article>
      </div>
  </div>
    </div>
    <br></br><br></br>
    <div className="add-button">
    <AddButton />
    </div>
  </section>
  </form>
</>
  )
}

export default YourPromises;

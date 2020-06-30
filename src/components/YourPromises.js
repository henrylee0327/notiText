import React, { useState } from 'react';
import PromiseContent from './promise-components/PromiseContent';
import PromiseWhen from './promise-components/PromiseWhen';
import PromiseWhere from './promise-components/PromiseWhere';
import PhoneNumber from './promise-components/PhoneNumber';
import AddButton from './AddButton'


function NextPage (props) {
  return (
    <div>Hello this is the new page</div>
  )
}

function PromiseForm (props) {
  
  function phoneValidate () {
    if (props.phone === "") {
      alert("Enter your phone number")
      return false
    } else if ((props.phone).length < 10 || (props.phone).length > 10){
      alert("Enter 10 digits of phone number")
      return false
    } else if (isNaN(props.phone)) {
      console.log(props.phone)
      alert("Phone number has to be numbers" )
    } else {
      return true
    }
  }

  function handleSubmit (e) {
    e.preventDefault()
    if (phoneValidate() === true) {
    console.log("Button clicked")
      return props.setIsValid(true)
    } else {
      return props.setIsValid(false)
    }
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
            <PromiseContent promise={props.promise} setPromise={props.etPromise}/>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
            <PromiseWhen date={props.date} setDate={props.setDate} time={props.time} setTime={props.setTime}/>
          </article>
        </div>
      <div className="tile is-parent">
        <article className="tile is-child box">
            <PromiseWhere place={props.place} setPlace={props.setPlace}/>
        </article>
      </div>
      <div className="tile is-parent">
          <article className="tile is-child box">
            <PhoneNumber phone={props.phone} setPhone={props.setPhone}/>
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

function YourPromises (props) {
  const [promise, setPromise] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [place, setPlace] = useState('')
  const [phone, setPhone] = useState('')
  // const [submit, setSubmit] = useState(false)
  const [isValid, setIsValid] = useState(false)

  let thePromiseForm
  const theForm =<PromiseForm promise={promise} setPromise={setPromise} date={date} setDate={setDate} time={time} setTime={setTime} place={place} setPlace={setPlace} phone={phone} setPhone={setPhone} isValid={isValid} setIsValid={setIsValid}/>
  if (isValid === true) {
    thePromiseForm = <NextPage />
  } else {
    thePromiseForm = theForm
  }

  return (
    <>
    {thePromiseForm}
    </>
  )
}

export default YourPromises;

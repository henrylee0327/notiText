import React, { useState } from 'react';
import PromiseContent from './promise-components/PromiseContent';
import PromiseWhen from './promise-components/PromiseWhen';
import PromiseWhere from './promise-components/PromiseWhere';
import PhoneNumber from './promise-components/PhoneNumber';
import AddButton from './AddButton'
import NextPage from './NextPage'

function PromiseForm (props) {
  
  // function phoneValidate () {
  //   if (props.phone === "") {
  //     alert("Enter your phone number")
  //     return false
  //   } else if ((props.phone).length < 10 || (props.phone).length > 10){
  //     alert("Enter 10 digits of phone number")
  //     return false
  //   } else if (isNaN(props.phone)) {
  //     console.log(props.phone)
  //     alert("Phone number has to be numbers")
  //   } else {
  //     return true
  //   }
  // }
   

  function handleSubmit (e) {
    e.preventDefault()
    // if (phoneValidate() === true) {
    // console.log("Button clicked")
    //   return props.setIsValid(true)
    // } else {
    //   return props.setIsValid(false)
    // }
    // props.setIsValid(true)
    fetch(`http://localhost:5000/promises/:uuid`, {
      method: 'POST',
      body: JSON.stringify({promise, })
    })
  }
  return (
    <>
    <form onSubmit={handleSubmit} method="POST">
    <section className="main-body">
      <div className="inputs">
      <br></br><br></br>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child box">
            <PromiseContent promise={props.promise} setPromise={props.setPromise}/>
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
  const [count, setCount] = useState(1)


  // let arrayofNumbers = []
  // for (let i = 1; i < count; i++) {
  //   arrayofNumbers.push(count)
  // }

  let thePromiseForm
  const theForm =<PromiseForm promise={promise} setPromise={setPromise} date={date} setDate={setDate} time={time} setTime={setTime} place={place} setPlace={setPlace} phone={phone} setPhone={setPhone} isValid={isValid} setIsValid={setIsValid}/>
  if (isValid === true) {
    thePromiseForm = <NextPage count={count} promise={promise} date={date} time={time} place={place} phone={phone} isValid={isValid} />
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

import React, { useState, useContext } from 'react';
import PromiseContent from './promise-components/PromiseContent';
import PromiseWhen from './promise-components/PromiseWhen';
import PromiseWhere from './promise-components/PromiseWhere';
import PhoneNumber from './promise-components/PhoneNumber';
// import AddButton from './AddButton'
import NextPage from './NextPage'
import promiseApp from '../apis/promiseApp'
import { PromiseContext } from '../context/PromiseContext';
import { useHistory } from "react-router-dom";


function YourPromises (props) {
  const [promise, setPromise] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [place, setPlace] = useState('')
  const [phone, setPhone] = useState('')
  // const [submit, setSubmit] = useState(false)
  const [isValid, setIsValid] = useState(false)
  const [count, setCount] = useState(1)
  const {addPromise} = useContext(PromiseContext)
  
  let history = useHistory();

 const handleSubmit = async (e) => {
   e.preventDefault()
   try {
    const response = await promiseApp.post('/promises', {
      id: "", 
      uuid: "",
      content: promise,
      date: date,
      time: time,
      place: place,
      phone_number: phone
    })
    addPromise(response.data.promise)
    history.push('/promises')
    console.log(response.data.promise[0])

   } catch (err) {
      console.log(err)
   }
  
 }

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
  <br></br>
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
      <button className="button is-link is-rounded is-centered is-large" >Submit</button>
      </div>
  </section>
  </form>
    </>
  )
}

export default YourPromises;

// function PromiseForm (props) {

//   const handleSubmit = async e => {
//     e.preventDefault()
    
//     var promise = props.promise
//     var date = props.date
//     var time = props.time
//     var place = props.place
//     var phone = props.phone

//     try {
//       const body = { promise, date, time, place, phone }
//       const response = await fetch("http://localhost:5000/promises", {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(body)
//       })
//       console.log(response)
//     } catch (err) {
//       console.log(err)
//     }
//   }
//   return (
//     <>
  
//   </> 
//   )
// }


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

  // if (phoneValidate() === true) {
    // console.log("Button clicked")
    //   return props.setIsValid(true)
    // } else {
    //   return props.setIsValid(false)
    // }
    // props.setIsValid(true)
   
     // let arrayofNumbers = []
  // for (let i = 1; i < count; i++) {
  //   arrayofNumbers.push(count)
  // }

  // let thePromiseForm
  // const theForm =<PromiseForm promise={promise} setPromise={setPromise} date={date} setDate={setDate} time={time} setTime={setTime} place={place} setPlace={setPlace} phone={phone} setPhone={setPhone} isValid={isValid} setIsValid={setIsValid}/>
  // if (isValid === true) {
  //   thePromiseForm = <NextPage count={count} promise={promise} date={date} time={time} place={place} phone={phone} isValid={isValid} />
  // } else {
  //   thePromiseForm = theForm
  // }
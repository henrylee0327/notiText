import React, { useState, useContext } from 'react';
import PromiseContent from './promise-components/PromiseContent';
import PromiseWhen from './promise-components/PromiseWhen';
import PromiseWhere from './promise-components/PromiseWhere';
import PhoneNumber from './promise-components/PhoneNumber';
import promiseApp from '../apis/promiseApp'
import { PromiseContext } from '../context/PromiseContext';
import { useHistory } from "react-router-dom";


function YourPromises (props) {
  const [promise, setPromise] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [place, setPlace] = useState('')
  const [phone, setPhone] = useState('')
  
  
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
   } catch (err) {
      alert("An error has occured")
      console.log(err)
      console.log('zzzzzzzz')
   }
 }

 const updateNumbersInParent = (number) => {
   console.log(number)
   console.log('hhhhhhhhhh')
  let value = number.map((element) => {
    return element.newNumber
  })
  console.log(value)
  for (let i = 0; i < value.length; i++) {
    console.log(value[i])
    setPhone(value[i])
  }
  }

  return (
    <>
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          <b>NotiText</b>
        </h1>
        <h2 className="subtitle">
          Send a notification message to your friends and family so that they don't forget when and where you guys are meeting &#128526;
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
            <PhoneNumber phone={phone} setPhone={setPhone} onChange={value => setPhone(value)} updateNumbersInParent={updateNumbersInParent}/>
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
import React, { useState, useEffect } from 'react';
import promiseApp from '../apis/promiseApp'
import { PromiseContext } from '../context/PromiseContext';
import { useParams } from 'react-router-dom';


function EditPage (props) {

  const {uuid} = useParams()
  // const {context} = useContext(PromiseContext)
  const [promise, setPromise] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [place, setPlace] = useState('')
  const [phone, setPhone] = useState('')
  


  useEffect(() => {
    const fetchData = async () => {
      const response = await promiseApp.get(`/promises/${uuid}`)
      const thePromise = response.data.promise[0]
      const shortDateString = thePromise.date.substring(0,10)

      console.log(thePromise.date)
      console.log('zzzzzzzzzzzz')
      setPromise(thePromise.content)
      setDate(shortDateString)
      setTime(thePromise.time)
      setPlace(thePromise.place)
      setPhone(thePromise.phone_number)
    }
    fetchData()
  }, [])


  return (
    <form>
  <section className="main-body">
      <div className="inputs">
      <br></br><br></br>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child box">
          <p className="title">What was your promise?</p>
          <div className="field">
            <div className="control">
                <textarea className="textarea is-primary" value={promise} onChange={(e) => setPromise(e.target.value)} placeholder="Enter your promises here"></textarea>
            </div>
        </div>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child box">
          <p className="title">Select date & time for your notification</p>
          <div className="field">
            <div className="control">
                <input className="input is-info" value={date} onChange={(e) => setDate(e.target.value)} type="date" placeholder="Info input"></input>
            </div>
                <br></br>
            <div className="control">
                <input className="input is-info" value={time} onChange={(e) => setTime(e.target.value)} type="time" placeholder="Info input"></input>
            </div>
         </div>
          </article>
        </div>
      <div className="tile is-parent">
        <article className="tile is-child box">
        <p className="title">Where is it occuring?</p>
        <div className="field">
            <div className="control">
                <textarea className="textarea is-warning" value={place} onChange={(e) => setPlace(e.target.value)} placeholder="Enter place here"></textarea>
            </div>
        </div>
        </article>
      </div>
      <div className="tile is-parent">
          <article className="tile is-child box">
          <p className="title">Enter your Phone number to receive a notification</p>
          <div className="field">
            <div className="control">
                <input className="input is-danger" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Enter your phone number here"></input>
                <br></br>
                <p>(Format: 000-000-0000)</p>
            </div>
          </div>
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
  )
}

export default EditPage;


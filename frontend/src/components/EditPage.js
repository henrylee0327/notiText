import React, { useState, useEffect } from 'react';
import promiseApp from '../apis/promiseApp'
import { PromiseContext } from '../context/PromiseContext';
import { useParams, useHistory } from 'react-router-dom';



function EditPage (props) {

  const {uuid} = useParams()
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

      setPromise(thePromise.content)
      setDate(shortDateString)
      setTime(thePromise.time)
      setPlace(thePromise.place)
      setPhone(thePromise.phone_number)
    }
    fetchData()
  }, [])

  let history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updatedPromise = await promiseApp.put(`/promises/${uuid}`, {
      // id: "", 
      // uuid: "",
      content: promise,
      date: date,
      time: time,
      place: place,
      phone_number: phone
    })
    history.push('/promises')
  }

  return (
  <form>
    <section className="main-body">
        <div className="inputs">
        <br></br><br></br>
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child box">
            <p className="title">What message do you want to send?</p>
            <div className="field">
              <div className="control">
                  <textarea className="textarea is-primary" value={promise} onChange={(e) => setPromise(e.target.value)} placeholder="Enter your promises here"></textarea>
              </div>
          </div>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
            <p className="title">Select date & time of occasion</p>
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
            <p className="title">Enter a Phone number to send a text message</p>
            <div className="field">
              <div className="control">
                  <input className="input is-danger" pattern='^\+[1-9]\d{1,14}$' value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Enter your phone number here"></input>
                  <br></br>
                  <p>(Format: +10000000000)</p>
              </div>
            </div>
            </article>
          </div>
      </div>
        </div>
        <br></br><br></br>
        <div className="add-button">
          <div>
            <button type="submit" onClick={handleSubmit} className="button is-link is-rounded is-centered is-large" >Submit</button>
          </div>
          <div>
            <button className="button is-success is-rounded is-centered is-large" ><a href="/promises" style={{color:'#ffffff'}}>Go Back</a></button>
          </div>
        </div>
    </section>
  </form>        
  )
}

export default EditPage;


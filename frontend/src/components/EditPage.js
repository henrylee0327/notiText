import React, { useState, useEffect, useContext } from 'react';
import promiseApp from '../apis/promiseApp'
import { PromiseContext } from '../context/PromiseContext';
import { useParams } from 'react-router-dom';
import PromiseContent from './promise-components/PromiseContent';
import PromiseWhen from './promise-components/PromiseWhen';
import PromiseWhere from './promise-components/PromiseWhere';
import PhoneNumber from './promise-components/PhoneNumber';


function EditPage (props) {
  // const [card, setCard] = useState('')
  const {uuid} = useParams()
  const {editPromise} = useContext(PromiseContext)
  const [promise, setPromise] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [place, setPlace] = useState('')
  const [phone, setPhone] = useState('')
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await promiseApp.get()
  //   }
  // })

  return (
    <form>
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
  )
}

export default EditPage;

{/* <div className="card">
<header className="card-header">
  <p className="card-header-title">
    No. 
  </p>
</header>
<div className="card-content">
    <div className="content">
      
    </div>
    <div className="content">
         at 
    </div>
    <div className="content">
        
    </div>
    <div className="content">
        
    </div>
</div>
<footer className="card-footer">
  <a className="card-footer-item">Save</a>
</footer>
</div> */}

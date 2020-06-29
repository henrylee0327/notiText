import React, { useState } from 'react';
import PromiseContent from './promise-components/PromiseContent';
import PromiseWhen from './promise-components/PromiseWhen';
import PromiseWhere from './promise-components/PromiseWhere';
import PhoneNumber from './promise-components/PhoneNumber';



function YourPromises (props) {
  const [promise, setPromise] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [place, setPlace] = useState('')
  const [phone, setPhone] = useState('')

  return (
    <>
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
          <PromiseWhere place={place} setPlace={setPlace} />
      </article>
    </div>
    <div className="tile is-parent">
        <article className="tile is-child box">
          <PhoneNumber phone={phone} setPhone={setPhone} />
        </article>
      </div>
  </div>
</>
  )
}

export default YourPromises;

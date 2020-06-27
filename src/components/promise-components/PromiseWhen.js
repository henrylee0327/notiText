import React from 'react'

function PromiseWhen () {
    return (

          <>
          <p className="title">Select date & time for your notification</p>
          <div className="field">
            <div className="control">
                <input className="input is-info" type="date" placeholder="Info input"></input>
            </div>
                <br></br>
            <div className="control">
                <input className="input is-info" type="time" placeholder="Info input"></input>
            </div>
         </div>
          </>
    )
}



export default PromiseWhen;

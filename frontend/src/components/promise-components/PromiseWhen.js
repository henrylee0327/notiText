import React from 'react'


function PromiseWhen (props) {
    
    function handleDate (e) {
        const theValue = e.currentTarget.value
        const shortDateString = theValue.substring(0,10)
        
        console.log(theValue)
        console.log('zzzzzzzzzzzz')
        
        props.setDate(shortDateString)
        
    }

    function handleTime (e) {
        props.setTime(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }

    return (
          <>
          <p className="title">Select date & time of occasion</p>
          <div className="field">
            <div className="control">
                <input className="input is-info" value={props.date} onChange={handleDate} type="date" placeholder="Info input"></input>
            </div>
                <br></br>
            <div className="control">
                <input className="input is-info" value={props.time} onChange={handleTime} type="time" placeholder="Info input"></input>
            </div>
         </div>
          </>
    )
}



export default PromiseWhen;

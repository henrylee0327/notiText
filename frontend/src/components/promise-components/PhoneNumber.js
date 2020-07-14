import React from 'react'

function PhoneNumber (props) {

    function handlePhone (e) {
        props.setPhone(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }

    return (
          <>
          <p className="title">Enter a Phone number to send a text message</p>
          <div className="field">
            <div className="control">
                <input className="input is-danger" pattern='^\+[1-9]\d{1,14}$' value={props.phone} onChange={handlePhone} type="tel" placeholder="Enter your phone number here"></input>
                <br></br>
                <p>(Format: +10000000000)</p>
            </div>
          </div>
          </>
    )
}


export default PhoneNumber;


// "[0-9]{3}-[0-9]{3}-[0-9]{4}"
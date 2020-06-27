import React from 'react'

function PhoneNumber () {
    return (
          <>
          <p className="title">Enter your Phone number to receive a notification</p>
          <div className="field">
            <div className="control">
                <input className="input is-danger" type="tel" placeholder="Enter your phone number here"></input>
            </div>
          </div>
          </>
    )
}


export default PhoneNumber;
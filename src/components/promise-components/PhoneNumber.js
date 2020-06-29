import React, { useState } from 'react'

function PhoneNumber (props) {

    function handlePhone (e) {
        console.log(e.currentTarget.value)
        props.setPhone(e.currentTarget.value)
    }

    return (
          <>
          <p className="title">Enter your Phone number to receive a notification</p>
          <div className="field">
            <div className="control">
                <input className="input is-danger" value={props.phone} onChange={handlePhone} type="tel" placeholder="Enter your phone number here"></input>
            </div>
          </div>
          </>
    )
}


export default PhoneNumber;
import React from 'react'

function PhoneNumber (props) {

    function handlePhone (e) {
        props.setPhone(e.currentTarget.value)
        // console.log(e.currentTarget.value)
    }

    return (
          <>
          <p className="title">Enter your Phone number to receive a notification</p>
          <div className="field">
            <div className="control">
                <input className="input is-danger" value={props.phone} onChange={handlePhone} type="tel" placeholder="Enter your phone number here"></input>
                <br></br>
                <p>(Format: 0000000000)</p>
            </div>
          </div>
          </>
    )
}


export default PhoneNumber;

// pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
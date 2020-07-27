import React from 'react'

function PhoneNumber (props) {

    function handlePhone (e) {
        console.log(e.currentTarget.value)
        props.setPhone(e.currentTarget.value)
    }

    function handleEmail (e) {
        console.log(e.currentTarget.value)
        props.setEmail(e.currentTarget.value)
    }

    return (
          <>
          <p className="title">Enter a Phone number & email to send a notification</p>
          <div className="field">
            <div className="control">
                <p>Phone number</p>
                <input className="input is-danger" pattern='^\+[1-9]\d{1,14}$' value={props.phone} onChange={handlePhone} type="tel" placeholder="Enter phone number here"></input>
                <br></br>
                <p>(Format: +10000000000)</p>
            </div>
            <div className="control">
                <p>email</p>
                <input className="input is-danger" type='email' value={props.email} onChange={handleEmail} placeholder="Enter email here"></input>
                <br></br>
            </div>
          </div>
          </>
    )
}


export default PhoneNumber;


// "[0-9]{3}-[0-9]{3}-[0-9]{4}"
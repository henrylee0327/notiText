import React from 'react'

function PhoneNumber (props) {
    // const [phoneInput, setPhoneInput] = useState("")

    // function phoneValid (phoneInput) {
    //     let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

    //     if (phoneInput.value.match(phoneno)) {
    //         return true
    //     } else {
    //         alert("Not a valid phone number")
    //         return false
    //     }
    // }

    function handlePhone (e) {
        props.setPhone(e.currentTarget.value)
        console.log(e.currentTarget.value)
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
import React, {useState} from 'react'

function PhoneNumber (props) {
    const [count, setCount] = useState(1)

    function handlePhone (e) {
        props.setPhone(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }

    const addNumberButton = (e) => {
        e.preventDefault()
        return (setCount(count + 1))
      }
     
    const deleteNumberButton = (e) => {
        e.preventDefault()
        if (count > 1) return (setCount(count - 1))
        else if (count < 1) return (setCount(1))
      }

    const PhoneInput = () => {
        return(
            <>
            <br></br>
            <input className="input is-danger" pattern='^\+[1-9]\d{1,14}$' value={props.phone} onChange={handlePhone} type="tel" placeholder="Enter your phone number here"></input>
            <br></br>
            </>
            )
    }

    let arrayOfInput = []
    for (let i = 0; i < count; i++)
    arrayOfInput.push(<PhoneInput />)

    return (
          <>
          <p className="title">Enter a Phone number to send a text message</p>
          <button className="button is-primary" onClick={addNumberButton}>Add</button> <button className="button is-primary" onClick={deleteNumberButton}>Delete</button>
          <div className="field">
            <div className="control">
                <br></br>
                <p><b>No. of phone numbers: {count}</b></p>
                {arrayOfInput}
                {/* <br></br> */}
                <p>(Format: +10000000000)</p>
            </div>
          </div>
          </>
    )
}


export default PhoneNumber;


// "[0-9]{3}-[0-9]{3}-[0-9]{4}"
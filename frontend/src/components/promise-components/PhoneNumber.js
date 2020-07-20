import React, {useState} from 'react'


function PhoneNumber (props) {
    // const [count, setCount] = useState(1)
    const [phoneNumber, setPhoneNumber] = useState([])

    const handlePhone = (e) => {
        props.setPhone(e.currentTarget.value)
        console.log(e.currentTarget.value)
    }

    const addNumberButton = (e) => {
        e.preventDefault()
        addPhoneNumber(props.phone)
        props.setPhone('')
      }

    const addPhoneNumber = (newNumber) => {
        const addNewPhoneNumber = [...phoneNumber, {newNumber}]
        setPhoneNumber(addNewPhoneNumber)
    }

    const handleDelete = (number) => {
        // number.preventDefault()
        // console.log(number)
        const filteredPhoneNumbers = phoneNumber.filter(currentPhoneNumbers => (currentPhoneNumbers !== number))
        setPhoneNumber(filteredPhoneNumbers)
    }

    return (
          <>
          <p className="title">Type a phone number and click add</p>
          <div className="field">
            <div className="control">
                <button className="button is-primary" onClick={addNumberButton}>Add</button>
                <p><b>No. of phone numbers:</b></p>
                <input className="input is-danger" pattern='^\+[1-9]\d{1,14}$' value={props.phone} onChange={handlePhone} type="tel" placeholder="Enter your phone number here"></input>
                <p>(Format: +10000000000)</p>
            </div>
                <ul>
                    {phoneNumber.map((number, index) => {
                        return (
                            <>
                            <li key={index}>{number.newNumber}</li>
                            <button onClick={() => handleDelete(number)}>Delete</button>
                            </>
                        )
                    })}
                </ul>
          </div>
          </>
    )
}


export default PhoneNumber;
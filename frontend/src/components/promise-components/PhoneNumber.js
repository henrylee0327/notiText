import React, {useState} from 'react'


function PhoneNumber (props) {
    // const [count, setCount] = useState(1)
    const [phoneNumber, setPhoneNumber] = useState([])

    const addNumberButton = (e) => {
        e.preventDefault()
        addPhoneNumber(props.phone)
        props.setPhone('')
      }

    const addPhoneNumber = (newNumber) => {
        const addNewPhoneNumber = [...phoneNumber, {newNumber}]
        setPhoneNumber(addNewPhoneNumber)
        props.updateNumbersInParent(addNewPhoneNumber)
    }

    const deletePhoneNumber = (number) => {
        const filteredPhoneNumbers = phoneNumber.filter(currentPhoneNumbers => (currentPhoneNumbers !== number))
        setPhoneNumber(filteredPhoneNumbers)
        props.updateNumbersInParent(filteredPhoneNumbers)
    }

    return (
          <>
          <p className="title">Type a phone number and click add</p>
          <div className="field">
            <div className="control">
                <button className="button is-primary" onClick={addNumberButton}>Add</button>
                <p><b>No. of phone numbers:</b></p>
                <input className="input is-danger" pattern='^\+[1-9]\d{1,14}$' value={props.phone} onChange={e => props.onChange(e.target.value)} type="tel" placeholder="Enter your phone number here"></input>
                <p>(Format: +10000000000)</p>
            </div>
                <ul>
                    {phoneNumber.map((number, index) => {
                        return (
                            <>
                            <li key={index}>{number.newNumber}</li>
                            <button onClick={() => deletePhoneNumber(number)}>Delete</button>
                            </>
                        )
                    })}
                </ul>
          </div>
          </>
    )
}


export default PhoneNumber;
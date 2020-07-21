import React, {useState} from 'react'


function PhoneNumber (props) {
    // const [count, setCount] = useState(1)
    const [phoneNumber, setPhoneNumber] = useState([])
    const [inputPhone, setInputPhone] = useState('')

    const handleOnChange = (e) => {
        console.log(e.target.value)
        setInputPhone(e.target.value)
    }

    const addNumberButton = (e) => {
        e.preventDefault()
        addPhoneNumberFn(inputPhone)
        console.log(inputPhone)
        setInputPhone('')
      }

    const addPhoneNumberFn = (newNumber) => {
        const addNewPhoneNumber = [...phoneNumber, {newNumber}]
        setPhoneNumber(addNewPhoneNumber)
        props.setPhone(addNewPhoneNumber)
    }

    const deletePhoneNumber = (number) => {
        const filteredPhoneNumbers = phoneNumber.filter(currentPhoneNumbers => (currentPhoneNumbers !== number))
        setPhoneNumber(filteredPhoneNumbers)
        props.setPhone(filteredPhoneNumbers)
    }

    return (
          <>
          <p className="title">Type a phone number and click add</p>
          <div className="field">
            <div className="control">
                <button className="button is-primary" onClick={addNumberButton}>Add</button>
                <p><b>No. of phone numbers:</b></p>
                <input className="input is-danger" pattern='^\+[1-9]\d{1,14}$' value={inputPhone} onChange={handleOnChange} type="tel" placeholder="Enter your phone number here"></input>
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
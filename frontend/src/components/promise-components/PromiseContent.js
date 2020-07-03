import React from 'react'

function PromiseContent (props) {
    // console.log(props)

    function handleChange (e) {
        // e.preventDefault()
        console.log(e.currentTarget.value)
        props.setPromise(e.currentTarget.value)
    }
    return (
          <>
        <p className="title">What was your promise?</p>
        <div className="field">
            <div className="control">
                <textarea className="textarea is-primary" onChange={handleChange} value={props.promise} placeholder="Enter your promises here"></textarea>
            </div>
        </div>
          </>
    )
}



export default PromiseContent;

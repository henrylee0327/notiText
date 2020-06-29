import React from 'react'

function PromiseWhere (props) {

    function handlePlace (e) {
        props.setPlace()
    }

    return (
        <>
        <p className="title">Where is it occuring?</p>
        <div className="field">
            <div className="control">
                <textarea className="textarea is-warning" value={props.place} onChange={handlePlace} placeholder="Enter place here"></textarea>
            </div>
        </div>
        </>
    )
}

export default PromiseWhere;

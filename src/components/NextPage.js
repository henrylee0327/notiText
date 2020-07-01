import React from 'react';


function NextPage (props) {
  return (
    <div>
    <p>Your promises: {props.promise}</p>
    <p>On: {props.date}</p>
    <p>At: {props.time}</p>
    <p>Where: {props.place}</p>
    <p>Phone-number you have entered: {props.phone}</p>
    </div>
  )
}


export default NextPage;

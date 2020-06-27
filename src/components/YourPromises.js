import React from 'react';
import PromiseContent from './promise-components/PromiseContent'
import PromiseWhen from './promise-components/PromiseWhen'
import PromiseWhere from './promise-components/PromiseWhere'
import PhoneNumber from './promise-components/PhoneNumber'


function YourPromises () {
  return (
    <>
    <div className="tile is-ancestor">
      <div className="tile is-parent">
        <article className="tile is-child box">
          <PromiseContent />
          
        </article>
      </div>
      <div className="tile is-parent">
        <article className="tile is-child box">
          <PromiseWhen />
         
        </article>
      </div>
    <div className="tile is-parent">
      <article className="tile is-child box">
          <PromiseWhere />
        
        
      </article>
    </div>
    <div className="tile is-parent">
        <article className="tile is-child box">
          <PhoneNumber />
          
        </article>
      </div>
  </div>
</>
  )
}

export default YourPromises;

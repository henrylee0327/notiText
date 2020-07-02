import React from 'react';
import './NextPage.css'

function NextPage (props) {

  // console.log(props.arrayofNumbers)
  
  return (
    <section>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              No. {props.count}
            </p>
          </header>
          <div className="card-content">
            <div className="content">
              {props.promise}
            </div>
            <div className="content">
              {props.date} at {props.time}
            </div>
            <div className="content">
              {props.place}
            </div>
            <div className="content">
              {props.phone}
            </div>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">Edit</a>
            <a href="#" className="card-footer-item">Delete</a>
          </footer>
        </div>
    </section>
  )
}


export default NextPage;

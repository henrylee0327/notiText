import React, { useEffect, useContext } from 'react';
import './NextPage.css'
import promiseApp from '../apis/promiseApp'
import { PromiseContext } from '../context/PromiseContext';

function NextPage (props) {
    const {context, setContext} = useContext(PromiseContext)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await promiseApp.get("/promises")
          console.log(response)
          setContext(response.data.promise)
        } catch (err) {
          console.log(err)
        }
      }
      fetchData()
    },[])
  return (
    <>
    <section className="hero is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title"> 
          Promises
        </h1>
        <h2 className="subtitle">
          We will send you a text message so that you don't forget your promises &#128526;
        </h2>
      </div>
    </div>
  </section>
  <br></br>
    <section>
      {context.map((el) => {
        return (
          <>
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              No. {props.count}
            </p>
          </header>
          <div className="card-content">
            <div className="content">
              {el.content}
            </div>
            <div className="content">
              {el.date} at {el.time}
            </div>
            <div className="content">
              {el.place}
            </div>
            <div className="content">
              {el.phone_number}
            </div>
          </div>
          <footer className="card-footer">
            <a href="#" className="card-footer-item">Edit</a>
            <a href="#" className="card-footer-item">Delete</a>
          </footer>
        </div>
        <br></br>
        </>
        )
      })}
        
    </section>
    </>
  )
}


export default NextPage;

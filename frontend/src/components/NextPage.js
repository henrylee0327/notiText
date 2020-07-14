import React, { useEffect, useContext } from 'react';
import './NextPage.css'
import promiseApp from '../apis/promiseApp'
import { PromiseContext } from '../context/PromiseContext';
import { useHistory } from "react-router-dom";

function NextPage (props) {
    const {context, setContext} = useContext(PromiseContext)
    

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await promiseApp.get("/promises")
          setContext(response.data.promise)
        } catch (err) {
        }
      }
      fetchData()
    },[])

    const handleDelete = async (uuid) => {
      try {
        const response = await promiseApp.delete(`/promises/${uuid}`)
        setContext(context.filter((el) => {
          return el.uuid !== uuid
        }))
      } catch (err) {
      }
    }

    let history = useHistory()

    const handleEdit = async (uuid) => {
      try {
        const response = await promiseApp.put(`/promises/${uuid}`)
        history.push(`/promises/${uuid}`)
      } catch (err) {
        alert(err)
      }
    }

  return (
    <>
  <section className="hero is-primary">
    <div className="hero-body">
      <div className="buttons">
        <button className="button is-link"><a href="/" style={{color:'#ffffff'}}>Home</a></button>
      </div>
      <div className="container">
        <h1 className="title"> 
        <b>NotiText</b>
        </h1>
        <h2 className="subtitle">
        Send a notification message to your friends and family so that they don't forget when and where you guys are meeting &#128526;
        </h2>
      </div>
    </div>
  </section>
    <section>
      {context && 
        context.map((el, index) => {
          function TheCard () {
            const theDate = el.date
            return (
              <>
              <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">
                      Your text notification
                    </p>
                  </header>
                  <div className="card-content">
                      <div className="content">
                        {el.content}
                      </div>
                      <div className="content">
                          {theDate ? theDate.substring(0,10) : ""} at {el.time}
                      </div>
                      <div className="content">
                          {el.place}
                      </div>
                      <div className="content">
                          {el.phone_number}
                      </div>
                  </div>
                  <footer className="card-footer">
                    <a className="card-footer-item" onClick={() => handleEdit(el.uuid)}>Edit</a>
                    <a href="#" className="card-footer-item" onClick={() => handleDelete(el.uuid)}>Delete</a>
                  </footer>
              </div>
              <br></br>
              </>
            )
          }
        return (
         <TheCard key={index} count={props.count} />
        )
      })}
        
    </section>
    </>
  )
}


export default NextPage;

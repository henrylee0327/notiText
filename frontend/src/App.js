import React from 'react';
import './App.css';
import YourPromises from './components/YourPromises'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import NextPage from './components/NextPage';
import { PromiseContextProvider } from './context/PromiseContext';
import EditPage from './components/EditPage';

function App() {
  return (
  <>
    <PromiseContextProvider>
      <Router>
          <Switch> 
          <Route exact path="/" component={YourPromises}/>
          <Route exact path="/promises" component={NextPage}/>
          <Route exact path="/promises/:uuid" component={EditPage}/>
          </Switch>
      </Router>
    </PromiseContextProvider>
    
  </>
  )}

export default App;

// import logo from './logo.svg';
import './App.css';
import React from 'react'; 
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";

//importing components
import Navbar from './components/navbar.js';
import ExerciseList from './components/exerciseList';
import EditExercise from './components/editexercise';
import CreateExercise from './components/createexercise';
import CreateUser from './components/createuser';

function App() {
  return (
    <div className="App">
      <Router>

        <Navbar/>
        <Switch>
          <Route exact path="/">
            <ExerciseList/>
          </Route>
    
          <Route path="/edit/:id">
            <EditExercise/>
          </Route>
          
          <Route path="/create">
            <CreateExercise/>
          </Route>
          
          <Route path="/user">
            <CreateUser/>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

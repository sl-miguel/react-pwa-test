import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import InstallPWA from './installpwa.js';
import './App.css';



const NavBar = () => (
  <div className="navbar">
    <h3>Test Manager</h3>
    <Link to="/">Page 1</Link>
    <Link to="/completed">Page 2</Link>
  </div>
);

const Template = (props) => (
  <div>
    <NavBar />
    <InstallPWA />
    <p className="page-info">
      {props.title}:
    </p>
    <ul className={props.status}>
        <li>lien 1</li>
        <li>lien 2</li>
        <li>lien 3</li>
    </ul>
  </div>
);





const CurrentTasks = () => (
  <Template title="Current Tasks" status="Current"/>
);

const CompletedTasks = () => (
  <Template title="Completed Tasks" status="Completed"/>
);

class App extends Component {

  render() {
    return (
      <BrowserRouter basename="/apps/react-pwa">
        <div>
          <Route exact path="/" component={CurrentTasks}/>
          <Route path="/completed" component={CompletedTasks}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
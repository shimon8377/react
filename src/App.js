import React from 'react';

import './App.css';
import Second from './components/Second';
import First from './components/First';
import {HashRouter as Router, Switch,Route, Link} from 'react-router-dom'
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <h1>Hello from Heder</h1>
     <Router>
       <Link  to ='/'>HomePage</Link>
        <Link to='/first'>first</Link>
        <Link to='/secound'>secound</Link>
       
       <Menu/>
       <Switch>
         <Route exact path = '/first' component={()=>{return <First  name= 'bla bla'/>}} />
         <Route exact path ='/secound' component={()=>{return <Second/>}} />
          <Route exact path='/' component={() => { return <HomePage /> }} />
         
       </Switch>

     </Router>
    </div>
  );
}

export default App;

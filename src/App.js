
import './App.css';

import { Home } from './Home/Home';
import {List}  from './Hotels/List';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



function App() {
  return (
    <Router>
    
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/list" component={List}/>
       
      </Switch>
   
  </Router>
  

  );
}

export default App;

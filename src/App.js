import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router ,Switch , Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import SignUp from './components/Pages/Sign-up';

function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component = {Home} />
          <Route path='/Services' component ={Services}/>
          <Route path='/products' component = {Products}/>
          <Route path='/sign-up' component = {SignUp}/>
        </Switch>
      </Router>
      </>
  );
}

export default App;

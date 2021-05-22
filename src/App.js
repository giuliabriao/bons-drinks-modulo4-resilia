import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import reset from '../src/reset.css'


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' children={<Home />} />
        </Switch>
        <Footer footerUrl = "https://github.com/giuliabriao"/>
      </BrowserRouter>
    </div>
  );
}

export default App;

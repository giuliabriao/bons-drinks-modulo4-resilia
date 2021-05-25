import React from 'react'
import reset from '../src/reset.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import OurTeam from './components/OurTeam/OurTeam';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' children={<Home />} />
          <Route exact path='/about-us' children={<AboutUs />} />
          <Route exact path='/our-team' children={<OurTeam />} />
        </Switch>
        <Footer footerUrl = "https://github.com/giuliabriao"/>
      </BrowserRouter>
    </div>
  );
}

export default App;

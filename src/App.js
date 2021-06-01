import React from 'react'
import '../src/reset.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import OurTeam from './components/OurTeam/OurTeam';
import Drinks from './components/Drinks/Drinks';


function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' children={<Home />} />
          <Route path='/about-us' children={<AboutUs />} />
          <Route path='/our-team' children={<OurTeam />} />
          <Route path='/drinks' children={<Drinks />} />
        </Switch>
        <Footer footerUrl="https://github.com/giuliabriao" />
      </Router>
    </div>
  );
}

export default App;

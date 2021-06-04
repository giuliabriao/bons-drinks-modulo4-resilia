import React, { useState, useEffect } from 'react'
import '../src/reset.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import OurTeam from './components/OurTeam/OurTeam';
import Drinks from './components/Drinks/Drinks';
import ContactUs from './components/ContactUs/ContactUs'
import Loading from './components/Loading/Loading'


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])

  return (
    loading ?

      <Loading /> :

      <div className="container">
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' children={<Home />} />
            <Route path='/about-us' children={<AboutUs />} />
            <Route path='/our-team' children={<OurTeam />} />
            <Route path='/drinks' children={<Drinks />} />
            <Route path='/contact' children={<ContactUs />} />
          </Switch>
          <Footer footerUrl="https://github.com/giuliabriao" />
        </Router>
      </div>
  );
}

export default App;

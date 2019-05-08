import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavigationComponent from './components/NavigationComponent';
import FooterComponent from './components/FooterComponent';
import HomeComponent from './components/HomeComponent';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Projects from './pages/Projects';
import EventsPage from './pages/EventsPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationComponent/>
          <Switch>
            <Route path="/" exact component={HomeComponent}/>
            <Route path="/about" component = {AboutPage}/>
            <Route path="/contact" component = {ContactPage}/>
            <Route path="/projects" component = {Projects}/>
            <Route path="/events" component = {EventsPage}/>
          </Switch>
          <FooterComponent/>
        </div>
      </Router>
    );
  }
}

export default App;
     

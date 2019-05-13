import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavigationComponent from './components/NavigationComponent';
import FooterComponent from './components/FooterComponent';
import HomeComponent from './components/HomeComponent';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EventsPage from './pages/EventsPage';
import DetailsView from './pages/DetailsView';
import Error from './pages/Error'

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
            <Route path="/events" component = {EventsPage}/>
            <Route path="/event-details/:eventID" component={DetailsView}/>
            <Route component={Error}/>
          </Switch>
          <FooterComponent/>
        </div>
      </Router>
    );
  }
}

export default App;
     

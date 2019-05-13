import React, { Component } from 'react'
import axios from 'axios'
import Events from './Events'

export class EventsPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      mylist: [],
    }
  }

    componentDidMount(){
      axios.get('http://localhost:8000/wastara/foundation/api/events/lists/events/')
      .then(res =>{this.setState({mylist:res.data})})
    }


  render() {
    return (
      <div>
        <div className="event_page">
          <div className="container">
          <h1>Our events</h1>
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <Events eventlist = {this.state.mylist}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EventsPage

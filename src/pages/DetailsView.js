import React, { Component } from 'react'
import axios from 'axios'

export class DetailsView extends Component {

    state = {
        singleEvent: {}
    }

    componentDidMount(){
        const eventID = this.props.match.params.eventID;
        axios.get(`http://localhost:8000/wastara/foundation/api/events/lists/events/${eventID}`).then(res => {this.setState({singleEvent:res.data})})
    }


  render() {
    return (
      <div>
        <div className="details_events_single">
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="event_content_full">
                        <img src={ this.state.singleEvent.image } className="img-fluid" alt="wastara-foundation"/>
                        <div className = "row">
                            <div className="col-md-12">
                                <h1>Title: <span>{this.state.singleEvent.title}</span></h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Location: <span><i className="fa fa-map-marker"></i> {this.state.singleEvent.location}</span></h2>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Event Date: <span>{this.state.singleEvent.event_date}</span></h2>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-md-6">
                                <h2>Start Time: <span>{this.state.singleEvent.event_time_start}</span></h2>
                            </div>
                            <div className="col-md-6">
                                <h2>Finish Time: <span>{this.state.singleEvent.event_time_finish}</span></h2>
                            </div>
                        </div>
                        <hr/>
                        <p>{this.state.singleEvent.body}</p>
                        
                    </div>
                </div>
                <div className="col-md-3">
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DetailsView

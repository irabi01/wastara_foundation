import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class EventLists extends Component {
  render() {
    return (
      <div>
        <div className="event_contents">
            <div className="row">
                <div className="col-md-4">
                    <img src={ this.props.listevent.image } className="img-fluid" alt="wastara-imgae"/>
                </div>
                <div className="col-md-8">
                    <div className="events_body">
                        <h1>{ this.props.listevent.title }</h1>
                        <p>{ this.props.listevent.body }</p>
                    </div>
                    <div className="date_button">
                        <h2>{ this.props.listevent.event_date }</h2>
                        <Link to={`/event-details/${this.props.listevent.id}`} className="read_event_button">Read more</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default EventLists

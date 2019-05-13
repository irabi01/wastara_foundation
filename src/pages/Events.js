import React, { Component } from 'react'
import EventLists from './EventLists';

export class Events extends Component {
    render() {
        return this.props.eventlist.map((listevent) => (   
                <EventLists key = {listevent.id} listevent = {listevent}/>
        ));
      }
}

export default Events

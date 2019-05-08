import React, { Component } from 'react'
import AboutComponent from './AboutComponent';
import TopParallax from './TopParallax';
import ProjectsComponent from './ProjectsComponent';
import Twosided from './Twosided';
import ServicesComponent from './ServicesComponent';
import CenterParallax from './CenterParallax';

export class HomeComponent extends Component {
  render() {
    return (
      <div>
        <div className="home_container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>wastara foundation</h1>
                        <h2>COURAGE INSPIRES PROGRESS</h2>
                    </div>
                </div>
            </div>
        </div>
        <AboutComponent/>
        <TopParallax/>
        <ProjectsComponent/>
        <Twosided/>
        <ServicesComponent/>
        <CenterParallax/>
      </div>
    )
  }
}

export default HomeComponent

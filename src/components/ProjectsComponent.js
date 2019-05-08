import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ProjectsComponent extends Component {
  render() {
    return (
      <div>
        <div className="project_container">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="project_image">
                            <img src={require("../images/img2.jpg")} class="img-fluid" alt="wastara-imgae"/>
                        </div>
                        <div className="project_title">
                            <h1>project title</h1>
                        </div>
                        <div className="project_link">
                            <Link to="/projects" className="read_more_project">read more</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project_image">
                            <img src={require("../images/img3.JPG")} class="img-fluid" alt="wastara-imgae"/>
                        </div>
                        <div className="project_title">
                            <h1>project title</h1>
                        </div>
                        <div className="project_link">
                            <Link to="/projects" className="read_more_project">read more</Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="project_image">
                            <img src={require("../images/img4.jpg")} class="img-fluid" alt="wastara-imgae"/>
                        </div>
                        <div className="project_title">
                            <h1>project title</h1>
                        </div>
                        <div className="project_link">
                            <Link className="read_more_project">read more</Link>
                        </div>
                    </div>
                </div>
                <div className="row more_p">
                    <div className="col-md-4 offset-md-4">
                        <Link to="/projects" className="more_projects">More Projects</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default ProjectsComponent

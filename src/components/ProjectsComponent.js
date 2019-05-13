import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export class ProjectsComponent extends Component {
  render() {
    return (
      <div>
        {/* <div className="project_container">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="project_image">
                            <img src={require("../images/img2.jpg")} className="img-fluid" alt="wastara-imgae"/>
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
                            <img src={require("../images/img3.JPG")} className="img-fluid" alt="wastara-imgae"/>
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
                            <img src={require("../images/img4.jpg")} className="img-fluid" alt="wastara-imgae"/>
                        </div>
                        <div className="project_title">
                            <h1>project title</h1>
                        </div>
                        <div className="project_link">
                            <Link to="/projects" className="read_more_project">read more</Link>
                        </div>
                    </div>
                </div>
                <div className="row more_p">
                    <div className="col-md-4 offset-md-4">
                        <Link to="/projects" className="more_projects">More Projects</Link>
                    </div>
                </div>
            </div>
        </div> */}
        <div className="project_wastara">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="jumbotron">
                            <h1>anzia hapa wastara project</h1>
                            <p>Is our core project focusing on a range of society challenges especially women and children in our communities. Special attention is dedicated to target groups including but not limited to women and children, Disabled,  Phycologically affected persons, AIDS' victims and other vulnerable or minority groups.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default ProjectsComponent

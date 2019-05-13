import React, { Component } from 'react'

export class ServicesComponent extends Component {
  render() {
    return (
      <div>
        <div className="services_compo">
            <div className="container">
                <h1>our services</h1>
                <div className="row">
                    <div className="col-md-4">
                        <div className="box_services">
                            <i className="fa fa-send"></i>
                            <h1>councelling & guidance</h1>
                            <p> Expert guidance and counseling to help individuals overcome social challenges faced.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box_services">
                            <i className="fa fa-database"></i>
                            <h1>financial capital support</h1>
                            <p> Most needy individuals from target categories get money as capital needed for their businesses and or other requirements.</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box_services">
                            <i className="fa fa-list"></i>
                            <h1>Entrepreneurship skills</h1>
                            <p> Education, special knowledge and skills given from both artists and other professional expert personals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default ServicesComponent

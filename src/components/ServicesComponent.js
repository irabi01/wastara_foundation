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
                            <p> Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box_services">
                            <i className="fa fa-database"></i>
                            <h1>financial capital support</h1>
                            <p> Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box_services">
                            <i className="fa fa-list"></i>
                            <h1>special knowledge & skills</h1>
                            <p> Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa</p>
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

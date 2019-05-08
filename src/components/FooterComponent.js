import React, { Component } from 'react'

export class FooterComponent extends Component {
    render() {
        return (
          <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <p><i className="fa fa-copyright"></i> {(new Date().getFullYear())}. All rights reserved. Wastara Foundation</p>
                    </div>
                </div>
            </div>
          </div>
        )
      }
}

export default FooterComponent

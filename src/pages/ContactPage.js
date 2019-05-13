import React, { Component } from 'react'

export class ContactPage extends Component {
  render() {
    return (
      <div>
        <div className="contact_page">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Our Contact</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile_location_email">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="location">
                  <h1>Sinza</h1>
                </div>
              </div>
              <div className="col-md-4">
                <div className="phone">
                  <h1>+255 768 666113</h1>
                </div>
              </div>
              <div className="col-md-4">
                <div className="email">
                  <h1>wastarasajuki@gmail.com</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactPage

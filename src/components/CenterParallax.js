import React, { Component } from 'react'

export class CenterParallax extends Component {
  render() {
    return (
      <div className="volunteer">
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="volunteer_text">
                        <h1>are you interested in our work?</h1>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="volunteer_email">
                        <h1>Send us an email</h1>

                        <div className="input-group volunteer_email_address">
                            <input placeholder="Enter e-mail address"/>
                            <button>send</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default CenterParallax

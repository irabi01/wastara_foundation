import React, { Component } from 'react'

export class Twosided extends Component {
  render() {
    return (
      <div className="twosided">
        <div className="row no-gutters">
            <div className="col-md-8">
                <div className="left_side_twosided">
                    <div className="box">
                        <h1>community street time </h1>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="right_side_twosided">
                    <h1>upcoming events</h1>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Twosided

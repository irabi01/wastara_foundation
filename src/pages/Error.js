import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Error extends Component {
  render() {
    return (
      <div>
        <div className="error_container">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="error_content">
                            <h1>404</h1>
                            <h2>The page you're looking for is not found</h2>
                            <Link to="/" className="backhome">Back home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Error

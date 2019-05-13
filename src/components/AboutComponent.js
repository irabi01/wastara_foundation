import React, { Component } from 'react'

export class AboutComponent extends Component {
  render() {
    return (
      <div>
        <div className="about_component">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="mission_statement">
                             <h1>To serve vulnerable groups in communities that are in most need.</h1>
                        </div>
                    </div>
                </div>
                <br/><br/>
                <div className="row">
                    <div className="col-md-6">
                        <div className="about_left">
                            <h1>Welcome to wastara foundation</h1>
                            <p>
                            WASTARA FOUNDATION Is a Non Government, Non Profit Organisation with registration no..... Registered under the laws of the United Republic Of Tanzania its Head Quaters located at SINZA 'B' PALESTINA WARD-SINZA, DIVISION-MAGOMENI, UBUNGO DAR ES SALAAM.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about_image">
                            <img src={require("../images/img2.jpg")} className="img-fluid" alt="wastara-imgae"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default AboutComponent

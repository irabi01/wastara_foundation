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
                            Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato
                            </p>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <i className="fa fa-list"></i>
                                        <h2>Total Projects</h2>
                                    </div>
                                    <div className="col-md-6">
                                        <i className="fa fa-group"></i>
                                        <h2>Total Volunteers</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about_image">
                            <img src={require("../images/img2.jpg")} class="img-fluid" alt="wastara-imgae"/>
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

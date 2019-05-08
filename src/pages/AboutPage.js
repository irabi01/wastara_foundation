import React, { Component } from 'react'

export class AboutPage extends Component {
  render() {
    return (
      <div>
        <div className="about_page">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="about_title">
                  <h1>About wastara foundation</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_section_one">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo, quando un anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo campione. È sopravvissuto non solo a più di cinque secoli, ma anche al passaggio alla videoimpaginazione, pervenendoci sostanzialmente inalterato</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about_section_two">
          <div className="row no-gutters">
            <div className="col-md-6">
              <div className="vision_part">
                <h1>Our vision</h1>
                <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="mission_part">
                <h1>Our mission</h1>
                <p>Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutPage

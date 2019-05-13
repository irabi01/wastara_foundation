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
                <div className="jumbotron">
                  <p><strong><span>W</span>ASTARA FOUNDATION</strong> Is a Non Government, Non Profit Organisation with registration no..... Registered under the laws of the United Republic Of Tanzania its Head Quaters located at SINZA 'B' PALESTINA. WARD-SINZA, MAGOMENI-DIVISION, UBUNGO-DISTRICT DAR ES SALAAM REGION.</p>
                  <p>The idea began from the time i was a young girl about 12 years old so desperate and struggling with my family hardships, i dropped from school and started working in different jobs to meet basic needs. This prompted anger and disatisfaction with my parents who decided to get me a suitor to marry me. As a teenager i was confused and not aware of any ways to overcome my situation untill i met a good samaritan who explained to me in detail what i was going through, how i could escape my sorrows via institutes and organisations determined and dedicated to challenges similar to mine. This eye opening light provocked my anger and travelled heading for Dar es salaam to visit TANZANIA WOMEN MEDIA ASSOSICATION (TAMWA) who realy gave me crucial advice and support that enabled me to get out of the forced marriage and began my independent life ever since. Am pleased and honored to have this opportunity to reach out and help others inneed. 

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_section_two">
          <div className="row no-gutters">
            <div className="col-md-4">
              <div className="core_value_part">
                <h1>Core Value</h1>
                <p>WF is committed to the values of the accountability to the society and respect of human rights.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="vision_part">
                <h1>Our vision</h1>
                <p>WF is determined that Tanzania and other Countries has a future of well informed citizens especially target group who shall positively influence sustainable social, cultural and economic development.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mission_part">
                <h1>Our mission</h1>
                <p>The mission of WF is to enable and equip target group with good training and advice in actively engaging against poverty, ignorance and poor health and for a good welfare.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutPage

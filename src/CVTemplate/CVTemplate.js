import React from 'react';
import myImage from '../images/myImage.jpg';

const CVTemplate =()=>{
    return(
        <div>
        {/* Page Container */}
        <div className="w3-content w3-margin-top" style={{maxWidth: '1400px'}}>
          {/* The Grid */}
          <div className="w3-row-padding">
            {/* Left Column */}
            <div className="w3-third">
              <div className="w3-white w3-text-grey w3-card-4">
                <div className="w3-display-container">
                  <img src={myImage} style={{width: '100%'}} alt="Avatar" />
                  <div className="w3-display-bottomleft w3-container w3-text-black">
                    <h2>Suman V</h2>
                  </div>
                </div>
                <div className="w3-container">
                  <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />UI Developer</p>
                  <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" />Hyderabad, Telangana</p>
                  <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />vangalasuman1995@mail.com</p>
                  <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />******4822</p>
                  <hr />
                  <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" />Skills</b></p>
                  <p>React Development</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '90%'}}>90%</div>
                  </div>
                  <p>Javascript</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '80%'}}>
                      <div className="w3-center w3-text-white">80%</div>
                    </div>
                  </div>
                  <p>HTML 5</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '75%'}}>75%</div>
                  </div>
                  <p>CSS</p>
                  <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{width: '50%'}}>50%</div>
                  </div>
                  <br />
                  <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal" />Languages</b></p>
                  <p>English</p>
                  <div className="w3-light-grey w3-round-xlarge">
                    <div className="w3-round-xlarge w3-center w3-teal" style={{height: '24px', width: '100%'}} >100%</div>
                  </div>
                  <p>Hindi</p>
                  <div className="w3-light-grey w3-round-xlarge">
                    <div className="w3-round-xlarge w3-center w3-teal " style={{height: '24px', width: '100%'}} >100%</div>
                  </div>
                  <p>Telugu</p>
                  <div className="w3-light-grey w3-round-xlarge">
                    <div className="w3-round-xlarge w3-center w3-teal" style={{height: '24px', width: '100%'}} >100%</div>
                  </div>
                  <br />
                </div>
              </div><br />
              {/* End Left Column */}
            </div>
            {/* Right Column */}
            <div className="w3-twothird">
              <div className="w3-container w3-card w3-white w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Work Experience</h2>
                <div className="w3-container">
                  <h5 className="w3-opacity"><b>React Developer (Client operations: Automobile Industry)</b></h5>
                  <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />June 2020 - <span className="w3-tag w3-teal w3-round">Current</span></h6>
                  <p><b>E-Commerce Space:</b> Provides an interface for buyers to book,resale cars including its respective accessories as per requirement on digital platform.  </p>
                  <hr />
                </div>
                <div className="w3-container">
                  <h5 className="w3-opacity"><b>React Developer (Client operations: Financial Services) </b></h5>
                  <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Feb 2018 - Mar 2020</h6>
                  <p><b>Pension Web Portal:</b> Provides an interface to Pension provider to avail Pension and other benefits via Digital Business Platform.</p><br />
                </div>
              </div>
              <div className="w3-container w3-card w3-white">
                <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Education</h2>
                <div className="w3-container">
                  <h5 className="w3-opacity"><b>Jawaharlal Nehru Technological University</b></h5>
                  <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2013-2017</h6>
                  <p>Bachelor of Technology</p>
                  <hr />
                </div>
                <div className="w3-container">
                  <h5 className="w3-opacity"><b>Sri Sai Vidya Vikas Jr. College</b></h5>
                  <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2011 - 2013</h6>
                  <p>Intermediate</p>
                  <hr />
                </div>
                <div className="w3-container">
                  <h5 className="w3-opacity"><b>St.Patricks High Schools</b></h5>
                  <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2010 - 2011</h6>
                  <p>Schooling</p><br />
                </div>
              </div>
              {/* End Right Column */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Page Container */}
        </div>
        <footer className="w3-container w3-teal w3-center w3-margin-top">
          <p>Find me on social media.</p>
          <i className="fa fa-linkedin w3-hover-opacity" onClick={()=>{window.open('https://www.linkedin.com/in/suman-vangala-ab17b7183/?msgControlName=reply_to_sender&msgConversationId=2-NDMyMzUwMTItYmRjNS00YzNhLWJlY2UtMzIyZDgyZDI1ZTExXzAxMA%3D%3D&msgOverlay=true','_blank')}}/>
        
        </footer>
      </div>
    )
}

export default CVTemplate;
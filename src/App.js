import React from 'react';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import linkedin from './assets/icons/linkedin.png';
import website from './assets/icons/website.png';
import logo from './assets/logo.png';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">
              {/* <img src={logo} alt="MantiBot" className='icon' /> */}
              MantiBot.ai
            </a>
          </div>
          <div className="social">
            <a href="https://www.linkedin.com/company/pragetx/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" className='icon'/>
            </a>
            <a href="https://pragetx.com" title="Other Website" target="_blank" rel="noopener noreferrer">
              <img src={website} alt="Website" className='icon'/>
            </a>
            <a href="https://github.com/PragetX-Technologies" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Coming soon...</h1>
            <h1>Get ready for the change.</h1>
            <p>Please check back to know more. Shoot us an email if you're curious.</p>
          </div>
          <a href="mailto:hello@pragetx.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>made by <a className="underlined" href="https://pragetx.com" target="_blank" rel="noopener noreferrer">pragetx.com</a></span>
        </div>
      </div>
    );
  }
}

export default App;
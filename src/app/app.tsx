import React from 'react';
import { Brand } from './components/brand';
import { BorderBtn } from './components/borderBtn';
import { SocialPanel } from './components/socialpanel';
import { ShortcutsPanel } from './components/shortcutspanel';
import { LandingSectionLayout, MainContainer, NoMargin, NoPadding, ContentSection } from './app.css';

const App:React.FunctionComponent = () => {
  return <>
      {/* Fixed elements */}
      <div>
        <SocialPanel />
        <ShortcutsPanel />
      </div>

      <div className="container-fluid" style={{...NoMargin, ...NoPadding}} id="intro">
        <div style={{...NoMargin, width: '100%', padding: '1vw 3vw 0px 3vw'}}>
          <div style={{width: '160px', display: 'inline-block'}}><Brand /></div>
          <div style={{float: 'right'}}>
            <BorderBtn name="CV" onClick={() => {}}/>
          </div>
        </div>

        <div style={MainContainer}>
          {/* --------------- Landing Section ---------- */}
          <div style={LandingSectionLayout}>
            <div className="row" style={{ ...NoMargin, paddingTop: '20vh'}}>
              <div className="col-lg-6 offset-lg-1">
                <h4 style={{fontSize: '18px', fontWeight: 600, lineHeight: '21px', color: '#f8f8f8'}}>Hi There! I'm Mark.</h4>
                <h1 style={{fontSize: '4vw', fontWeight: 500, lineHeight: '5vw', color: '#f8f8f8'}}>Computer Science Graduate & Software Engineer</h1>
              </div>
            </div>
          </div>

          {/* ----------------- Bio Section ------------ */}
          <div className="row justify-content-center" style={{...ContentSection}} id="bio">
            <div className="col-lg-2">
              <h1 style={{fontSize: '8rem'}}>Bio.</h1>
                {/* <img  style={{width:'10vw', height: '10vw', borderRadius: '50%'}}
                    src="avatar.png" alt="pixel-based image of portfolio profile picture" /> */}
            </div>
            <div className="col-lg-6 offset-lg-1">
              <p>
                  Checkmate... Must go faster... go, go, go, go, go! I was part of something special. 
                  Checkmate... Forget the fat lady! You're obsessed with the fat lady! Drive us out 
                  of here! Must go faster... go, go, go, go, go! Is this my espresso machine? Wh-what 
                  is-h-how did you get my espresso machine?

                  This thing comes fully loaded. AM/FM radio, reclining bucket seats, and... power 
                  windows. Just my luck, no ice. You're a very talented young man, with your own clever 
                  thoughts and ideas. Do you need a manager? Do you have any idea how long it takes 
                  those cups to decompose.

                  Is this my espresso machine? Wh-what is-h-how did you get my espresso machine? Remind 
                  me to thank John for a lovely weekend. Must go faster... go, go, go, go, go! 
                  Eventually, you do plan to have dinosaurs on your dinosaur tour, right? Yeah, but John, 
                  if The Pirates of the Caribbean breaks down, the pirates don’t eat the tourists.
              </p>
            </div>
          </div>
          
          {/* ----------------- Work Section ----------- */}
          <div className="row justify-content-center" style={{paddingBottom: '25vh'}} id="work">
            <div className="col-lg-9" style={{borderTop: '2px solid #dedede', paddingBottom: '25vh'}}></div>

          </div>

          {/* ----------------- Projects Section ----------- */}
          <div className="row" style={{...ContentSection}} id="projects"></div>
          
          {/* --------------- Contact Section ---------- */}
          <div className="row" style={{...ContentSection, backgroundColor: '#DEE2E6'}} id="contact"></div>
          
          {/* ------------------ Footer ---------------- */}
          <div className="row" style={{...ContentSection, backgroundColor: '#CED4DA'}}></div>
          
        </div>
      </div>
  </>;
}

export default App;

import React from 'react';
import { Header } from './components/header';
import { SocialPanel } from './components/socialpanel';
import { ShortcutsPanel } from './components/shortcutspanel';
import { LandingSectionLayout, NoMargin, NoPadding } from './app.css';
import CSS from 'csstype'; 

const App:React.FunctionComponent = () => {
  return <>
      {/* Fixed elements */}
      <div>
        <SocialPanel />
        <ShortcutsPanel />
      </div>

      <Header />

      <div className="container-fluid" style={{...NoMargin, ...NoPadding}}>
        {/* --------------- Landing Section ---------- */}
        <div className="row" style={{ ...LandingSectionLayout}}>
          <div className="col-lg-6 offset-lg-2">
            <h4 style={{fontSize: '18px', fontWeight: 600, lineHeight: '21px'}}>Hi There! I'm Mark.</h4>
            <h1 style={{fontSize: '4vw', fontWeight: 500, lineHeight: '5vw'}}>Computer Science Graduate & Software Engineer</h1>
          </div>
        </div>

        {/* ----------------- Bio Section ------------ */}
        <div className="row">
          <div className="col-lg-5 offset-lg-2">
            <h3>Bio</h3>
            <img src="avatar.png" alt="pixel-based image of portfolio profile picture" />
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
          <div className="col-lg-3"><img src={""} alt="" /></div>
        </div>
        
        {/* ----------------- Work Section ----------- */}
        <div className="row">

        </div>

        {/* ----------------- Projects Section ----------- */}
        <div className="row"></div>
        
        {/* --------------- Contact Section ---------- */}
        <div className="row"></div>
        
        {/* ------------------ Footer ---------------- */}
        <div className="row"></div>
        
      </div>
  </>;
}

export default App;

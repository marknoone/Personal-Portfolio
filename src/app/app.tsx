import React from 'react';
import { Brand } from './components/brand';
import { BorderBtn } from './components/borderBtn';
import { SocialPanel } from './components/socialpanel';
import { ShortcutsPanel } from './components/shortcutspanel';
import { LandingSectionLayout, MainContainer, NoMargin, NoPadding, ContentSection } from './app.css';
import { TabbedView } from './components/tabbedview';
import ProjectGridView from './components/projectview/projectview';

type WorkExpProps = { title: string, timeEmployed:string, description:string }
const WorkExperienceView: React.FunctionComponent<WorkExpProps> = (props: WorkExpProps) => {
    return <div style={{}}>
      <h3>{props.title}</h3>
      <h6 style={{color: '#aaa'}}>{props.timeEmployed}</h6>
      <p style={{fontSize: '15px'}}>{props.description}</p>
    </div>;
};

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
            <div className="row" style={{ ...NoMargin, paddingTop: '30vh'}}>
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
            <div className="col-lg-9" style={{borderTop: '2px solid #dedede'}}></div>
          </div>
          <div className="row justify-content-center" style={{paddingBottom: '25vh'}} >
            <div className="col-lg-5">
              <TabbedView views={{
                "Engage EHS": () => <WorkExperienceView title="Software Engineer Intern" timeEmployed="January 2019 - August 2019" 
                    description="In 2019 I joined the production team at Effective Software, helping them develop the company’s 
                      cloud-hosted SaaS platform. Working with Golang, this role furthered my understanding of industry best 
                      practices, engineering patterns/techniques, and cloud-based infrastructure/management (AWS) all within 
                      an AGILE CI/CD setting." />,

                "Trinity College": () => <WorkExperienceView title="Project Developer" timeEmployed="June 2018 - January 2019" 
                    description="During my time in Trinity IT services, I worked alongside three other engineers developing a mobile 
                      application for Trinity College Students called Trinity Live. My role was to help develop, test, deliver, and 
                      integrate a scalable backend system and IOS application that connects all student mobile devices to Trinity 
                      systems." />,

                "Launchbox": () => <WorkExperienceView title="Project Lead Developer" timeEmployed="" 
                    description="Within TCD Launchbox, a college startup incubator program, I worked on an E-tourism platform for 
                      over three months. In this role, I developed the project entirely from pre-development to production exhibiting 
                      skills in UI/UX, cross-platform client development, and backend systems development." />,

                "Davra Networks": () => <WorkExperienceView title="QA Testing and Development Intern" timeEmployed="" 
                    description="As part of the QA/Testing team, my sole responsibility was to manually test and assist in developing 
                      automated testing with C# and Javascript to ensure the integrity of their flagship product." />,

                "Live Technology": () => <WorkExperienceView title="Java/Web Developement Intern" timeEmployed="" 
                    description="In 2014, I was offered an intern position in a pioneering organisation in the US, Live
                      Technology. Working with a very talented team, I developed my knowledge of Java,
                      Web UI Development and learned the importance of individual roles in a group dynamic." />,
              }}/>
            </div>
            <div className="col-lg-2 offset-lg-1">
              <h1 style={{fontSize: '8rem'}}>Work.</h1>
            </div>
          </div>

          {/* ----------------- Projects Section ----------- */}
          <div className="row justify-content-center" style={{paddingBottom:'25vh', paddingTop: '5vh', backgroundColor: '#012A4A'}} id="projects">
            <div className="col-lg-8"><ProjectGridView /></div>
          </div>
          
          
          {/* ------------------ Footer ---------------- */}
          <div className="row justify-content-center" style={{color: '#6C757D', backgroundColor: '#CED4DA', padding: '24px', fontWeight: 500, fontSize: '14px'}}>
            <div className="col-lg-3" style={{textAlign: 'left'}}><p>Mark Noone.</p></div>
            <div className="col-lg-4" style={{textAlign: 'center'}}><p>marklaurencenoone@gmail.com</p></div>
            <div className="col-lg-3" style={{textAlign: 'right'}}><p>© 2020</p></div>
          </div>
          
        </div>
      </div>
  </>;
}

export default App;

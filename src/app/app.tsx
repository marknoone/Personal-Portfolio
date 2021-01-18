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
              <div className="col-lg-6 offset-lg-1 col-md-10">
                <h4 style={{fontSize: '18px', fontWeight: 600, lineHeight: '21px', color: '#f8f8f8'}}>Hi There! I'm Mark.</h4>
                <h1 style={{fontSize: '4vw', fontWeight: 500, lineHeight: '5vw', color: '#f8f8f8'}}>Computer Science Graduate & Software Engineer</h1>
              </div>
            </div>
          </div>

          {/* ----------------- Bio Section ------------ */}
          <div className="row justify-content-center" style={{...ContentSection}} id="bio">
            <div className="col-lg-2 col-md-2 col-sm-2">
              <h1 style={{fontSize: '10vw'}}>Bio.</h1>
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-7 offset-md-1 col-sm-7 offset-sm-1" style={{alignItems: 'center'}}>
              <p style={{position: 'relative', top:'3vw'}}>
                  My name is Mark Noone and I am a recent <b>Computer Science</b> masters graduate from 
                  <b>Trinity College Dublin</b>. 
                  I am a recent <b>Computer Science</b> masters graduate and am currently looking for the next chapter 
                  of my software engineering career.  I am a measured, results-orientated, and hard-working individual 
                  who enjoys focusing on bespoke projects with enthusiastic and knowledgable teams. I have 
                  a great interest in <b>scalable systems, software architecture, and networked applications</b>
                  and am looking for opportunities to develop my knowledge on these topics further.
              </p>
            </div>
          </div>
          
          {/* ----------------- Work Section ----------- */}
          <div className="row justify-content-center" style={{paddingBottom: '25vh'}} id="work">
            <div className="col-lg-9 col-md-10 col-sm-11" style={{borderTop: '2px solid #dedede'}}></div>
          </div>
          <div className="row justify-content-center" style={{paddingBottom: '25vh'}} >
            <div className="col-lg-5 col-md-7 col-sm-11">
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
            <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-none">
              <h1 style={{fontSize: '10vw'}}>Work.</h1>
            </div>
          </div>

          {/* ----------------- Projects Section ----------- */}
          <div className="row justify-content-center" style={{paddingBottom:'15vh', paddingTop: '5vh', backgroundColor: '#F5F5F5', margin: '0px'}} id="projects">
            <div className="col-lg-8"><ProjectGridView /></div>
          </div>
          
          
          {/* ------------------ Footer ---------------- */}
          <div className="row" style={{color: '#1A1A1A', padding: '24px', fontWeight: 600, margin: '0px', marginTop: '24px', fontSize: '14px'}}>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6" style={{textAlign: 'left'}}><p>Mark Noone.<br /> <span style={{fontWeight: 400}}>© 2020</span></p></div>
            <div className="col-lg-3 offset-lg-6 col-md-4 offset-md-4 col-sm-6 col-xs-6" style={{textAlign: 'right'}}><p>marklaurencenoone@gmail.com</p></div>
          </div>
          
        </div>
      </div>
  </>;
}

export default App;

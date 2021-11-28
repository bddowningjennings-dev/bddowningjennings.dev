
import React from 'react'
import { Link, Router } from '@reach/router'

import './App.css'

import joe_pesci from './images/joe_pesci.jpg'
import gif from './images/old-under-construction.gif'

const resume_page = 'https://bddowningjennings.dev/advertisement'

interface iRoute {
  path: string
}

const Art = (props: iRoute) =>  {
  const ArtHome = (props: iRoute) => <div className="ArtHome">ArtHome</div>
  const Writing = (props: iRoute) => <div className="Writing">Writing</div>
  const Drawing = (props: iRoute) => <div className="Drawing">Drawing</div>
  return <div className="Art">
    Art
    <Router basepath="art">
      <ArtHome path="/" />
      <Writing path="writing" />
      <Drawing path="drawing" />
    </Router>
  </div>
}
const Tech = (props: iRoute) =>  {
  const TechHome = (props: iRoute) => <div className="TechHome">
    <button className="TechHomeLeft">Left</button>
    <button className="TechHomeRight">Right</button>
  </div>
  const Writing = (props: iRoute) => <div className="Writing">Writing</div>
  const Development = (props: iRoute) => <div className="Development">Development</div>
  return <div className="Tech">
    Tech
    <Router basepath="tech">
      <TechHome path="/" />
      <Writing path="writing" />
      <Development path="development" />
    </Router>
  </div>
}
const CCM = (props: iRoute) => {
  return <div className='ccm-main'>
    <div className='ccm-job-title'>
      <h2>
        Full Stack Engineer II - Greenfield Work
      </h2>
      <h3>
        City Creek Mortgage
      </h3>
    </div>
    <div className='ccm-body'>
      <div className='ccm-paragraph'>
        {`
          I'm very excited to be considered for this role! The described responsibilities of the role genuinely appeal to me and outline the type of work I thrive in and wish to be doing. And yeah, I would be honored to be a part of the effort to make mortgages easier to manage and lower in cost.
        `}
      </div>

      <div className='ccm-paragraph'>
        {`
          One of the aspects I'm specifically excited about — it seems like there's potentially space in this position to work with the tools I most readily reach for! I am forever interested in learning additional skills and working in new stacks; that said there is a special place in my heart for problems which allow/call for JavaScript and TypeScript solutions! Radiating from this special JS place and filling my whole, leaping heart are React and Node (Express) projects - which build on amazingly useful mental models/patterns and wonderful open source libraries to quickly create simple, easy to understand & work in applications! So, if you'd like someone that feels this way working on your team that's a huge plus for us both!
        `}
      </div>
      <div className='ccm-paragraph'>
        {`
          Ultimately, technology aside, I wish to serve people and improve the lives of those I am able to help; and because the largest portion of my life is going to overlap with office hours, it is important to me to have a role which allows me to use my time thoughtfully and in a way consistent with my identity and purpose. I am a helper and I work best and am proudest when I am able to help get things done which positively impact others. Ideally, I would want to work with others who are similar - and I enthusiastically recognize that the core values listed in the posting for this role align with my own.
        `}
      </div>
      <div className='ccm-paragraph'>
        {`
          Additionally, I recognize that my recent role as Programmer/Analyst for the UIT department at the University of Utah, which has had a huge impact on my development and abilities, was very similar in many ways to this one. At the U I was able to work directly with some of the users of the internal/external products and with the system admins that could share common issues they and others faced. I was able to put hands on these issues and had a huge voice in the solutions that were adopted. This role also had a startup feel but was tethered to a larger organization and so was without dramatically shifting structure and direction which sometimes is necessary for agile startups - the space and products remained fundamentally the same and I was able to not only create applications, automated scripts and provide analysis but also become an expert in many areas of administration.
        `}
      </div>
      <div className='ccm-paragraph'>
        {`
          I can also relate the provided responsibilities to many I've experienced in my role as Data Analyst at Sutter Health! I'm very proud that at Sutter Health I was able to have an important impact on both processes and the organization itself. It was in this role that I first made the leap from analyst/mathematician to (solution) developer. I initially worked with VBA and macros in Excel to load contract proposals for medical supplies and pharmaceuticals and generate/capture SQL query results and automate comparison/projection of costs. The tool I developed quickly was adopted by the department and greatly increased both the speed and quality of such analysis! I was then able to create other functionality in the tool and others were reaching out to me to work on processes that would help them do their jobs better! Growing in and expanding my role, I was able to manage databases and develop new ETL processes as well as head the analysis of multi-billion dollar distribution contracts.
        `}
      </div>
      <div className='ccm-tldr'>
        {`TLDR;`}
      </div>
      <div className='ccm-strengths'>
          <span className='bold'>Personal Strengths:</span> I am very passionate about learning, growing, communicating and helping others! <br/>
          <span className='bold'>Professional Strengths:</span> I possess the drive and ability to get things up and working and the desire to make the solution as simple and high quality as possible. I do not just wait to be told exactly what to do - instead just point me to problems and introduce me to those invested in making things better.
      </div>
      <div className='ccm-paragraph'>
        {`
          I would love to have an opportunity to have an interview and more fully discuss this role, my experiences and my continued passion to grow and meet challenges.
        `}
      </div>     
      <div>
        {`
          Thank you for your consideration,
        `}
      </div>
      <div>
        {`
          Blane Downing-Jennings
        `}
      </div>
    </div>
  </div>
}
const Home = (props: iRoute) => {
  return <div className="App">
    <h2>
      <img src={gif} alt="old-under-construction" id="under-construction" />
      More Joe Pesci images to come!
    </h2>
    <img id="pesci_pic" onClick={() => window.location.href=resume_page} src={joe_pesci} alt="Joe Pesci looking fresh-y" />
    <div className="resume_row">
      <div className="left" />
      <a id="resume_link" href={resume_page}>
        <button className="flash-button">{`Resume >>`}</button>
      </a>
    </div>
  </div>
}
const App = () => {
  return <Router>
    <Home path='/' />
    <CCM path='ccm' />
  </Router>
}
const MainHome = (props: iRoute) => <div className="MainHome">MainHome</div>
const Inprogress = () => {
  return  <div className="App">
    <header className="Header">
      <nav className="Navbar">
        <Link className="Link" to="tech">Tech</Link>
        <Link to="">
         <h1 className="header-name">BDDOWNINGJENNINGS <span id="header-dot">(dot)</span> DEV</h1>
        </Link>
        <Link to="art">Art</Link>
      </nav>
    </header>
    <main className="Main">
      <Router className="Router">
        <Art path="art/*" />
        <Tech path="tech/*" />
        <MainHome path="/" />
      </Router>
    </main>
    <footer className="Footer">Footer</footer>
  </div>
}

export default App

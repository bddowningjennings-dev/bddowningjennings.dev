
import React from 'react'
import { Link, Router } from '@reach/router'

import './App.css'

import joe_pesci from './images/joe_pesci.jpg'

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
const App = () => {
  return <div className="App">
    <h2>More Joe Pesci images to come!</h2>
    <img id="pesci_pic" onClick={() => window.location.href=resume_page} src={joe_pesci} alt="Joe Pesci looking fresh-y" />
    <div className="resume_row">
      <div className="left" />
      <a id="resume_link" href={resume_page}>
        <button className="flash-button">{`Resume >>`}</button>
      </a>
    </div>
  </div>
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

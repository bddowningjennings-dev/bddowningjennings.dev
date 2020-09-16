
import React from 'react'
import { Link, Router } from '@reach/router'

import './App.css'

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
  const TechHome = (props: iRoute) => <div className="TechHome">TechHome</div>
  const Writing = (props: iRoute) => <div className="Writing">Writing</div>
  const Development = (props: iRoute) => <div className="Development">Development</div>
  return <div className="Art">
    Art
    <Router basepath="tech">
      <TechHome path="/" />
      <Writing path="writing" />
      <Development path="development" />
    </Router>
  </div>
}
const App = () => {
  const MainHome = (props: iRoute) => <div className="MainHome">MainHome</div>
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

import React, { Fragment } from 'react'
import FakeText from "./FakeText"
import "./index.css"
import { useHistory } from "react-router-dom"

import { BrowserRouter as Router, Link, Route, Switch, Redirect, useParams } from "react-router-dom";

const App = () => {
  const name = 'John Doe'
  return (
  <Router>
    <div>
       <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to={`/about/${name}`}>About</Link></li>
          {/* <li><Link to="/contact">Contact</Link></li> */}
        </ul>
        </nav>
    </div>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about/:name"  component={About} />
    {/* <Route path="/contact" component={Contact} /> */}
  </Switch>
  </Router>
  )
}

const Home = () => (
  <Fragment>
    <h1>Home</h1>
    <FakeText />
  </Fragment>
)


const About = () => { 
  const { name } = useParams()
  return (
  <Fragment>
    { name !== 'John Doe' ? <Redirect to="/" /> : null }
    <h1>About {name}</h1>
    <Route component={Contact} />
  </Fragment>
) 
}


const Contact = () => { 
  const history = useHistory();
  return (
  <Fragment>
    <h1>Contact</h1>
    <button onClick={() => history.push('/') }> Go to home</button>
    <FakeText />
  </Fragment>
)
}

export default App


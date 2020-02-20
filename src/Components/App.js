import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import contact from "./contact"
import data from "../data.json"
import Singleview from "./Singleview"
export default function App() {
  return (
    <Router>
      <Route exact path="/" component={contact} />
      <Route path="/Singleview/:id" component={Singleview} />
    </Router>
  )
}

// {/* <div className="App">
//     <h1>Le Fam</h1>
//     <ul>
//      <li><Link to="/contact/:id" component={Contact}></Link></li>
//     </ul>
//   </div> */

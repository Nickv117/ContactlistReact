import React from "react"
import data from "../data.json"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default function(props) {
  const id = props.match.params.id

  const person = data.find(contact => contact.id == id)

  return (
    <div className="wrapper">
      <Link to={`/`}>
        <button type="button" className="backArrow"></button>
      </Link>
      <div className="personDetails">
        <img className="personImg" src={person.picture.large} />
        <ul className="details">
          <li>
            {person.name.first} {person.name.last}
          </li>
          <li>{person.email}</li>
          <li>
            {person.phone}
            {person.cell}
          </li>
          <li>
            {person.location.city}
            {person.location.state}
          </li>
        </ul>
      </div>
    </div>
  )
}

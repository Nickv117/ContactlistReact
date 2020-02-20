import React from "react"
import data from "../data.json"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default function(props) {
  return (
    <div className="CList">
      <h1 className="listTitle">Le fam</h1>
      <ul>
        {data.map(person => (
          <Link to={`/Singleview/${person.id}`}>
            <li>
              <img src={person.picture.thumbnail} />
              {person.name.first} {person.name.last}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

import React from 'react'
import {Link} from 'react-router-dom'

export default function Menu() {
  return (
    <div className="row">
      <div className="col-4">
        <Link to="/">Home</Link>
      </div>
      <div className="col-4">
        <Link to="/first">First</Link>
      </div>
      <div className="col-4">
        <Link to="/second">Second</Link>
      </div>
    </div>
  );
}

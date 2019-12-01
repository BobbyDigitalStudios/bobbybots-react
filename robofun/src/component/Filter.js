import React, { Component } from 'react'
import Triangle from '../img/triangle-light.svg'

export class Filter extends Component {
  render() {
    return (
      <div className="filterRobots">
      {/* <p className="container" style={textStyle}>Filter by:</p>
        <p className="container" style={textStyle}>Hide filter  <img style={{ height: '.3rem' }} src={Triangle} alt="" /></p>
      */}
      </div>
    )
  }
}

const textStyle = {
  color: '#fff',
  fontSize: '.7rem'
}


export default Filter

import React, { Component } from 'react'
import StarPic from '../img/star-active.svg'

export class Star extends Component {
  state = {
    star: StarPic
  }
  render() {
    return (
      <div>
        <img src={this.state.StarPic} alt="" />
      </div>
    )
  }
}

export default Star

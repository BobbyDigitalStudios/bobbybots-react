import React, { Component } from 'react'
import Logo from '../img/bobby-logo-header.svg'

export class Header extends Component {
  state = {
    counter: 0
  }

  render() {
    return (
      <div style={headerStyle}>
        <h1 style={headerStyle.h1}>Bobbybots score board</h1>
        <img style={headerStyle.img} src={Logo} alt="Logo" />
      </div>
    )
  }
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'sticky',
  padding: '1.5% 0',
  width: '100%',
  background: '#fff',
  
  img: {
    height: '40px',
    marginRight: '3rem',
  },
  
  h1: {
    color: '#72002f',
    marginLeft: '3rem'
  }

}

export default Header

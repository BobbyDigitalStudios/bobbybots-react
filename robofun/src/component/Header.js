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
  position: 'sticky',
  top: '0',
  flex: '1',
  padding: '1% 0',
  width: '100%',
  backgroundColor: '#f2f2f2',
  marginBottom: '5rem',

  img: {
    display: 'inline-block',
    verticalAlign: 'top',
    height: '40px',
    marginRight: '3rem',
  },

  h1: {
    display: 'inline-block',
    verticalAlign: 'top',
    color: '#ba547e',
    marginLeft: '3rem',
    flex: '1'
  }

}

export default Header

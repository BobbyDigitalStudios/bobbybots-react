import React, { Component } from 'react'
import Lupe from '../img/search.svg'

export class Search extends Component {
  render() {
    return (
      <form >
        <input type="text" placeholder="Search" />
      </form>
    )
  }
}

const searchStyle = {
  width: '50%',
  padding: '.5rem',
  margin: 'auto',
  marginBottom: '1rem',
  fontSize: '1.2rem'
}

export default Search

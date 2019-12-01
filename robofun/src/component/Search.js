import React, { Component } from 'react'

export class Search extends Component {
  state = {
    text: ''
  };


  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    this.props.search(this.state.text);

  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          style={searchStyle}
          type="text"
          name="text"
          value={this.state.text}
          placeholder="Search"
          onChange={this.onChange}
        />
      </form>
    )
  }
}

const searchStyle = {
  display: 'flex',
  width: '50%',
  margin: 'auto',
  marginBottom: '1rem',
  alignItem: 'center',
  fontSize: '1.2rem'
}

export default Search

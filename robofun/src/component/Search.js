import React, { Component } from 'react'

export class Search extends Component {
  state = {
    text: ''
  };

  onSearch(e) {
    this.setState({ [e.target.name]: e.target.value })
  };

  render() {
    return (
      <div >
        <form>
          <input
            style={searchStyle}
            type="text"
            name="text"
            value={this.state.text}
            placeholder="Search"
            onChange={this.onSearch.bind(this)}
          />
        </form>
      </div>
    )
  }
}

const searchStyle = {
  position: 'absolute',
  top: '40%',
  left: '20%',
  boxShadow: '0 2px 5px #333',
  zIndex: '1',
  width: '50%',
  margin: 'auto',
  marginBottom: '1rem',
  fontSize: '1.5rem',
  backgroundColor: '#fff'
}

export default Search

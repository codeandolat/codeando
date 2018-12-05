import React, { Component } from 'react'

class Loading extends Component {
  render() {
    return(
      <div className="loader-container">
        <div className="loader-balls">
          <div className="loader-balls-item"></div>
          <div className="loader-balls-item"></div>
          <div className="loader-balls-item"></div>
        </div>
      </div>
    )
  }
}

export default Loading

import React, { Component } from 'react'

class Loading extends Component {
  render() {
    return(
      <div className="loader-container">
        <div class="loader-balls">
          <div class="loader-balls-item"></div>
          <div class="loader-balls-item"></div>
          <div class="loader-balls-item"></div>
        </div>
      </div>
    )
  }
}

export default Loading

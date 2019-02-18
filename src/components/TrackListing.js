import React from 'react'
//import PropTypes from 'prop-types'

export class TrackListing extends React.Component {
  render(){
    return (
      <div className="album-listing">
        <h2>{this.props.albumTitle}</h2>
        <p>This is the track listing</p>
      </div>
    )
  }
}


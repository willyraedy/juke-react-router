import React, { Component } from 'react';

export default function ShareEmail(props){
  const url = props.url

  return(
    <a href={`mailto:?subject=Check it out BROTHER&amp;body=Check out this g r o o v y album! localhost:1337/#/${url}`}
   title="Share by Email">
      <span className = "glyphicon glyphicon-share " aria-hidden = "true"></span>
    </a>
  )
}

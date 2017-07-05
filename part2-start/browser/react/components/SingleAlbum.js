import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios';

const fakeAlbum = {
    name: 'Yellow Submarine',
    id: 2,
    imageUrl: 'http://fillmurray.com/300/300',
    songs: [
      {
        id: 4,
        name: 'London Calling',
        artists: [
          { name: 'Bill' }
        ],
        genre: 'Punk',
        audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
      }
    ]
  }

export default class SingleAlbum extends Component {
  constructor(){
    super()
    this.state = {selectedAlbum: {}}
  }

  componentDidMount(){
    const albumId = this.props.match.params.albumId
    axios.get(`/api/albums/${albumId}`)
    .then(res => res.data)
    .then(album => this.setState({selectedAlbum: album}))
  }

  render () {

    const album = this.state.selectedAlbum;

    return (
      <div className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs songs={album.songs} />
      </div>
    );
  }
}

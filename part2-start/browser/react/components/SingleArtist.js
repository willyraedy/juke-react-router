import React, { Component } from 'react';
import axios from 'axios';
import AlbumCollection from './AlbumCollection.js'
import Songs from './Songs.js'
import {Link} from 'react-router-dom'
import {HashRouter, Route} from 'react-router-dom'

class SingleArtist extends Component{
  constructor(){
    super()
    this.state = {artist: {}, albums: [], songs: []}

  }

  componentDidMount(){
    let id = this.props.match.params.artistId
    Promise.all([axios.get(`/api/artists/${id}`), axios.get(`/api/artists/${id}/albums`),
    axios.get(`/api/artists/${id}/songs`)])
    .then(responses => (
      responses.map(res => res.data)
    ))
    .then(([artist,albums,songs]) => {
      this.setState({artist,albums,songs})
    })
  }

  render(){
    return(
      <div>
        <h3>{this.state.artist.name}</h3>
        {/*<AlbumCollection albums = {this.state.albums}/>
        <h4>SONGS</h4>
        <Songs songs = {this.state.songs}/>*/}
        <ul>
          <li><Link to={`/artists/${this.state.artist.id}/albums`}>ALBUMS</Link></li>
          <li><Link to="ph">SONGS</Link></li>
        </ul>

        <HashRouter>
          <Route path={`/artists/:artistId/albums`} render={ (routeProps)=> <AlbumCollection albums = {this.state.albums} /> } />
        </HashRouter>

      </div>
    )
  }
}

export default SingleArtist

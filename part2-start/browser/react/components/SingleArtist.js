import React, { Component } from 'react';
import axios from 'axios';
import AlbumCollection from './AlbumCollection.js'
import Songs from './Songs.js'
import {Link} from 'react-router-dom'
import {HashRouter, Route, Switch} from 'react-router-dom'
import NotFound from './404'

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
          <li><Link to={`${this.props.match.url}/albums`}>ALBUMS</Link></li>
          <li><Link to={`${this.props.match.url}/songs`}>SONGS</Link></li>
        </ul>

        <HashRouter>
          <div>
            <Switch>
              <Route exact path={`${this.props.match.url}`} />
              <Route path={`${this.props.match.url}/albums`} render={ (routeProps)=> <AlbumCollection albums = {this.state.albums} /> } />
              <Route path = {`${this.props.match.url}/songs`} render = {(routeProps) => <Songs songs = {this.state.songs} /> }/>
              <Route path = '/*' component={NotFound} />
            </Switch>
          </div>
        </HashRouter>

      </div>
    )
  }
}

export default SingleArtist

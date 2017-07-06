import React, { Component } from 'react';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import AllArtists from './AllArtists.js'
import SingleArtist from './SingleArtist.js'
import NotFound from './404'

import {HashRouter, Route, Switch} from 'react-router-dom'

export default class Main extends Component {

  constructor (props) {
    super(props);
    // this.selectAlbum = this.selectAlbum.bind(this);
    // this.deselectAlbum = this.deselectAlbum.bind(this);
  }



  // selectAlbum (albumId) {
  //   axios.get(`/api/albums/${albumId}`)
  //     .then(res => res.data)
  //     .then(album => this.setState({
  //       selectedAlbum: album
  //     }));
  // }

  // deselectAlbum () {
  //   this.setState({ selectedAlbum: {}});
  // }

  render () {
    return (
        <HashRouter>
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar />
        </div>
          <div className="col-xs-10">
            <Switch>
              <Route exact path='/' component={AllAlbums}></Route>
              <Route exact path='/albums' component={AllAlbums}></Route>
              <Route exact path = '/albums/:albumId' component = {SingleAlbum} />
              <Route exact path = '/artists' component = {AllArtists}/>
              <Route path = '/artists/:artistId' component = {SingleArtist}/>
              <Route path = '*' component={NotFound} />
            </Switch>
          </div>
        <Player />
      </div>
        </HashRouter>
    );
  }
}

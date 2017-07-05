import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'


class AllArtists extends Component{
  constructor(){
    super()
    this.state = {allArtists:[]}
  }

  componentDidMount(){
    axios.get('api/artists')
    .then(res => res.data)
    .then(artists => this.setState({allArtists: artists}))
  }

  render(){
    return(
      <div>
        <h3>All Artists</h3>
        <table className='table'>
          <tbody>

            {
            this.state.allArtists.map(artist => (
              <tr key = {artist.id}>
                <td>
                  <Link to = {`/artists/${artist.id}`}>{artist.name}</Link>
                </td>
              </tr>
              ))
            }
          </tbody>
        </table>
      </div>


    )
  }
}

export default AllArtists

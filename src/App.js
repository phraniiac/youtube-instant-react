import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from '@material-ui/core/Menu';
import SearchBar from './components/SearchBar/SearchBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import YoutubeAPI from './utils/SearchYoutube';
import { withStyles } from '@material-ui/core/styles';
import VideoList from './components/VideoList/VideoList';
import Grid from '@material-ui/core/Grid';
import styles from './AppStyles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoList : [],
      selectedVideo : {}
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.setVideoState = this.setVideoState.bind(this);
    this.handleVideoSelection = this.handleVideoSelection.bind(this);
  }

  setVideoState = (videos) => { 
    this.setState({videoList: videos})
    this.setState({selectedVideo: videos[0]})
  };

  handleSearch = (term) => {
    YoutubeAPI.videoSearch(term, this.setVideoState);    
  }

  handleVideoSelection = (video) => this.setState({selectedVideo: video});

  render() {
    const classes = this.props.classes;
    return (
      <React.Fragment>
        <CssBaseline>
        <div className={classes.root}>
          <Grid container>
            <Grid item xs={12}>
              <SearchBar searchVideos={this.handleSearch}/>
            </Grid>
            <Grid item xs={8}>
              <VideoPlayer video={this.state.selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <Typography component="h2" variant="headline">
                Search Results
              </Typography>
              <VideoList videoList={this.state.videoList} handleVideoSelection={this.handleVideoSelection}/>
            </Grid>
            
          </Grid>
        </div>
        </CssBaseline>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);

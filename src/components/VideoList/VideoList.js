import React from 'react';
import VideoEle from '../VideoEle/VideoEle';
import { withStyles } from '@material-ui/core/styles';
import styles from './VideoListStyles';

class VideoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedVideo: {}
        }

        this.handleVideoSelection = this.handleVideoSelection.bind(this);
    }

    handleVideoSelection = video => {
        this.setState({selectedVideo: video});
        this.props.handleVideoSelection(video);
    }

    render() {
        const classes = this.props.classes;

        return (
            
            <div className={classes.videoList}>
                {
                    this.props.videoList.map(
                        video => <VideoEle onClick={this.handleVideoSelection} video={video} />
                    )
                }
            </div>
        )
    }

}

export default withStyles(styles)(VideoList);
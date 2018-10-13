import React from 'react';
import styles from './VideoPlayerStyles';
import withStyles from '@material-ui/core/styles/withStyles'

class VideoPlayer extends React.Component {

    render() {
        const classes = this.props.classes;
        let videoUrl = ""
        let videoId = ""
        if(this.props.video.id) {
            videoId = this.props.video.id.videoId;
            videoUrl = "http://youtube.com/embed/" + this.props.video.id.videoId;
        }
        return (
            <div>
                <iframe 
                    width="640" 
                    height="360"
                    frameBorder="0"
                    allowFullScreen
                    title="a"
                    src={videoUrl}
                    >
                </iframe>
            </div>
        )
    }
}

export default withStyles(styles)(VideoPlayer);
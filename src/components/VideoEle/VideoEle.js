import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Typography from '@material-ui/core/Typography';
import styles from './VideoEleStyles';
import { withStyles } from '@material-ui/core/styles';


class VideoEle extends React.Component {

    handleOnClick = e => {
        this.props.onClick(this.props.video);
    }

    render() {
        const classes = this.props.classes;
        return (
            <Card onClick={this.handleOnClick} className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    image={this.props.video.snippet.thumbnails.default.url}
                    title={this.props.video.snippet.title}
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                    <Typography component="h2" variant="headline">
                        {this.props.video.snippet.title}
                    </Typography>
                    <Typography variant="subheading" color="textSecondary">
                        {this.props.video.snippet.description}
                    </Typography>
                    </CardContent>
                </div>
            </Card>
        )
    }
}

export default withStyles(styles)(VideoEle);
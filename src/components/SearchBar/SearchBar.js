import React from 'react';
import TextField from '@material-ui/core/TextField'

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query: "Search for Video"
        }

        this.handleChange = this.handleChange.bind(this);
    }

    searchYoutube = (term) => {
        this.props.searchVideos(term);
    }

    handleChange = (e) => {
        const newQuery = e.target.value;
        this.setState({query: newQuery});
        this.searchYoutube(newQuery);
    }

    render() {
        // const classes = this.props.classes;
        return (
            <div>
                <TextField
                    id="outlined-name"
                    label="Name"
                    // className={classes.textField}
                    value={this.state.query}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                    />
                <p>{this.state.query}</p>
            </div>
        )
    }
}

export default SearchBar;

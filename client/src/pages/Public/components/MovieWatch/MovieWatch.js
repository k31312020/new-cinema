import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player'
import styles from '../MovieBanner/styles';
import withStyles from '@material-ui/core/styles/withStyles';

class MovieWatch extends Component {
  state = {
    src: ''
  };

  componentDidMount() {
  }

  componentDidUpdate(prevProps) {
  }

  render() {
    const { movie, classes } = this.props;
    const {src} = this.state;
    return (
      <div className={classes.center}>
        <ReactPlayer controls={true} url={movie.video}/>
      </div>
    );
  }
}

MovieWatch.propTypes = {
  classes: PropTypes.object,
  movie: PropTypes.object
};

export default (withStyles(styles)(MovieWatch));


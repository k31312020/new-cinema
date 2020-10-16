import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, Button } from '@material-ui/core';
import Paper from '../Paper';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(2)
  },
  input: {
    display: 'none'
  },
  button: {
    minWidth: 100,
    marginRight: theme.spacing(2)
  }
});

const FileUpload = props => {
  const { classes, className, file, onUpload, accept, label, reference } = props;
  const rootClassName = classNames(
    {
      [classes.root]: true
    },
    className
  );

  return (
    <Paper className={rootClassName}>
      <input
        accept={accept}
        className={classes.input}
        id={reference}
        type="file"
        onChange={onUpload}
      />
      <label htmlFor={reference}>
        <Button variant="outlined" className={classes.button} component="span">
          {label}
        </Button>
      </label>
      <span>{file ? file.name : 'No file selected'}</span>
    </Paper>
  );
};

FileUpload.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  elevation: PropTypes.number,
  outlined: PropTypes.bool,
  squared: PropTypes.bool,
  accept: PropTypes.string,
  label: PropTypes.string,
  reference: PropTypes.string
};

FileUpload.defaultProps = {
  accept: "image/*",
  squared: false,
  outlined: true,
  elevation: 0,
  label: "upload",
};

export default withStyles(styles)(FileUpload);

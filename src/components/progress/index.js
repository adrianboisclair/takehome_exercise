import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
    color: 'red',
  },
  progressContainer: {
    alignItems: 'center',
    background: 'rgba(0,0,0,.5)',
    display: 'flex',
    flexDirection: 'center',
    justifyContent: 'center',
    position: 'fixed',
    zIndex: '1',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
  }
});

function CircularIndeterminate(props) {
  const { classes } = props;
  if (!props.isLoading) {
    return <div />;
  }
  return (
    <div className={classes.progressContainer} style={{display: 'flex', flexDirection: 'center', background: 'rgba(0,0,0,.5)'}}>
      <CircularProgress />
    </div>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);
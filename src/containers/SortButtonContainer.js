import React from 'react';
import { connect } from 'react-redux';
import { setSorting } from '../actions';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';

const SortButton = ({ active, children, onClick, classes }) => (
    <Button
        color="secondary" variant="contained"
        className={classes.button}
        onClick={onClick}
        disabled={active}
        style={{
            color: active ? pink[400] : 'white',
            backgroundColor: active ? pink [700] : pink[500],
            margin: '5px'
        }}
            >
        {children}
    </Button>
);

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.criterion === state.sortBy,
});

const mapDispatchToProps = (dispatch, props) => ({
    onClick: () => dispatch(setSorting(props.criterion))
});

const styles = () => ({
    button: {
      '&:disabled': {
        backgroundColor: pink[700],
        color: pink[400]
      }
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SortButton));

SortButton.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.string,
    onClick: PropTypes.func
};

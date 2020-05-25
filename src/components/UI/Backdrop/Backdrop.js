import React from 'react';
import classes from './Backdrop.css';

// todo backdrop not working: troubleshoot
const backdrop = (props) => {
    return (
        props.show ? <div className={classes.Backdrop}></div> : null
    );
};

export default backdrop;
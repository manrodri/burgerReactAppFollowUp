import React from 'react';
import classes from './Backdrop.css';

// todo backdrop not working: troubleshoot
const backdrop = (props) => (props.foo ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null);

export default backdrop;
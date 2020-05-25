import React from 'react';
import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    return (
        <Aux>
            <Backdrop foo={props.purchasing} clicked={props.modalClosed} />
            <div className={classes.Modal} style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                display: props.show ? 'block' : 'none'

            }}>

                {props.children}
            </div>
        </Aux>

    );
};

export default modal;
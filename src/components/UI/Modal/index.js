import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop';
import CancelIcon from '../Icons/Cancel';
import Button from '../Button';
import classes from './Modal.css';

const modal = props => (
  <Fragment>
    <Backdrop show />
    <div className={classes.Modal}>
      <Button
        btnClasses={['CloseModalButton']}
        clicked={props.closeModal}
      >
        <CancelIcon />
      </Button>
      {props.modalContent}
    </div>
  </Fragment>
);

export default modal;

modal.propTypes = {
  modalContent: PropTypes.element,
  closeModal: PropTypes.func,
};

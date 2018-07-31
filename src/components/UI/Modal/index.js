import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../Backdrop';
import CancelIcon from '../Icons/Cancel';
import Button from '../Button';
import classes from './Modal.css';
import { setCurrentClasses } from '../../../shared/utility';

const modal = (props) => {
  let currentClasses = [classes.Modal];
  currentClasses = props.wrpClasses ?
    setCurrentClasses(props.wrpClasses, currentClasses, classes) : null;
  global.console.log(currentClasses);
  return (<Fragment>
    <Backdrop show clicked={props.closeModal} />
    <div className={currentClasses ? currentClasses.join(' ') : null}>
      <Button
        btnClasses={['CloseModalButton']}
        clicked={props.closeModal}
      >
        <CancelIcon />
      </Button>
      {props.modalContent}
    </div>
  </Fragment>);
};

export default modal;

modal.propTypes = {
  modalContent: PropTypes.element,
  closeModal: PropTypes.func,
};

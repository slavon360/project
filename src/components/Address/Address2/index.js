import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import Landscape from '../../UI/Icons/Landscape';
import classes from './Address2.css';

const address = props => (
  <div className={classes.AddressWrp}>
    <h2 className={classes.Title}>Address</h2>
    <div className={classes.InputsContent}>
      <Input
        changeValue={event => props.setUsersData(event, 'address')}
        elementConfig={{ label: 'Address', type: 'text', placeholder: 'Address' }}
        wrpClasses={cx('UserDetailsInputWrp', { UserDetailsInputWrpRaised: props.data.address }).split(' ')}
        value={props.data.address}
      />
      <Input
        changeValue={event => props.setUsersData(event, 'city')}
        wrpClasses={cx('UserDetailsInputWrp', { UserDetailsInputWrpRaised: props.data.city }).split(' ')}
        elementConfig={{ label: 'City', placeholder: 'City' }}
      />
      <Input
        changeValue={event => props.setUsersData(event, 'suburb')}
        wrpClasses={cx('UserDetailsInputWrp', { UserDetailsInputWrpRaised: props.data.suburb }).split(' ')}
        elementConfig={{ label: 'Suburb', placeholder: 'Suburb' }}
      />
      <Input
        changeValue={event => props.setUsersData(event, 'country')}
        wrpClasses={cx('CountryInput UserDetailsInputWrp', { UserDetailsInputWrpRaised: props.data.country }).split(' ')}
        optionalLabels={{ second: 'Please enter a keyword and select' }}
        elementConfig={{ label: 'Country', placeholder: 'Country' }}
      />
      <div className={classes.UploadedImagesWrp}>
        <div className={classes.Label}>Upload photos</div>
        {props.data.photos.map(photo => (
          <div className={classes.UploadedImage}>
            <div className={classes.UploadedImageTitle}>{photo.title}</div>
            <div className={classes.Icon}><Landscape /></div>
          </div>
        ))}
      </div>
      <Button btnClasses={['AddressVerification', 'AddressVerification2']}>
        <div>Is being verified</div>
      </Button>
    </div>
  </div>
);

export default address;

address.propTypes = {
  data: PropTypes.shape({
    address: PropTypes.string,
  }),
};

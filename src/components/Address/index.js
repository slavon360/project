import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import Button from '../UI/Button';
import Input from '../UI/Input';
import FileInput from '../FileInput';
import UploadIcon from '../UI/Icons/Upload';
import classes from './Address.css';

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
      <FileInput
        elementConfig={{
          label: 'Upload photos',
          clickableSentence: 'Add file ',
          sentence: 'or drop files here',
          icon: <UploadIcon
            stylesSvg={{ width: '53px', height: '36px' }}
            stylesChild={{ fill: '#e8e8e8' }}
          />,
        }}
        wrpClasses={['PhotoAddress']}
      />
      <Button btnClasses={['AddressVerification']}>
        <div><a href="/bithela/verification-address-2">Start Verification</a></div>
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

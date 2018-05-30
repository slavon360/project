import React from 'react';
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
        elementConfig={{ label: 'Address' }}
        value={props.data.address}
      />
      <Input
        elementConfig={{ label: 'City' }}
      />
      <Input
        elementConfig={{ label: 'Suburb' }}
      />
      <Input
        wrpClasses={['CountryInput']}
        optionalLabels={{ second: 'Please enter a keyword and select' }}
        elementConfig={{ label: 'Country' }}
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
      <Button btnClasses={['AddressVerification']}>Start Verification</Button>
    </div>
  </div>
);

export default address;

address.propTypes = {
  data: PropTypes.shape({
    address: PropTypes.string,
  }),
};

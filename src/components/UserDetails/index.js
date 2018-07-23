import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Button from '../UI/Button';
import Input from '../UI/Input';
import FileInput from '../FileInput';
import Dropdown from '../UI/Dropdown';
import Checked from '../UI/Icons/Checked';
import UploadIcon from '../UI/Icons/Upload';
import Arrow from '../UI/Arrow';
import ListPicker from '../UI/ListPicker';
import classes from './UserDetails.css';

const userDetails = (props) => {
  global.console.log(props);
  const details = props.userDetails;
  const fileInputConfig = {
    label: 'Upload sertificate photos',
    icon: (<UploadIcon
      stylesSvg={{ width: '53px', height: '36px' }}
      stylesChild={{ fill: '#e8e8e8' }}
    />),
    clickableSentence: 'Add file ',
    sentence: 'or drop files here',
  };
  return (
    <form className={classes.UserDetailsWrp}>
      <h2 className={classes.Title}>User details</h2>
      <div className={classes.InputsContent}>
        <Input
          changeValue={event => props.setUsersData(event, 'firstName')}
          elementConfig={{ label: 'First Name', placeholder: 'First Name', type: 'text' }}
          wrpClasses={cx('UserDetailsInputWrp', { UserDetailsInputWrpRaised: props.userDetails.firstName }).split(' ')}
          value={props.userDetails.firstName}
        />
        <Input
          changeValue={event => props.setUsersData(event, 'lastName')}
          elementConfig={{ label: 'Last Name', placeholder: 'Last Name', type: 'text' }}
          wrpClasses={cx('UserDetailsInputWrp', { UserDetailsInputWrpRaised: props.userDetails.lastName }).split(' ')}
          value={props.userDetails.lastName}
        />
        <p className={classes.GenderTitle}>Gender</p>
        <div className={classes.GenderWrp}>
          <Input
            changeValue={() => props.setUsersGender('male')}
            wrpClasses={['GenderRadioWrp']}
            optionalLabels={{ third: <Checked
              styles={{ width: '12px', height: '10px', fill: '#922c88' }}
            />,
            second: true }}
            elementConfig={{ label: 'Male', type: 'radio', name: 'gender', id: 'male', checked: props.userDetails.gender.male }}
          />
          <Input
            changeValue={() => props.setUsersGender('female')}
            wrpClasses={['GenderRadioWrp']}
            optionalLabels={{ third: <Checked
              styles={{ width: '12px', height: '10px', fill: '#922c88' }}
            />,
            second: true }}
            elementConfig={{ label: 'Female', type: 'radio', name: 'gender', id: 'female', checked: props.userDetails.gender.female }}
          />
        </div>
        <p className={classes.BirthDateTitle}>Date of Birth</p>
        <div className={classes.BirthDateDrpDwnArea}>
          <Dropdown
            elementConfig={{ type: 'button' }}
            drpWrpClasses={['BirthMonthDrpDwnWrp']}
            dropdownButtonClasses={['BirthMonthDrpDwnButton']}
            drpContainerClasses={cx('BirthDrpDwnContainer BirthMonthDrpDwnContainer', { Show: props.dropdowns[0].show, Hide: !props.dropdowns[0].show }).split(' ')}
            dropdownButtons={props.months}
            hideShowDropdown={() => props.hideShowDate('months')}
            hideDropdown={() => props.hideDate('months')}
            setValue={date => props.setUsersBirthDate(date, 'month')}
          >
            {details.birth.month}<span className={classes.Arrow}><Arrow /></span>
          </Dropdown>
          <Dropdown
            elementConfig={{ type: 'button' }}
            drpWrpClasses={['BirthDayDrpDwnWrp']}
            dropdownButtonClasses={['BirthDayDrpDwnButton']}
            drpContainerClasses={cx('BirthDrpDwnContainer BirthDayDrpDwnContainer', { Show: props.dropdowns[2].show, Hide: !props.dropdowns[2].show }).split(' ')}
            dropdownButtons={props.days}
            hideShowDropdown={() => props.hideShowDate('days')}
            hideDropdown={() => props.hideDate('days')}
            setValue={date => props.setUsersBirthDate(date, 'day')}
          >
            {details.birth.day}<span className={classes.Arrow}><Arrow /></span>
          </Dropdown>
          <Dropdown
            elementConfig={{ type: 'button' }}
            drpWrpClasses={['BirthYearDrpDwnWrp']}
            dropdownButtonClasses={['BirthYearDrpDwnButton']}
            drpContainerClasses={cx('BirthDrpDwnContainer BirthYearDrpDwnContainer', { Show: props.dropdowns[1].show, Hide: !props.dropdowns[1].show }).split(' ')}
            dropdownButtons={props.years}
            hideShowDropdown={() => props.hideShowDate('years')}
            hideDropdown={() => props.hideDate('years')}
            setValue={date => props.setUsersBirthDate(date, 'year')}
          >
            {details.birth.year}<span className={classes.Arrow}><Arrow /></span>
          </Dropdown>
        </div>
        <div className={classes.NationalityWrp}>
          <Input
            blurHandler={props.hideNationalityList}
            changeValue={event => props.setUsersNationality(event, 'nationality')}
            wrpClasses={cx('UserDetailsInputWrp NationalityWrp', { UserDetailsInputWrpRaised: props.userDetails.nationality }).split(' ')}
            elementConfig={{ label: 'Nationality', type: 'text', placeholder: 'Nationality' }}
            optionalLabels={{ second: 'Please enter a keyword and select' }}
            value={props.userDetails.nationality}
          />
          <ListPicker
            list={props.relevantList}
            setValue={props.pickNationality}
            wrpClasses={cx('NationalityList', { Show: props.relevantList.length }).split(' ')}
          />
        </div>
        <div className={classes.SertificateWrp}>
          <p className={classes.SertificateTitle}>Type of sertificate</p>
          <Input
            changeValue={() => props.setTypeOfSertificate('idCard')}
            wrpClasses={['SertificateRadioWrp']}
            optionalLabels={{ third: <Checked
              styles={{ width: '12px', height: '10px', fill: '#922c88' }}
            />,
            second: true }}
            elementConfig={{ label: 'ID card', type: 'radio', id: 'idCard', name: 'sertificate', checked: props.userDetails.sertificateType.idCard }}
          />
          <Input
            changeValue={() => props.setTypeOfSertificate('passport')}
            wrpClasses={['SertificateRadioWrp']}
            optionalLabels={{ third: <Checked
              styles={{ width: '12px', height: '10px', fill: '#922c88' }}
            />,
            second: true }}
            elementConfig={{ label: 'Passport', type: 'radio', id: 'passport', name: 'sertificate', checked: props.userDetails.sertificateType.passport }}
          />
          <Input
            changeValue={() => props.setTypeOfSertificate('driveLicense')}
            wrpClasses={['SertificateRadioWrp']}
            optionalLabels={{ third: <Checked
              styles={{ width: '12px', height: '10px', fill: '#922c88' }}
            />,
            second: true }}
            elementConfig={{ label: 'Drive License', type: 'radio', id: 'driveLicense', name: 'sertificate', checked: props.userDetails.sertificateType.driveLicense }}
          />
        </div>
        <Input
          changeValue={event => props.setUsersData(event, 'idNumber')}
          elementConfig={{ label: 'ID Number', type: 'text', placeholder: 'ID Number' }}
          wrpClasses={cx('UserDetailsInputWrp', { UserDetailsInputWrpRaised: props.userDetails.idNumber }).split(' ')}
          value={props.userDetails.idNumber}
        />
        <FileInput
          wrpClasses={['SertificatePhoto']}
          elementConfig={fileInputConfig}
        />
        <Button btnClasses={['UserDetailsVerification']}>
          <div>Start Verification</div>
        </Button>
      </div>
    </form>
  );
};

export default userDetails;

userDetails.propTypes = {
  userDetails: PropTypes.shape({
    birth: PropTypes.object,
  }),
};

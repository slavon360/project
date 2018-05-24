import React from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button';
import Input from '../UI/Input';
import FileInput from '../FileInput';
import Dropdown from '../UI/Dropdown';
import Checked from '../UI/Icons/Checked';
import UploadIcon from '../UI/Icons/Upload';
import ListPicker from '../UI/ListPicker';
import classes from './UserDetails.css';

const userDetails = props => {
    let userDetails = props.userDetails;
    let fileInputConfig = {
                            label: 'Upload sertificate photos',
                            icon: (
                              <UploadIcon
                                stylesSvg={{ width: '53px', height: '36px' }}
                                stylesChild={{ fill: '#e8e8e8' }}
                              />),
                            clickableSentence: 'Add file ',
                            sentence: 'or drop files here',
                          }
    return (
            <form className={classes.UserDetailsWrp}>
              <h2 className={classes.Title}>User details</h2>
              <div className={classes.InputsContent}>
                <Input elementConfig={{ label: 'First Name', type: 'text' }} />
                <Input elementConfig={{ label: 'Last Name', type: 'text' }} />
                <p className={classes.GenderTitle}>Gender</p>
                <div className={classes.GenderWrp}>
                  <Input
                    wrpClasses={['GenderRadioWrp']}
                    optionalLabels={{ third: <Checked
                                                      styles={{ width: '12px', height: '10px', fill: '#922c88' }}
                                                      />  }}
                    elementConfig={{ label: 'Male', type: 'radio', name: 'gender', id: 'male' }} />
                  <Input
                    wrpClasses={['GenderRadioWrp']}
                    optionalLabels={{ third: <Checked
                                                      styles={{ width: '12px', height: '10px', fill: '#922c88' }}
                                                      />  }}
                    elementConfig={{ label: 'Female', type: 'radio', name: 'gender', id: 'female' }} />
                </div>
                <p className={classes.BirthDateTitle}>Date of Birth</p>
                <div className={classes.BirthDateDrpDwnArea}>
                  <Dropdown
                    elementConfig={{type: 'button'}}
                    drpWrpClasses={['BirthMonthDrpDwnWrp']}
                    dropdownButtonClasses={['BirthMonthDrpDwnButton']}
                    drpContainerClasses={['BirthDrpDwnContainer']}
                    dropdownButtons={props.months}
                    >
                    {userDetails.birth.month}
                  </Dropdown>
                  <Dropdown
                    elementConfig={{type: 'button'}}
                    drpWrpClasses={['BirthDayDrpDwnWrp']}
                    dropdownButtonClasses={['BirthDayDrpDwnButton']}
                    drpContainerClasses={['BirthDrpDwnContainer']}
                    dropdownButtons={props.days}
                    >
                    {userDetails.birth.day}
                  </Dropdown>
                  <Dropdown
                    elementConfig={{type: 'button'}}
                    drpWrpClasses={['BirthYearDrpDwnWrp']}
                    dropdownButtonClasses={['BirthYearDrpDwnButton']}
                    drpContainerClasses={['BirthDrpDwnContainer']}
                    dropdownButtons={props.years}
                    >
                    {userDetails.birth.year}
                  </Dropdown>
                </div>
                <div className={classes.NationalityWrp}>
                  <Input
                    wrpClasses={['NationalityWrp']}
                    elementConfig={{ label: 'Nationality', type: 'text' }}
                    optionalLabels={{ second: 'Please enter a keyword and select' }} />
                  <ListPicker />
                </div>
                <div className={classes.SertificateWrp}>
                  <p className={classes.SertificateTitle}>Type of sertificate</p>
                  <Input
                    wrpClasses={['SertificateRadioWrp']}
                    optionalLabels={{ third: <Checked
                                                      styles={{ width: '12px', height: '10px', fill: '#922c88' }}
                                                      />  }}
                    elementConfig={{ label:'ID card', type: 'radio', id: 'idCart', name: 'sertificate' }} />
                  <Input
                    wrpClasses={['SertificateRadioWrp']}
                    optionalLabels={{ third: <Checked
                                                      styles={{ width: '12px', height: '10px', fill: '#922c88' }}
                                                      />  }}
                    elementConfig={{ label:'Passport', type: 'radio', id: 'passport', name: 'sertificate' }} />
                  <Input
                    wrpClasses={['SertificateRadioWrp']}
                    optionalLabels={{ third: <Checked
                                                      styles={{ width: '12px', height: '10px', fill: '#922c88' }}
                                                      />  }}
                    elementConfig={{ label:'Drive License', type: 'radio', id: 'driveLicense', name: 'sertificate' }} />
                </div>
                <Input elementConfig={{ label: 'ID Number', type: 'text' }} />
                <FileInput
                  wrpClasses={['SertificatePhoto']}
                  elementConfig={fileInputConfig} />
                <Button btnClasses={['UserDetailsVerification']} >Start Verification</Button>
              </div>
            </form>
        )
}

export default userDetails;

userDetails.propTypes = {
  userDetails: PropTypes.shape({
    birth: PropTypes.object
  })
}

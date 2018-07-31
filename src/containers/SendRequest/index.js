import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import classNames from 'classnames';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import UploadIcon from '../../components/UI/Icons/Upload';
import FileInput from '../../components/FileInput';
import { objectIntoArray, addObjectName, checkValidity } from '../../shared/utility';
import classes from './SendRequest.css';

class SendRequest extends Component {
  state = {
    clicked: false,
    formIsValid: false,
    successRequest: false,
    requestForm: {
      email: {
        elementType: 'input',
        optionalLabels: {
          second: 'Please enter your email address',
        },
        elementConfig: {
          type: 'email',
          placeholder: 'Your email address *',
          label: 'Your email address *',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        eventHandler: (event, key) => { this.changeValue(event, key); },
      },
      subject: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Subject *',
          label: 'Subject *',
        },
        optionalLabels: {
          second: 'Please enter your subject address',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        eventHandler: (event, key) => { this.changeValue(event, key); },
      },
      description: {
        elementType: 'textarea',
        elementConfig: {
          label: 'Description *',
          placeholder: 'Please enter the details of the request. Our support staff will respond it as soon as possible.',
        },
        optionalLabels: {
          second: 'Please enter your Description',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        eventHandler: (event, key) => { this.changeValue(event, key); },
      },
    },
    fileInput: {
      elementConfig: {
        label: 'Attachments',
        icon: (
          <UploadIcon
            stylesSvg={{ width: '53px', height: '36px' }}
            stylesChild={{ fill: '#e8e8e8' }}
          />
        ),
        clickableSentence: 'Add file ',
        sentence: 'or drop files here',
      },
    },
  };

  changeValue = (event, key) => {
    const updRequestForm = { ...this.state.requestForm };
    const value = event.target.value;
    const validation = updRequestForm[key].validation;
    updRequestForm[key].value = value;
    updRequestForm[key].valid = checkValidity(value, validation);
    let formIsValid = true;
    const keys = Object.keys(updRequestForm);
    keys.forEach((k) => {
      formIsValid = updRequestForm[k].valid && formIsValid;
    });
    this.setState({ requestForm: updRequestForm, formIsValid });
  }

  fileSelectedHandler = () => { }

  submitForm = (event) => {
    event.preventDefault();
    const { formIsValid } = this.state;
    let successRequest = this.state.successRequest;
    const clicked = !formIsValid;
    successRequest = formIsValid && !clicked;
    this.setState({ clicked, successRequest });
  }

  render() {
    let requestFormArr = objectIntoArray(this.state.requestForm, null, addObjectName);
    const { formIsValid, clicked, successRequest } = this.state;
    global.console.log(this.state);
    requestFormArr = requestFormArr.map((itemForm, index) => {
      let content = null;
      const key = itemForm.name;
      const filetype = itemForm.elementConfig.type;
      const optionalLabels = itemForm.optionalLabels ? itemForm.optionalLabels : null;
      content = (
        <Input
          key={index}
          optionalLabels={optionalLabels}
          changeValue={event => itemForm.eventHandler(event, key)}
          elementType={itemForm.elementType}
          wrpClasses={
            classNames('InputRequestWrp', {
              FileInputRequestWrp: filetype === 'file',
              InputRequestWrp: filetype !== 'file',
              InputRequestWrpRaised: itemForm.value,
              InputRequestEmptyFieldError: !itemForm.valid && !formIsValid && clicked,
            }).split(' ')
          }
          elementConfig={itemForm.elementConfig}
        />
      );
      return content;
    });
    const redirectToSuccess = successRequest ? <Redirect to="/bithela/success-request" /> : null;

    return (
      <form
        className={classes.SendRequestWrp}
        onSubmit={this.submitForm}
      >
        {redirectToSuccess}
        <h2 className={classes.Title}>SEND REQUEST</h2>
        <div className={classes.RequestContainer}>
          {requestFormArr}
          <FileInput
            fileSelectedHandler={this.fileSelectedHandler}
            wrpClasses={['FileInputRequestWrp']}
            elementConfig={this.state.fileInput.elementConfig}
          />
          <Button
            btnClasses={['SubmitRequestBtn']}
            elementConfig={{ 'before-content': 'Submit Request' }}
          >
            Submit Request
          </Button>
        </div>
      </form>
    );
  }
}

export default SendRequest;

import React, { Component } from 'react';
import Input from '../../components/UI/Input';
import classes from './SendRequest.css';

class SendRequest extends Component {
    state = {
      requestForm: {
        email: {
          elementType: 'input',
          elementConfig: {
            type: 'email',
            label: 'Your email address *'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        subject: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            label: 'Subject *'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        },
        subject: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            label: 'Description *',
            placeholder: 'Please enter the details of the request. Our support staff will respond it as soon as possible.'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false
        }
      }
    };
    render () {

    }
}

export default SendRequest;

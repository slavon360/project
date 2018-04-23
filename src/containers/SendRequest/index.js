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
            placeholder: 'Your email address *'
          },
          value: '',
          validation: {
            required: true
          }
        }
      }
    };
    render () {

    }
}

export default SendRequest;

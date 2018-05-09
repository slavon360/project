import React, { Component } from 'react';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import UploadIcon from '../../components/UI/Icons/Upload';
import { objectIntoArray } from '../../shared/utility';
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
          },
          valid: false,
          touched: false,
          eventHandler: () => { this.changeValue() }
        },
        subject: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Subject *'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false,
          eventHandler: () => { this.changeValue() }
        },
        description: {
          elementType: 'textarea',
          elementConfig: {
            label: 'Description *',
            placeholder: 'Please enter the details of the request. Our support staff will respond it as soon as possible.'
          },
          value: '',
          validation: {
            required: true
          },
          valid: false,
          touched: false,
          eventHandler: () => { this.changeValue() }
        },
        file: {
          elementType: 'input',
          elementConfig: {
            type: 'file',
            label: 'Attachments'

          }
        }
      }
    };
    changeValue = () => {
      console.log('changeValue');
    }
    fileSelectedHandler = () => {

    }
    render () {
      let requestFormArr = objectIntoArray(this.state.requestForm);
      requestFormArr = requestFormArr.map((itemForm, index) => {
          let content = null;
          let inputWrpClasses = itemForm.elementConfig.type === 'file' ? ['FileInputRequestWrp'] : ['InputRequestWrp'];
            content = <Input
                        key={index}
                        changeValue={itemForm.eventHandler}
                        elementType={itemForm.elementType}
                        wrpClasses={inputWrpClasses}
                        elementConfig={itemForm.elementConfig}
                         />
          return content;
      })
      return(
        <div className={classes.SendRequestWrp}>
          <h2 className={classes.Title}>SEND REQUEST</h2>
          <div className={classes.RequestContainer}>
            {requestFormArr}
            <Button
              btnClasses={['SubmitRequestBtn']}
              elementConfig={{'before-content': 'Submit Request'}}>
              Submit Request
            </Button>
          </div>
        </div>
      )
    }
}

export default SendRequest;

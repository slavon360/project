import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SideBarNav from '../../components/SideBarNav';
import FaqContent from '../../components/FaqContent';
import classes from './FAQ.css';

class Faq extends Component{
    render(){
      return(
        <div className={classes.FaqWrp}>
          <h2 className={classes.Title}>FAQ</h2>
          <div className={classes.FaqContainer}>
            <div className={classes.FaqHead}>
              <div className={classes.HaveQuestion}>Have some question?</div>
              <div className={classes.Submit}>
                <NavLink
                  to={props.link}
                  exact={props.exact}>
                  Submit Request
                </NavLink>
              </div>
            </div>
            <SideBarNav />
            <FaqContent />
          </div>
        </div>
      )
    }
}

export default Faq;

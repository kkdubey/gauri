/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar/Snackbar';

const snackbarStyle = {
  position: 'absolute',
  marginTop: '850px !important',
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleOrganisationChange = this.handleOrganisationChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.state = {
      userName: '',
      userNameErrorText: '',
      password: '',
      passwordErrorText: '',
      name: '',
      phone: '',
      email: '',
      organisation: '',
      nameErrorText: '',
      phoneErrorText: '',
      emailErrorText: '',
      organisationErrorText: '',
      SnackBarOpen: false,
      SnackBarText: '',
    };
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  registerUser = () => {
    if (this.state.name === '') {
      this.setState({ nameErrorText: 'Please enter name' });
    } else if (this.state.organisation === '') {
      this.setState({ organisationErrorText: 'Please enter organisation' });
    } else if (this.state.email === '') {
      this.setState({ emailErrorText: 'Please enter email' });
    } else if (this.state.phone === '') {
      this.setState({ phoneErrorText: 'Please enter phone number' });
    } else {
      const obj = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          crossDomain: true,
        },
        body: JSON.stringify({
          name: this.state.name,
          organisation: this.state.organisation,
          email: this.state.email,
          phone: this.state.phone,
        }),
      };
      let isSuccess = false;
      fetch('/api/contactus/contactusfordemo', obj)
        .then((res) => { // eslint-disable-line
          if (res.status === 200) {
            document.getElementById('loginSuccessmsg').innerText = '';
            isSuccess = true;
          } else {
            document.getElementById('loginSuccessmsg').innerText = res.statusText;
          }

          if (isSuccess) {
            this.setState({ name: '' });
            this.setState({ organisation: '' });
            this.setState({ email: '' });
            this.setState({ phone: '' });
            this.setState({ SnackBarText: 'We will cantact you sortly' });
            this.setState({ SnackBarOpen: true });
          }
        });
    }
  };
  handleUserNameChange = (e) => {
    this.setState({ userName: e.target.value.trim() });
    if (e.target.value.trim() === '') {
      this.setState({ userNameErrorText: 'Please enter user name' });
    } else {
      this.state.userNameErrorText = '';
    }
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value.trim() });
    if (e.target.value.trim() === '') {
      this.state.passwordErrorText = 'Please enter password';
    } else {
      this.state.passwordErrorText = '';
    }
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
    if (e.target.value.trim() === '') {
      this.state.nameErrorText = 'Please enter name';
    } else {
      this.state.nameErrorText = '';
    }
  };

  handleOrganisationChange = (e) => {
    this.setState({ organisation: e.target.value });
    if (e.target.value.trim() === '') {
      this.state.organisationErrorText = 'Please enter organisation';
    } else {
      this.state.organisationErrorText = '';
    }
  };

  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
    if (e.target.value.trim() === '') {
      this.state.emailErrorText = 'Please enter email';
    } else {
      this.state.emailErrorText = '';
    }
  };

  handlePhoneChange = (e) => {
    this.setState({ phone: e.target.value });
    if (e.target.value.trim() === '') {
      this.state.phoneErrorText = 'Please enter phone number';
    } else {
      this.state.phoneErrorText = '';
    }
  };

  handleRequestClose = () => {
    this.setState({
      SnackBarOpen: false,
    });
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.testimonial}>
            <h1 className={s.contactuslabel} >Contact us for any assistance!</h1>
            <div className={s.contactusrow}>
              <div className={s.contactusbox}>
                <div className={s.contactusboxinner}>
                  <div id="loginSuccessmsg"></div>
                  <TextField
                    id="Name" hintText="Name" value={this.state.name}
                    errorText={this.state.nameErrorText}
                    onChange={this.handleNameChange}
                    floatingLabelText="Name" fullWidth
                  />
                  <TextField
                    id="organisation" hintText="organisation" value={this.state.organisation}
                    errorText={this.state.organisationErrorText}
                    onChange={this.handleOrganisationChange}
                    floatingLabelText="Organisation" fullWidth
                  />
                  <TextField
                    id="email" hintText="Email" value={this.state.email}
                    errorText={this.state.emailErrorText}
                    onChange={this.handleEmailChange}
                    floatingLabelText="Email" fullWidth
                  />
                  <TextField
                    id="phone_number" hintText="Phone Number" value={this.state.phone}
                    errorText={this.state.phoneErrorText}
                    onChange={this.handlePhoneChange}
                    floatingLabelText="Phone Number" fullWidth
                  />
                  <RaisedButton label="Submit" onTouchTap={this.registerUser} className={s.submitButton} primary />
                </div>
              </div>
            </div>
          </div>
          <Snackbar
          style={snackbarStyle}
          open={this.state.SnackBarOpen}
          message={this.state.SnackBarText}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default withStyles(s)(Contact);

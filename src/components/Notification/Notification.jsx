import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Message } from 'components/Notification/Notification.styled';

export class Notification extends Component {
  PropTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    return <Message>{this.props.message}</Message>;
  }
}

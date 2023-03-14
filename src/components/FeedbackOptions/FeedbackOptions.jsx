import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Options } from 'components/FeedbackOptions/FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  PropTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <Options>
        <Button onClick={onLeaveFeedback}>{options[0]}</Button>
        <Button onClick={onLeaveFeedback}>{options[1]}</Button>
        <Button onClick={onLeaveFeedback}>{options[2]}</Button>
      </Options>
    );
  }
}

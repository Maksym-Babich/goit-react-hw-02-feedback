import React, { Component } from 'react';
import { Button, Options } from 'components/FeedbackOptions/FeedbackOptions.styled';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <Options>
        <Button OnClick={onLeaveFeedback}>{options[0]}</Button>
        <Button OnClick={onLeaveFeedback}>{options[1]}</Button>
        <Button OnClick={onLeaveFeedback}>{options[2]}</Button>
      </Options>
    );
  }
}

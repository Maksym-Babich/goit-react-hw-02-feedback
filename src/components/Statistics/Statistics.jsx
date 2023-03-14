import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Stats, Stat } from 'components/Statistics/Statistics.styled';

export class Statistics extends Component {
  PropTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Stats>
        {Object.keys(this.props).map((key) => {
          return <Stat key={nanoid()}>{`${key}: ${this.props[key]}`}</Stat>;
        })}
      </Stats>
    );
  }
}

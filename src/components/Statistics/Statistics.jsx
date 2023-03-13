import React, { Component } from 'react';
import { Stats, Stat } from 'components/Statistics/Statistics.styled';

export class Statistics extends Component {
  render() {
    return (
      <Stats>
        {Object.keys(this.props).map((key) => {
          return <Stat key={key}>{`${key}:${this.props[key] ? this.props[key] : 0}`}</Stat>;
        })}
      </Stats>
    );
  }
}

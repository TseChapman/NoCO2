import React, { Component } from 'react';
import '../../index.css';
import LineGraph from './LineGraph';
import AddForm from './AddForm';

export class Dashboard extends Component {
  render() {
    const { uid } = this.props;
    return (
      <div>
        <div class="text-7xl text-black/0 mb-3">
          empty
        </div>
        <div>
          <LineGraph uid={uid} />
          <AddForm uid={uid} />
        </div>
      </div>
    );
  }
}
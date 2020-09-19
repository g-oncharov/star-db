import React, { Component } from 'react';
import Row from '../row';
import { PersonList, PersonDetails, } from '../sw-components';

import './pages.css';

export default class PeoplePage extends Component {

  state = {
    selectedItem: 1
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <Row
        left={<PersonList onItemSelected={this.onItemSelected}/>}
        right={<PersonDetails itemId={selectedItem} />}
      />
    );
  }
}

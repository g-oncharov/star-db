import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorBoundry from '../error-boundry/error-boundry';
import Row from '../row/row';

import './people-page.css';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 11
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>
          {(item) => (
            `${item.name} (${item.birthYear})`
          )}
      </ItemList>
    );

    const personDetails = (
        <PersonDetails personId={this.state.selectedPerson} />
    );
    return (
      <ErrorBoundry>
        <Row left={itemList} right={personDetails} />
      </ErrorBoundry>
    );
  }
}

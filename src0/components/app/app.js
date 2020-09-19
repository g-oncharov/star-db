import React, {Component} from 'react';

import SwapiService from '../../services/swapi-service';
import Row from '../row';
import Header from '../header';
//import RandomPlanet from '../random-planet';
//import PeoplePage from '../people-page';
//import ItemList from '../item-list';
import ItemDetails from '../item-details';
//import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import ErrorBoundry from '../error-boundry';
import './app.css';

export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };


  componentDidCatch() {
    console.log(`componentDidCatch()`);
    this.setState({ hasError: true });
  }
  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    //const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;

    const {getPerson, getPlanet} = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPlanet} />
    );

    const starshipDetails = (
      <ItemDetails
        itemId={2}
        getData={getPlanet} />
    );
    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          <div className="row mb2 button-row">
          </div>
          <Row left={personDetails} right={starshipDetails} />
        </div>
      </ErrorBoundry>
    );
  }
}

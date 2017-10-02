import React from 'react';
import SearchBar from '../containers/searchbar';
import WeatherList from '../containers/weather_list';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

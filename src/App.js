import React from 'react';
import Navigation from './navigation';
import Content from './mainTravelContent';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="main">
      <div className="home-page">
      <Navigation />
      <Content />
      </div>
      </div>
    )
  }
}

export default App;

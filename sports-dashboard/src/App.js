import React, { Component } from 'react';
import './App.css';
import Display from './Display';
import Dashboard from './Dashboard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: 0,
      strikes: 0
    };
  }

  ball = () => {
    if (this.state.balls < 3) {
      this.setState({ balls: this.state.balls + 1 });
    } else {
      this.setState({ balls: 0, strikes: 0 });
    }
  };

  strike = () => {
    if (this.state.strikes < 2) {
      this.setState({ strikes: this.state.strikes + 1 });
    } else {
      this.setState({ balls: 0, strikes: 0 });
    }
  };

  foul = () => {
    if (this.state.strikes < 2) {
      this.setState({ strikes: this.state.strikes + 1 });
    }
  };

  hit = () => {
    this.setState({ balls: 0, strikes: 0 });
  };

  render() {
    return (
      <div className='App'>
        <h1 id='muze'>MUZE SPORTS DASHBOARD</h1>
        <div id='sign'>
          <Display balls={this.state.balls} strikes={this.state.strikes} />
        </div>
        <Dashboard
          ballClick={this.ball.bind(this)}
          strikeClick={this.strike.bind(this)}
          hitClick={this.hit.bind(this)}
          foulClick={this.foul.bind(this)}
        />
      </div>
    );
  }
}

export default App;

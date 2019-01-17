import React, { Component } from 'react';
import NavBar from './components/NavBar';
import DogCard from './components/DogCard';
import dogs from './dogs.json';
import './App.css';
// Randomizes the order of the elements in a given array
const shuffle = require('shuffle-array');

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    dogs,
    subtitle: 'Click an image to begin!',
    score: 0,
    topScore: 0,
    pickArray: []
  };

  handlePick = props => {
    const pick = props.id;

    if (this.state.pickArray.indexOf(pick) === -1) {
      const pickArray = this.state.pickArray;
      pickArray.push(pick);
      this.setState(() => ({ subtitle: 'You Guessed Correctly!' }));
      this.setState(() => ({ pickArray: pickArray }));
      if (this.state.topScore <= this.state.score) {
        this.setState(() => ({ score: this.state.score + 1 }));
        this.setState({ topScore: this.state.topScore + 1 });
      } else {
        this.setState(() => ({ score: this.state.score + 1 }));
      }
    } else {
      this.setState({ score: 0 });
      this.setState({ subtitle: 'You Guessed Wrong!' });
      this.setState(() => ({ pickArray: [] }));
    }
  };

  render() {
    return (
      <div>
        <NavBar
          subtitle={this.state.subtitle}
          score={this.state.score}
          topScore={this.state.topScore}
        />

        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Clicky Game!</h1>
            <h2>
              Click on an image to earn points, but don't click on any more than
              once!
            </h2>
          </header>
          <div className="container">
            {shuffle(
              this.state.dogs.map(dog => (
                <DogCard
                  key={dog.id}
                  id={dog.id}
                  handlePick={this.handlePick}
                  name={dog.name}
                  image={dog.image}
                  subtitle={this.state.subtitle}
                  score={this.state.score}
                  topScore={this.state.topScore}
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

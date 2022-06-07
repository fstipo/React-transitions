import React from 'react';
import './App.css';
import GetPokemon from './components/GetPokemon';

const App = () => {
  return (
    <div className="App  my-3">
      <h1 className="display-3">Pokedex memory game</h1>
      <p>
        Test your Poke-memory by guessing which Pokemon is next — before it
        appears.
      </p>
      <GetPokemon />
    </div>
  );
};

export default App;

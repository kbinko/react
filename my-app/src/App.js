import './App.css';
import React from 'react';
import Item from './Item.js';

class StarWars extends React.Component {
  render() {
    return (
      <div>
        <h1>Star Wars</h1>
        <p>These are the Star Wars movies:</p>
        <ul>
          <li>A New Hope</li>
          <li>The Empire Strikes Back</li>
          <li>Return of the Jedi</li>
          <li>The Phantom Menace</li>
          <li>Attack of the Clones</li>
          <li>Revenge of the Sith</li>
          <li>The Force Awakens</li>
        </ul>
      </div>
    );
  }
}


  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Item name="Gully" />
        <Item name="Konrad" />
        <Item name="Dupa" />
        <StarWars />
       
      </header>
    </div>
  );
}

export default App;

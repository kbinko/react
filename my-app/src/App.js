import './App.css';
import React from 'react';
// import Item from './Item.js';



class FilmItemRow extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.url} target="_blank" rel="noreferrer">
          {this.props.url}
        </a>
      </li>
    );
  }
}


class StarWars extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "",
      height: "",
      homeworld: "",
      films: [],
      loadedCharacter: false,
    };
  }

  getNewCharacter() {
    let randomNumber = Math.floor(Math.random() * 82) + 1;
    const url = `https://swapi.dev/api/people/${randomNumber}/`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: data.name,
          height: data.height,
          loadedCharacter: true,
          homeworld: data.homeworld,
          films: data.films,
        });
      });
    };
  
    
  render() {

    const movies = this.state.films.map((url, i) => {
      return <FilmItemRow key={i} url={url} />
    });
    

    return (
      <div>
        {
          this.state.loadedCharacter ? (
            <div>
              <h1>Name: {this.state.name} </h1>
              <p>Height: {this.state.height} cm</p>
              <p><a href={this.state.homeworld} target="_blank" rel="noreferrer">
                  Homeworld
                </a></p>
              <ul>
                {movies}
              </ul>
            </div>
          ) : (
              <div>
                <h1>Click the button to load a character</h1>
              </div>
            )
        }
        <button
          type="button"
          onClick={() => this.getNewCharacter()}
          class="btn">
          Randomize character
        </button>
      </div>
    );
  }
}




  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Item name="Gully" />
        <Item name="Konrad" />
        <Item name="Dupa" />
        <Item name="Kupa" />
        <Item name="Kupa" /> */}
        <StarWars />
       
      </header>
    </div>
  );
}

export default App;

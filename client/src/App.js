import React from "react";
import "./App.css";
import axios from "axios";
import PlayerCard from "./Components/PlayerCard";
import Navbar from "./Components/NavBar";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        this.setState({
          players: response.data
        });
        console.log("ApI data", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          PLAYERS
          <Navbar />
          <PlayerCard playerData={this.state.players} />
        </header>
      </div>
    );
  }
}

export default App;

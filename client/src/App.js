import React from "react";
import PlayerCard from "./Components/PlayerCard";
import "./App.css";

class App extends React.Component() {
constructor(){
  super();
  this.state = {
    players: []
  }
};

componentDidMount() {
axios
.get('http://localhost:5000/api/players')
.then(response => {
this.setState({
  players: response.data
})
console.log("ApI data", response.data)
})
.catch(error => {
  console.log(error)
})
}

  return (
    <div className="App">
      <header className="App-header"></header>
      <PlayerCard />
    </div>
  );
}

export default App;

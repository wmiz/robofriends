import React, { Component } from "react";
import CardList from "../components/CardList";
import { robots } from "../robots";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
      res.json().then((users) => {
        this.setState({ robots: users });
      });
    });
  }
  onSearchChange = (event) => {
    const filteredRobots = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    this.setState({ robots: filteredRobots });
  };
  render() {
    return !this.state.robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={this.state.robots} />
        </Scroll>
      </div>
    );
  }
}

export default App;

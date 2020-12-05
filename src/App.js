import { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import styles from "./App.module.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchQuery: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((monsters) => {
        this.setState({ monsters });
      });
  }

  handleSearchQueryChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  render() {
    const { monsters, searchQuery } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    );

    return (
      <div className={styles.App}>
        <h1 className={styles.title}>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters..."
          handleChange={this.handleSearchQueryChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

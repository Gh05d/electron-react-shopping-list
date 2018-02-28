import React, { Component } from "react";
import List from "./List";

const { ipcRenderer } = window.require("electron");
let id = 0;

class App extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    ipcRenderer.on("item:add", this.addItem);
    ipcRenderer.on("items:clear", () => this.setState({ items: [] }));
  }

  componentWillUnmount() {
    ipcRenderer.removeListener("item:add", this.addItem);
    ipcRenderer.on("items:clear");
  }

  addItem = (e, item) => {
    this.setState(prevState => ({
      items: [...prevState.items, { id, name: item }]
    }));
    id++;
  };

  removeItem = id => {
    const newItems = this.state.items.filter(item => item.id != id);
    this.setState({ items: newItems });
  };

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a className="brand-logo center">Super Duper Shopping List</a>
          </div>
        </nav>

        <ul className={this.state.items.length > 0 ? "collection" : ""}>
          <List items={this.state.items} deleteItem={this.removeItem} />
        </ul>
      </div>
    );
  }
}

export default App;

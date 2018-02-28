import React, { Component } from "react";
// Needed so that Webpack ignores the require and electron gets loaded from the
// right source
const { ipcRenderer } = window.require("electron");

export default class AddWindow extends Component {
  state = {
    value: ""
  };

  handleChange = ({ target: { value } }) => this.setState({ value });

  handleSubmit = e => {
    e.preventDefault();
    ipcRenderer.send("item:add", this.state.value);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={e => this.handleSubmit(e)}>
          <div>
            <label>Enter Item</label>
            <input
              placeholder="Milk"
              type="text"
              value={this.state.value}
              autoFocus
              onChange={this.handleChange}
            />
          </div>
          <button className="btn waves-effect waves-light" type="submit">
            Add Item
          </button>
        </form>
      </div>
    );
  }
}

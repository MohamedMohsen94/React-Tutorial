import React, { Component } from "react";
// import Radium from "radium";
import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] Rendering....");
    return (
      <div className={classes.Person}>
        <button onClick={this.props.onClick} className={classes.Person}>
          Delete
        </button>
        <h1>
          Hello {this.props.name} i'm {this.props.age}
        </h1>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;

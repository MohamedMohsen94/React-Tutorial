// import React, { useState } from "react";
import React, { Component } from "react";
// import Radium, { StyleRoot } from "radium"; // Radium for media Queries and sudo selectors like hovering
import classes from "./App.css";
// import Person from "../components/persons/Person/Person";
// import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Persons from "../components/persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  // const App = (props) => {
  // const [personState, setPersonState] = useState({
  //   persons: [
  //     { name: "Mohamed", age: "28" },
  //     { name: "Mahmoud", age: "25" },
  //     { name: "Omar", age: "23" },
  //   ],
  //   // otherState: "this is something",
  // });

  // const [otherState, setOtherState] = useState("this is something");

  // const switchNameHandler = () => {
  //   //console.log("Was clicked");
  //   // react wouldnt recognize  this.state.persons[0].name = "Maxi";
  //   setPersonState({
  //     persons: [
  //       { name: "Wa2l", age: "28" },
  //       { name: "Mahmoud", age: "25" },
  //       { name: "Omar", age: "30" },
  //     ],
  //     // otherState: personState.otherState,
  //   });
  // };
  // console.log(personState, otherState);

  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }

  state = {
    persons: [
      { id: "qeqwdas123", name: "Mohamed", age: "28" },
      { id: "asdwe2", name: "Mahmoud", age: "25" },
      { id: "sdge2", name: "Omar", age: "23" },
      { id: "asdg4", name: "Samy", age: "22" },
      { id: "agg43s", name: "Osaam", age: "22" },
      { id: "asdwgtb", name: "ahmed", age: "22" },
    ],
    otherStuff: "this is something",
    showPersons: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  switchNameHandler = (newName) => {
    // console.log("Was clicked");
    //react wouldnt recognize  this.state.persons[0].name = "Maxi";

    this.setState({
      persons: [
        { id: "qeqwdas123", name: newName, age: "28" },
        { id: "asdwe2", name: "Mahmoud", age: "25" },
        { id: "sdge2", name: "Omar", age: "30" },
      ],
    });
  };

  nameChangeHandler = (event, id) => {
    // console.log(event);
    let personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    let person = { ...this.state.persons[personIndex] };
    // let person = Object.assign({},this.state.persons[personIndex]);
    person.name = event.target.value;
    let persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    // let persons = [...this.state.persons];
    let persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    let doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  componentDidMount() {
    console.log("[App.js] ComponentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] ComponentDidUpdate");
  }

  render() {
    // let style = {
    //   backgroundColor: "green",
    //   color: "black",
    //   margin: "10px",
    //   font: "inherit",
    //   border: "1px solid black",
    //   borderRadius: "15px",
    //   padding: "8px",
    //   cursor: "pointer",
    //   // ":hover": {
    //   //   backgroundColor: "lightgreen",
    //   //   color: "black",
    //   // },
    // };
    console.log("[App.js] render");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            deletePersonHandler={this.deletePersonHandler}
            nameChangeHandler={this.nameChangeHandler}
          ></Persons>
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          switchNameHandler={this.switchNameHandler}
          togglePersonsHandler={this.togglePersonsHandler}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
        ></Cockpit>
        {persons}
      </div>
    );
  }
}
export default App;
// export default Radium(App);

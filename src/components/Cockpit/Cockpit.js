import React from "react";
import Classes from "./Cockpit.css";

const Cockpit = (props) => {
  let assignedclasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = Classes.red;
  }
  if (props.persons.length <= 2) {
    assignedclasses.push(Classes.red);
  }
  if (props.persons.length <= 1) {
    assignedclasses.push(Classes.bold);
  }

  return (
    <div className={Classes.Cockpit}>
      <h1>Hello this is A react App</h1>
      <p className={assignedclasses.join(" ")}>is this working </p>
      <button
        className={btnClass}
        key={"key_1"}
        onClick={() => props.switchNameHandler("Maxi")}
      >
        Switching Name
      </button>
      <button
        className={btnClass}
        key={"key_2"}
        onClick={props.togglePersonsHandler}
      >
        TogglePerson
      </button>
    </div>
  );
};

export default Cockpit;

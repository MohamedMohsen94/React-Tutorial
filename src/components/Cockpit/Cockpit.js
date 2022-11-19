import React, { useEffect, useRef } from "react";
import Classes from "./Cockpit.css";
import authContext from "../../context/auth-context";

const Cockpit = (props) => {
  let btnRef = React.useRef(null);

  useEffect(() => {
    console.log("[CockPit useEffect]");
    //http request...
    // const timer = setTimeout(() => {
    //   alert("saved Data to the cloud");
    // }, 1000);
    btnRef.current.click();
    return () => {
      // clearTimeout(timer);
      console.log("[CockPit cleanup work in useEffect]");
    };
  }, []);
  // }, [props.persons]);
  useEffect(() => {
    console.log("[CockPit 2useEffect]");
    return () => {
      console.log("[CockPit cleanup work in 2useEffect]");
    };
  });

  let assignedclasses = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = Classes.red;
  }
  if (props.personsLength <= 2) {
    assignedclasses.push(Classes.red);
  }
  if (props.personsLength <= 1) {
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
        ref={btnRef}
        className={btnClass}
        key={"key_2"}
        onClick={props.togglePersonsHandler}
      >
        TogglePerson
      </button>
      <button onClick={props.login}>Login First</button>
    </div>
  );
};

export default React.memo(Cockpit);

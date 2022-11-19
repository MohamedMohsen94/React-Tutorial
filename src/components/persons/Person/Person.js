import React, { Component, Fragment } from "react";
// import Radium from "radium";
import classes from "./Person.css";
import Aux from "./../../../hoc/Auxiliary";
import withClass from "./../../../hoc/withClass";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    // console.log(this.inputElementRef);
    this.inputElementRef.current.focus();
  }
  render() {
    console.log("[Person.js] Rendering....");
    return (
      // <Fragment>
      //      <JSX>
      // </Fragment>
      // <Aux>
      // JSX
      // </Aux>
      // <React.Fragment>
      //JSX
      // </React.Fragment>
      //  <withClass classes={classes.person}>
      //   (JSX)
      //  </withClass>
      <div className={classes.Person}>
        {this.props.isAuth ? <p>authenticated!!!</p> : <p>Please Login</p>}
        <button onClick={this.props.onClick} className={classes.Person}>
          Delete
        </button>
        <h1>
          Hello {this.props.name} i'm {this.props.age}
        </h1>
        <p>{this.props.children}</p>
        <input
          type="text"
          // ref={(inputEle) => {
          //   this.inputElement = inputEle;
          // }}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;

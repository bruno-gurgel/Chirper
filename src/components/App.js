import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";

function App(props) {
  const { dispatch } = props;

  useEffect(() => {
    console.log("in the app useEffect()");
    dispatch(handleInitialData());
  }, [dispatch]);
  return <div>{props.loading === true ? null : <Dashboard />}</div>;
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);

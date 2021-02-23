import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";

function App(props) {
  const { dispatch } = props;

  useEffect(() => {
    console.log("in the app useEffect()");
    dispatch(handleInitialData());
  }, [dispatch]);
  return <div>Starter Code</div>;
}

export default connect()(App);

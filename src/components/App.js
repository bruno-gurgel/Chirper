import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";

function App(props) {
  const { dispatch } = props;

  useEffect(() => {
    console.log("in the app useEffect()");
    dispatch(handleInitialData());
  }, [dispatch]);
  return (
    <div>
      <LoadingBar />
      {props.loading === true ? null : (
        <TweetPage match={{ params: { id: "8xf0y6ziyjabvozdd253nd" } }} />
      )}
    </div>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);

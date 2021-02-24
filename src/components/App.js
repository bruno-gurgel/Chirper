import React, { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import Nav from "./Nav";
import { Route } from "react-router-dom";

function App(props) {
  const { dispatch } = props;

  useEffect(() => {
    console.log("in the app useEffect()");
    dispatch(handleInitialData());
  }, [dispatch]);
  return (
    <div>
      <LoadingBar />
      <div className="container">
        <Nav />
        {props.loading === true ? null : (
          <div>
            <Route path="/" exact component={Dashboard} />
            <Route path="/tweet/:id" component={TweetPage} />
            <Route path="/new" component={NewTweet} />
          </div>
        )}
      </div>
    </div>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);

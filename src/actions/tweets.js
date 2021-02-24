import { hideLoading, showLoading } from "react-redux-loading";
import { saveLikeToggle, saveTweet } from "../utils/api";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET = "ADD_TWEET";

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
}

function toggleTweet({ id, authedUser, hasLiked }) {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked,
  };
}

function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet,
  };
}

export function handleLikedTweet(info) {
  return (dispatch) => {
    dispatch(toggleTweet(info));

    return saveLikeToggle(info).catch((error) => {
      console.warn("Error in handleToggleTweet: ", error);

      dispatch(toggleTweet(info));
      alert("There was an error liking the tweet. Try again.");
    });
  };
}

export function handleNewTweet(text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveTweet({ text, replyingTo, author: authedUser })
      .then((tweet) => dispatch(addTweet(tweet)))
      .then(() => dispatch(hideLoading()));
  };
}

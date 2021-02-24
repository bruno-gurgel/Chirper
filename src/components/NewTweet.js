import React, { useState } from "react";
import { connect } from "react-redux";
import { handleNewTweet } from "../actions/tweets";

function NewTweet(props) {
  const [text, updateText] = useState("");
  const tweetLeft = 280 - text.length;

  const handleChange = (event) => {
    const newText = event.target.value;

    updateText(newText);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { dispatch, id } = props;
    dispatch(handleNewTweet(text, id));

    updateText("");
  };

  /* todo: Redirect to / if submitted*/

  return (
    <div>
      <h3 className="center">Compose new Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        <textarea
          placeholder="What's happening?"
          value={text}
          onChange={handleChange}
          className="textarea"
          maxLength={280}
        />
        {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
        <button className="btn" type="submit" disabled={text === ""}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default connect()(NewTweet);

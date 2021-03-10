import React, { useState } from 'react';

const CreateTweet = ({tweets, setTweets, textInput, setTextInput}) => {
    // functions
    const userInputHandler = (e) => {
        setTextInput(e.target.value);
    };

    const submitTweetHandler = (e) => {
        e.preventDefault();
        setTweets([...tweets, textInput]);
        // spread operator to keep previous informations followed by a comma that appends whatever value is
        setTextInput('');
    };

    return (
        <form onSubmit={submitTweetHandler}>
            <textarea value={textInput} onChange={userInputHandler} cols="50" rows="5"></textarea>
            <button>Submit</button>
            {/* <h1 onClick={() => setTextInput('')}>{textInput}</h1> */}
        </form>
    );
};

export default CreateTweet;
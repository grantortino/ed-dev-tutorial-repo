import React from 'react';

const Tweet = ({ name, tweet, setTweets, tweets }) => {

    const deleteTweet = () => {
        console.log(tweet);
        setTweets(tweets.filter((t) => t !== tweet));
    };

    return (
        <div className="tweet">
            <h2>Name: {name} </h2>
            <h3>message: {tweet}</h3>
            <button onClick={deleteTweet}>Delete</button>
            <button>Like</button>
        </div>
    );
};

export default Tweet;
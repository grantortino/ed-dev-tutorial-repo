import React from 'react';
import Tweet from './Tweet';

const TweetList = ({ name, tweets, setTweets }) => {

    return (
        <div className="tweet-list">
            {tweets.map((tweet) => <Tweet name={name} setTweets={setTweets} tweet={tweet} tweets={tweets}/>)}
            {/* <Tweet name={name} /> */}
            {/* <Tweet name={name} message={message}/> */}
            {/* <Tweet name={name} message={message}/> */}
            {/* <button onClick={() => setName('John') }>CLICK</button> */}
        </div>
    );
};

export default TweetList;
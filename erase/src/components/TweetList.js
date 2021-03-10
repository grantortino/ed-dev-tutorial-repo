import React from 'react';
import Tweet from './Tweet';

const TweetList = ({ name, message }) => {

    return (
        <div className="tweet-list">
            <Tweet name={name} message={message}/>
            <Tweet name={name} message={message}/>
            <Tweet name={name} message={message}/>
            {/* <button onClick={() => setName('John') }>CLICK</button> */}
        </div>
    );
};

export default TweetList;
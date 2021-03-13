import React from 'react';
import styled from 'styled-components';

const Tweet = ({ name, tweet, setTweets, tweets }) => {

    const deleteTweet = () => {
        setTweets(tweets.filter((state) => state.id !== tweet.id));
    };

    return (
        <TweetStyle>
            <H2Crazy>Name: {name} </H2Crazy>
            <h3>message: {tweet.message}</h3>
            <button onClick={deleteTweet}>Delete</button>
            <button>Like</button>
        </TweetStyle>
    );
};

const TweetStyle = styled.div`
    border: 4px solid green;
    border-radius: 5px;
    width: 30%;
    background-color: red;
`;

const H2Crazy = styled.h2`
    color: blue;
    font-size: 50px;
`;

export default Tweet;
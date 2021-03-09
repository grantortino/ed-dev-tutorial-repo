import React from 'react';
// import components
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet';

function App() {
// here is to write normal JS
  const name = "Ed Dev";
  const message = "this is the actual tweet";

  return (
    <div>
      <div className="text">
        <h1>HELLO</h1>
        <CreateTweet />
        <TweetList name={name} message={message} />
      </div>
    </div>
  );
}

export default App;

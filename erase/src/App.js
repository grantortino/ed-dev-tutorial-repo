// import state
import React, { useState } from 'react';

// import components
import TweetList from './components/TweetList';
import CreateTweet from './components/CreateTweet';

function App() {
// // here is to write normal JS
//   const [name, setName] = useState('Dev ED');
// // create functions
//   const sayHelloHandler = () => {
//     setName('Florin Pop');
//   };
  
  // State
  const [name, setName] = useState("Nicolò");
  const message = 'Nemo me impune lacessit';
  const [textInput, setTextInput] = useState('');
  const [tweets, setTweets] = useState([]);

  return (
    <div>
      <div className="text">
        {/* <h1>HELLO</h1> */}
        <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets} />
        <TweetList name={name} tweets={tweets} setTweets={setTweets} />
        {/* <h1>Hello {name}</h1> */}
        {/* <button onClick={sayHelloHandler}>Click</button> */}
      </div>
    </div>
  );
};

export default App;

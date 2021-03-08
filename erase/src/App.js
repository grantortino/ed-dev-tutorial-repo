import "./App.css";

function App() {

  const items = [1, 2, 3, 4, 5];

  const number = 5;

  items.map((item) => {
    console.log(item);
  })

  return (
    <div>
      <div className="text">
        <h1>HELLO</h1>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;

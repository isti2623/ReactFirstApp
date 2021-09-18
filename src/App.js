import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  return (
    <div>
      <Counter></Counter>
      <LoadData></LoadData>
    </div>
  );
}

function LoadData() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      {
        users.map(user => <Para title={user.title} body={user.body}></Para>)
      }
    </div>
  );
}

function Para(props) {
  return (
    <div className="para">
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  );
}





function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  return (
    <div className="counter">
      <h1>Count: {count} </h1>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
    </div>
  );
}


export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  let items=['Item 1','Item 2','Item 3','Item 4','Item 5'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello</p>
        <ul>
     {items.map((item,index)=>{
         return <li key={index}>{item}</li>
     })}
 </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

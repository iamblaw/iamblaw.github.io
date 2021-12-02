import logo from './bryant.jpg';
import './App.css';
import './Navbar';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          My name is Bryant and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/iamblaw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;

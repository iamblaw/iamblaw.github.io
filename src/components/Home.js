import pepe from '../pepe.gif';

const Home = () => {

  return (
    <div>
        <header className="App-header">
            <img src={pepe} className="App-logo" alt="logo" />
            <h1>
            Bryant Law
            </h1>
            <p>
            {/* Edit <code>src/App.js</code> and save to reload. */}
            When CMP 464 was the best class at Lehman College
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
 
export default Home;

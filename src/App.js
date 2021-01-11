import './App.css';
import { Search } from './Search'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h2><a href="https://github.com/stephbc/omdbchallenge">stephbc</a>'s OMDB CHALLENGE</h2>
        <h3>NOMINATE YOUR FAVORITE FILMS</h3>
        <Search />
      </div>
      <footer>by Stephanie Chiang 2021</footer>
    </div>
  );
}

export default App;

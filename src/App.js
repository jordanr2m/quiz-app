import './App.css';
import Menu from './components/Menu';
import {useState} from 'react';

// Possible game stages: ['menu', 'playing', 'finished']
function App() {
  // Create state to store which stage of the app you are in
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {/* Conditionally render menu if state is equal to menu. 
      This is saying, if state = menu, then render Menu */}
      {gameState === 'menu' && <Menu />}
      
    </div>
  );
}

export default App;

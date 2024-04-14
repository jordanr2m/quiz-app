import './App.css';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import { useState } from 'react';
import { GameStateContext } from './helpers/Contexts';

// Possible game stages: ['menu', 'playing', 'finished']
function App() {
  // Create global state to store which stage of the app you are in. Initializes as the Menu
  const [gameState, setGameState] = useState("menu");

  // Create global state to store username
  const [userName, setUserName] = useState("");

  // Create global state to store score
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Do You Know Your Stars & Stripes?</h1>
    {/* Wrap every component you want to have access to the global states with the tag.Provider & say which state(s) you want to make global using value. Now, any changes made to these states will appear in every component that is inside of the Provider AKA every other app component we have */}
      <GameStateContext.Provider value={{gameState, setGameState, userName, setUserName, score, setScore}}>
        {/* Conditionally render menu if state is equal to menu. 
        This is saying, if state = menu, then render Menu */}
        {gameState === 'menu' && <Menu />}
        {/* {userName} - Test that its working */}
        {gameState === 'playing' && <Quiz />}
        {gameState === 'finished' && <EndScreen />}
      </GameStateContext.Provider>
      
      
    </div>
  );
}

export default App;

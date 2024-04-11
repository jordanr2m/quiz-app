import './App.css';
import Menu from './components/Menu';
import {useState} from 'react';
import {GameStateContext} from './helpers/Contexts';

// Possible game stages: ['menu', 'playing', 'finished']
function App() {
  // Create global state to store which stage of the app you are in
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
      <h1>Quiz App</h1>
    {/* Wrap every component you want to have access to the state with the tag.provider & say which state you want to make global using value. Now, any changes made to this state will appear in every component, even those outside of Menu */}
      <GameStateContext.Provider value={{gameState, setGameState}}>
        {/* Conditionally render menu if state is equal to menu. 
        This is saying, if state = menu, then render Menu */}
        {gameState === 'menu' && <Menu />}
      </GameStateContext.Provider>
      
      
    </div>
  );
}

export default App;

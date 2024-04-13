import './App.css';
import Menu from './components/Menu';
import Quiz from './components/Quiz';
import { useState } from 'react';
import { GameStateContext } from './helpers/Contexts';

// Possible game stages: ['menu', 'playing', 'finished']
function App() {
  // Create global state to store which stage of the app you are in
  const [gameState, setGameState] = useState("menu");

  // Create state to store username
  const [userName, setUserName] = useState("");

  return (
    <div className="App">
      <h1>Do You Know Your Stars & Stripes?</h1>
    {/* Wrap every component you want to have access to the state with the tag.Provider & say which state(s) you want to make global using value. Now, any changes made to this state will appear in every component that is inside of the Provider}
    {/* We can include userName & setUserName in the value as well. Now, we can also access these from whatever components are inside of the provider */}
      <GameStateContext.Provider value={{gameState, setGameState, userName, setUserName}}>
        {/* Conditionally render menu if state is equal to menu. 
        This is saying, if state = menu, then render Menu */}
        {gameState === 'menu' && <Menu />}
        {/* {userName} - Test that its working */}
        {gameState === 'playing' && <Quiz />}
      </GameStateContext.Provider>
      
      
    </div>
  );
}

export default App;

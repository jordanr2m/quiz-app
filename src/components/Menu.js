import "../App.css";
// import useContent hook
import { useContext } from "react";
// import game context
import {GameStateContext} from '../helpers/Contexts';

function Menu() {
    // get an instance of the context. This is all we need to do to have full access to these 2 values
    const {gameState, setGameState} = useContext(GameStateContext);

    return (
        <div className="Menu">
            <label for="name">Enter your name:</label>
            <input id="name" type="text" placeholder="Name"/>
            {/* Change game state once they click the start button */}
            <button onClick={() => {setGameState("playing")}}>Start Quiz</button>
        </div>
    )
}

export default Menu;
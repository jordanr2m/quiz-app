import "../App.css";
// import useContent hook
import { useContext } from "react";
// import game context
import {GameStateContext} from '../helpers/Contexts';

function Menu() {
    // get an instance of the context. This is all we need to do to have full access to these 2 values. Added 2 more (userName & setUserName). Now has access to all 4
    const {gameState, setGameState, userName, setUserName} = useContext(GameStateContext);

    return (
        <div className="Menu">
            <label for="name">Enter your name:</label>
            {/* Set whatever they type here to userName */}
            <input id="name" type="text" placeholder="Name" autocomplete="off" onChange={(e) => setUserName(e.target.value)} />
            {/* Change game state once they click the start button */}
            <button onClick={() => {setGameState("playing")}}>Start Quiz</button>
        </div>
    )
}

export default Menu;
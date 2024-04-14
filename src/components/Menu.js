import "../App.css";
// import useContent hook
import { useContext } from "react";
// import game context in order to have access to global variables
import {GameStateContext} from '../helpers/Contexts';

function Menu() {
    // get an instance of the context. This is all we need to do in order to have full access to these values
    const {setGameState, setUserName} = useContext(GameStateContext);

    return ( 
        <div className="Menu">
            <label htmlFor="name">Enter your name:</label>
            {/* Set whatever they type here to userName */}
            <input 
                id="name" 
                type="text" 
                placeholder="Name" 
                autoComplete="off" 
                onChange={(e) => setUserName(e.target.value)} 
                onKeyDown={(e) => {
                if (e.key === "Enter") {
                    setGameState("playing")
                }}}
            />
            {/* Change game state once they click the start button */}
            <button onClick={() => {setGameState("playing")}}>Start Quiz</button>
        </div>
    )
}

export default Menu;
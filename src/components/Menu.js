import "../App.css";

function Menu() {

    return (
        <div className="Menu">
            <label for="name">Enter your name:</label>
            <input id="name" type="text" placeholder="Name"/>
            <button>Start Quiz</button>
        </div>
    )
}

export default Menu;
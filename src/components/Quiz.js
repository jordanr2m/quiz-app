import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState } from "react";

function Quiz() {
    // A state to represent which question we are currently on. It will take a number & 0 is the default (for the first question)
    const [currentQuestion, setCurrentQuestion] = useState(0);

    // A state to represent whichever answer we chose. Use a string
    const [optionChosen, setOptionChosen] = useState("");

    // Function we call each time an option is chosen. Set optionChosen equal to whatever option is passed in
    const chooseOption = (option) => {
        setOptionChosen(option);
    }

    return (
        <div className="Quiz">
            {/* Target question's prompt property */}
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div className="questions">
                {/* Create an onClick event for each button to keep track of which option they chose */}
                <button onClick={() => {chooseOption("optionA")}}>{Questions[currentQuestion].optionA}</button>
                <button onClick={() => {chooseOption("optionB")}}>{Questions[currentQuestion].optionB}</button>
                <button onClick={() => {chooseOption("optionC")}}>{Questions[currentQuestion].optionC}</button>
                <button onClick={() => {chooseOption("optionD")}}>{Questions[currentQuestion].optionD}</button>
            </div>
            {/* {optionChosen} - Test that it shows the option chosen */}
        </div>
    )
}

export default Quiz;
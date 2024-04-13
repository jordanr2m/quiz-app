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

    // Function to select choice & move onto next question
    const nextQuestion = () => {
        // Compare to see if the answer was correct
        if (Questions[currentQuestion].answer === optionChosen) {
            console.log("Correct");
        } else {
            console.log("Incorrect");
        }

        // Increment value of currentQuestion by 1
        setCurrentQuestion(currentQuestion + 1)
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
            <button onClick={nextQuestion}>Next Question</button>
        </div>
    )
}

export default Quiz;
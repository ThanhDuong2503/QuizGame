import React, {useState, useEffect} from 'react';
import FlashCardList from "./FlashCardList";
import "./App.css";

function App() {

    const [flashCards, setFlashCards] = useState(SampleFlashCards);

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10")
            .then(response => response.json())
            .then(data => setFlashCards(data.results.map((questionItem, index) => {
                const answer = decodeString(questionItem.correct_answer);
                const options = [
                    ...questionItem.incorrect_answers.map(incorrectAnswers => decodeString(incorrectAnswers)),
                    answer
                ]
                return {
                    id: `${index}-${Date.now()}`,
                    question: decodeString(questionItem.question),
                    answer: answer,
                    options: options.sort(() => Math.random() - 0.5)
                }
            })))
    }, [])

    // decode signs in Questions and Answers for better readability
    function decodeString(string) {
        const textArea = document.createElement("textarea");
        textArea.innerHTML = string;
        return textArea.value;
    }

    return (
        <div className="container">
            <FlashCardList flashcards={flashCards}/>
        </div>
    );
}

const SampleFlashCards = [
    {
        id: 1,
        question: "2+2?",
        answer: "4",
        options: [
            "2",
            "3",
            "4",
            "5"
        ]
    },
    {
        id: 2,
        question: "3+3?",
        answer: "6",
        options: [
            "6",
            "3",
            "4",
            "5"
        ]
    },
    {
        id: 3,
        question: "4+4?",
        answer: "8",
        options: [
            "8",
            "3",
            "4",
            "5"
        ]
    },
]

export default App;

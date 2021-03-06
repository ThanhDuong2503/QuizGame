import React, {useState, useEffect, useRef} from 'react';
import FlashCardList from "./FlashCardList";
import "./App.css";

function App() {

    const [flashCards, setFlashCards] = useState([]);
    const [categories, setCategories] = useState([]);

    const categoryEl = useRef();
    const amountEl = useRef();

    // select a category
    useEffect(() => {
        fetch("https://opentdb.com/api_category.php")
            .then(response => response.json())
            .then(data => setCategories(data.trivia_categories))
    }, [])

    // decode signs in Questions and Answers for better readability
    function decodeString(string) {
        const textArea = document.createElement("textarea");
        textArea.innerHTML = string;
        return textArea.value;
    }

    function handleSubmit(event) {
        event.preventDefault();
        fetch(`https://opentdb.com/api.php?amount=${amountEl.current.value}&&category=${categoryEl.current.value}`)
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
    }

    return (
        <>
            <form className="header" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select id="category" ref={categoryEl}>
                        {categories.map(category => {
                            return <option value={category.id} key={category.id}>{category.name}</option>
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Number of Questions</label>
                    <input type="number" id="amount" min="1" step="1" defaultValue={10} ref={amountEl}/>
                </div>
                <div className="form-group">
                    <button className="button">Generate</button>
                </div>
            </form>
            <div className="container">
                <FlashCardList flashcards={flashCards}/>
            </div>
        </>
    );
}

export default App;

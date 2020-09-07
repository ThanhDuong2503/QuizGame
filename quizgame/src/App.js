import React, {useState} from 'react';
import FlashCardList from "./FlashCard/FlashCardList";

function App() {

  const [flashCards, setFlashCards] = useState(SampleFlashCards);

  return (
    <FlashCardList flashcards={flashCards}/>
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

import React from "react";
import FlashCard from "./FlashCard";

function FlashCardList({flashcards}) {
    return (
        <div className="card-grid">
            {flashcards.map(flashCard =>  {
                return <FlashCard flashcard={flashCard} key={flashCard.id}/>
            })}
        </div>
    )
}

export default FlashCardList;
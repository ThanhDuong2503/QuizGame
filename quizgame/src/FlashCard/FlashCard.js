import React, {useState} from "react";

function FlashCard({flashcard}) {

    const [flip, setFlip] = useState(false);

    return(
        <div onClick={ () => setFlip(!flip) } >
            {flip ? flashcard.answer : flashcard.question}
        </div>
    )
}

export default FlashCard;
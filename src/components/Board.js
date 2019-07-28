import React, {useState} from 'react';
import PropTypes from "prop-types";
import _ from "lodash";
import BoardRow from "./BoardRow";

const Board = (props) => {
    const [flippedCards, setFlippedCards] = useState([]);
    const [currentCard, setCurrentCard] = useState(undefined);
    const onCardClick = (uniqueId, id) => {
        if(currentCard) {
            if(id === currentCard.id) {
                setCurrentCard(undefined);
                setFlippedCards(flippedCards.concat([uniqueId]));
                return;
            }
            setFlippedCards(flippedCards.concat([uniqueId]));
            setTimeout(() => {
                setCurrentCard(undefined);
                setFlippedCards(_.filter(flippedCards, (cardId) =>
                    cardId !== uniqueId && cardId !== currentCard.uniqueId
                ));
            }, 700);
            return;
        }
        setCurrentCard({id, uniqueId});
        setFlippedCards(flippedCards.concat([uniqueId]));
    };

    return (
        <div className="container board">
            <BoardRow
                onCardClick={onCardClick}
                images={props.images[0]}
                flippedCards={flippedCards}
            />
            <BoardRow
                onCardClick={onCardClick}
                images={props.images[1]}
                flippedCards={flippedCards}
            />
            <BoardRow
                onCardClick={onCardClick}
                images={props.images[2]}
                flippedCards={flippedCards}
            />
            <BoardRow
                onCardClick={onCardClick}
                images={props.images[3]}
                flippedCards={flippedCards}
            />
        </div>
    );
};

Board.propTypes = {
    images: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        uniqueId: PropTypes.string,
        url: PropTypes.string
    }))).isRequired,
};

export default Board;

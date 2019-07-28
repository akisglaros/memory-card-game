import React from 'react';
import PropTypes from 'prop-types';
import Card from "./Card";

const BoardRow = (props) => {
    const {images} = props;
    let counter = 1;

    return (
        <div className="row board-row">
            {images.map((image) => (
                <Card
                    imageId={image.id}
                    imageUniqueId={image.uniqueId}
                    imageUrl={image.url}
                    key={counter++}
                    onCardClick={props.onCardClick}
                    isFlipped={props.flippedCards.includes(image.uniqueId)}
                />
            ))}
        </div>
    );
};

BoardRow.propTypes = {
    flippedCards: PropTypes.arrayOf(PropTypes.string).isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        url: PropTypes.string
    }),).isRequired,
    onCardClick: PropTypes.func.isRequired
};

export default BoardRow;

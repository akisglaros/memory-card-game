import React from 'react';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';
import CardBackside from "./CardBackside";
import CardFrontside from "./CardFrontside";

const Card = (props) => {
    const onCardClick = () => {
        props.onCardClick(props.imageUniqueId, props.imageId);
    };

    return (
        <div className="col-3">
            <ReactCardFlip isFlipped={!props.isFlipped}>
                <CardFrontside
                    onCardClick={onCardClick}
                    key="front"
                    imageUrl={props.imageUrl}
                />
                <CardBackside onCardClick={onCardClick} key="back" />
            </ReactCardFlip>
        </div>
    );
};

Card.propTypes = {
    isFlipped: PropTypes.bool.isRequired,
    imageId: PropTypes.string,
    imageUniqueId: PropTypes.string,
    imageUrl: PropTypes.string,
    onCardClick: PropTypes.func.isRequired
};

Card.defaultProps = {
    imageId: '',
    imageUniqueId: '',
    imageUrl: ''
};

export default Card;

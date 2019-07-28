import React from 'react';
import PropTypes from 'prop-types';

const CardFrontside = (props) => {
    return (
        <div onClick={props.onCardClick} className="card-frontside">
            <img
                className="card-frontside__image"
                src={props.imageUrl}
                alt="icon"
            />
        </div>
    );
};

CardFrontside.propTypes = {
    imageUrl: PropTypes.string,
    onCardClick: PropTypes.func
};

CardFrontside.defaultProps = {
    imageUrl: '',
    onCardClick: () => {}
};

export default CardFrontside;

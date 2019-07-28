import React from 'react';
import PropTypes from 'prop-types';

const CardBackside = (props) => (
    <div onClick={props.onCardClick} className="card-backside">
    </div>
);

CardBackside.propTypes = {
    onCardClick: PropTypes.func
};

CardBackside.defaultProps = {
    onCardClick: () => {}
};

export default CardBackside;

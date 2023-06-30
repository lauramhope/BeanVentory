import React from 'react';
import PropTypes from 'prop-types';

function Coffee(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <ul>
          <h4>Name | {props.name}</h4>
          <p>Roast | {props.roast}</p>
          <p>Origin | {props.origin}</p>
          <p>Price per pound | ${props.price}</p>
        </ul>
        <hr />
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;
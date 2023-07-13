import React from 'react';
import PropTypes from 'prop-types';

function Coffee(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
        <ul>
          <h4>Name | {props.name}</h4>
          <li>Roast | {props.roast}</li>
          <li>Origin | {props.origin}</li>
          <li>Price per pound | ${props.price}</li>
          <li>Quantity | {props.quantity} lbs</li>
        </ul>
        <hr />
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  roast: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func
};

export default Coffee;
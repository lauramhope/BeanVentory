import React from 'react';
import Coffee from './Coffee';
import PropTypes from 'prop-types';

function CoffeeList(props) {
  return (
    <React.Fragment>
      <div class="coffeeList">
        <h2>Coffee List</h2>
        <hr />
        {props.coffeeList.map((coffee) =>
          <Coffee
            whenCoffeeClicked = { props.onCoffeeSelection }
            name={coffee.name}
            roast={coffee.roast}
            origin={coffee.origin}
            price={coffee.price}
            id={coffee.id}
            key={coffee.id}/>
        )}
      </div>
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func
};

export default CoffeeList;
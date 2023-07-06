import React from 'react';
import Coffee from './Coffee';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function CoffeeList(props) {
  return (
    <React.Fragment>
      <Card style={{ width: '100%', backgroundColor: 'rgba(255, 255, 255, .65)' }}>
        <Card.Body>
          <h2><em>Coffee List</em></h2>
          <Card.Text>
          <hr />
          {props.coffeeList.map((coffee) =>
            <Coffee
              whenCoffeeClicked = { props.onCoffeeSelection }
              name={coffee.name}
              roast={coffee.roast}
              origin={coffee.origin}
              price={coffee.price}
              quantity={coffee.quantity}
              id={coffee.id}
              key={coffee.id} />
          )}
          </Card.Text>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func
};

export default CoffeeList;
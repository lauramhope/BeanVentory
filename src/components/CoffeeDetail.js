import React from 'react';
import PropTypes from 'prop-types';

function CoffeeDetail(props){
  const { coffee, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.name} - {coffee.roast}</h3>
      <p><em>{coffee.origin}</em></p>
      <p>{coffee.price}</p>
      <button onClick={()=> onClickingDelete(coffee.id) }>Close Coffee</button>
      <button onClick={()=> props.onClickingEdit }>Update Coffee</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CoffeeDetail;
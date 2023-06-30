import React from 'react';
import PropTypes from 'prop-types';
// import ReusableForm from './ReusableForm';

import { v4 } from 'uuid';

function NewCoffeeForm(props) {
  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value,
      roast: event.target.roast.value,
      origin: event.target.origin.value,
      price: event.target.price.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewCoffeeFormSubmission}
        buttonText="Add Coffee" />
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;
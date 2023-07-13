import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props){
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Coffee Name' 
          required />
        <br />
        <input
          type='text'
          name='roast'
          placeholder='Roast'
          required />
        <br />
        <input
          type='text'
          name='origin'
          placeholder='Origin'
          required />
        <br />
        <input
          type='number'
          name='price'
          placeholder='Price'
          required />
        <br />
          <input 
          type='number'
          name='quantity'
          value={props.defaultQuantity}
          placeholder='Quantity'
          required />
        <br />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  defaultQuantity: PropTypes.number
};

export default ReusableForm;
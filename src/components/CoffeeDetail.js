import React from 'react';

class CoffeeDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 130
    };
  }

  handleSellCoffeeClick = () => {
    if (this.state.quantity === 0) {
      return;
    }
    this.setState((prevState) => ({
        quantity: prevState.quantity - 1
    }));
  };

  render() {
    const { coffee, onClickingDelete, onClickingEdit } = this.props;
    return (
      <React.Fragment>
        <h3>Coffee Detail</h3>
        <ul>
          <li>Name | {coffee.name}</li>
          <li>Roast | {coffee.roast}</li>
          <li>Origin | {coffee.origin}</li>
          <li>Price | {coffee.price}</li>
          <li>Quantity | {this.state.quantity}</li>
        </ul>
        <button className="btn btn-success" onClick={this.handleSellCoffeeClick}>Sell Coffee</button>
        <button className="btn btn-success" onClick={()=> onClickingEdit(coffee.id) }>Edit Coffee</button>
        <button className="btn btn-success" onClick={()=> onClickingDelete(coffee.id) }>Delete Coffee</button>
        <hr/>
      </React.Fragment>
    );
  }
}

export default CoffeeDetail;
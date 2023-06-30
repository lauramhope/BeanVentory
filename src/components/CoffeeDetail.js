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
        <h1>Coffee Detail</h1>
        <h3>{coffee.name} - {coffee.roast}</h3>
        <p><em>{coffee.origin}</em></p>
        <p>{coffee.price}</p>
        <p>{this.state.quantity}</p>
        <button onClick={this.handleSellCoffeeClick}>Sell Coffee</button>
        <button onClick={()=> onClickingEdit(coffee.id) }>Edit Coffee</button>
        <button onClick={()=> onClickingDelete(coffee.id) }>Delete Coffee</button>
        <hr/>
      </React.Fragment>
    );
  }
}

export default CoffeeDetail;
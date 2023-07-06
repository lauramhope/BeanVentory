import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

function CoffeeDetail(props) {
  const { coffee, onClickingDelete, onClickingEdit, onClickingDecrement } = props;

  return (
    <React.Fragment>
      <Card style={{ width: '18rem'}}>
        <Card.Body>
          <Card.Title>{coffee.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{coffee.roast}</Card.Subtitle>
          <Card.Text>
            <ul>
              <li>Origin | {coffee.origin}</li>
              <li>Price | ${coffee.price}</li>
              <li>Quantity | {coffee.quantity}</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      <button className="btn btn-success" onClick={() => onClickingDecrement(coffee.id)}>Buy Coffee</button>
      <button className="btn btn-success" onClick={()=> onClickingEdit(coffee.id) }>Edit Coffee</button>
      <button className="btn btn-danger" onClick={()=> onClickingDelete(coffee.id) }>Delete Coffee</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDecrement: PropTypes.func
};

export default CoffeeDetail;


  // handleBuyCoffeeClick = () => {
  //   if (this.state.quantity === 0) {
  //     return;
  //   }
  //   this.setState((prevState) => ({
  //       quantity: prevState.quantity - 1
  //   }));
  // };

//   render() {
//     const { coffee, onClickingDelete, onClickingEdit } = this.props;
//     return (
//       <React.Fragment>
//         <Card style={{ width: '18rem'}}>
//           <Card.Body>
//             <Card.Title>{coffee.name}</Card.Title>
//             <Card.Subtitle className="mb-2 text-muted">{coffee.roast}</Card.Subtitle>
//             <Card.Text>
//               <ul>
//                 <li>Origin | {coffee.origin}</li>
//                 <li>Price | ${coffee.price}</li>
//                 <li>Quantity | {this.state.quantity}</li>
//               </ul>
//             </Card.Text>
//           </Card.Body>
//         </Card>
//         <button className="btn btn-success" onClick={this.handleBuyCoffeeClick}>Buy Coffee</button>
//         <button className="btn btn-success" onClick={()=> onClickingEdit(coffee.id) }>Edit Coffee</button>
//         <button className="btn btn-success" onClick={()=> onClickingDelete(coffee.id) }>Delete Coffee</button>
//         <hr/>
//       </React.Fragment>
//     );
//   }
// }
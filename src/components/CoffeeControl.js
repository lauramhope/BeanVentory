import React from 'react';
import CoffeeList from './CoffeeList';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeDetail from './CoffeeDetail';
import EditCoffeeForm from './EditCoffeeForm';
import { v4 } from 'uuid';

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [
        {
          name: "Stumptown House Blend",
          roast: "Medium",
          origin: "Portland, OR",
          price: 16.00,
          quantity: 130,
          id: v4()
        },
        {
          name: "Counter Culture Hologram",
          roast: "Dark",
          origin: "Durham, NC",
          price: 12.00,
          quantity: 130,
          id: v4()
        },
        {
          name: "Intelligentsia El Diablo",
          roast: "Dark",
          origin: "Ethiopia",
          price: 14.00,
          quantity: 130,
          id: v4()
        },
        {
          name: "Lavazza Super Crema",
          roast: "Medium",
          origin: "Torino, Italy",
          price: 14.00,
          quantity: 130,
          id: v4()
        },
        {
          name: "La Colombe Corsica Blend",
          roast: "Light",
          origin: "Central America",
          price: 16.00,
          quantity: 130,
          id: v4()
        },
        {
          name: "Brazil Santos Sunshine Brew",
          roast: "Light",
          origin: "South America",
          price: 14.00,
          quantity: 130,
          id: v4()
        }
      ],
      selectedCoffee: null,
      editing: false
    };
  }

  handleClick = () => {
    if(this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({mainCoffeeList: newMainCoffeeList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState({
        mainCoffeeList: editedMainCoffeeList,
        editing: false,
        selectedCoffee: null
      });
  }

  handleCoffeeDecrement = () => {
    const selectedCoffee = this.state.selectedCoffee;
    if (selectedCoffee.quantity > 0) {
      const updatedCoffee = {...selectedCoffee, quantity: selectedCoffee.quantity -1};
      const updatedMainCoffeeList = this.state.mainCoffeeList.map(coffee => coffee.id === selectedCoffee.id ? updatedCoffee : coffee);
      this.setState({
        mainCoffeeList: updatedMainCoffeeList,
        selectedCoffee: updatedCoffee
    });
  }
}

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing ) {
      currentlyVisibleState = <EditCoffeeForm 
      coffee = {this.state.selectedCoffee} 
      onEditCoffee = {this.handleEditingCoffeeInList} />
      buttonText = "Return to Coffee List";
    } else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetail 
      coffee = {this.state.selectedCoffee} 
      onClickingDecrement = {this.handleCoffeeDecrement}
      onClickingDelete = {this.handleDeletingCoffee} 
      onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Coffee List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm 
      onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />
      buttonText = "Return to Coffee List";
    } else {
      currentlyVisibleState = <CoffeeList 
      coffeeList={this.state.mainCoffeeList} 
      onCoffeeSelection={this.handleChangingSelectedCoffee} />
      buttonText = "Add Coffee";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default CoffeeControl;
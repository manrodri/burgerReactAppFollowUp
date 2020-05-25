import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../Burger/Burger';
import BuildControls from "../Burger/BuildControls/BuildControls";
import Modal from '../UI/Modal/Modal';
import OrderSummary from "../Burger/OrderSummary/OrderSummary";
import Backdrop from '../UI/Backdrop/Backdrop';


const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 0.7,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {
    // ingredient keys must match BurgerIngredient switch cases
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    }

    purchaseContinueHandler = () => {
        alert("you bought your burger!");
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false})
    }
    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    updatePurchaseState = (ingredients) => {
        // let newState;
        // if(this.state.totalPrice > 4){
        //     newState = true;
        // }
        // this.setState({purchasable: newState});

        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]
        }).reduce((sum, el) => {
            return sum + el
        }, 0)
        console.log(sum);
        this.setState({purchasable: sum > 0});
    }


    addIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.totalPrice;
        const updatedPrice = INGREDIENTS_PRICES[type] + oldPrice;

        this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
        this.updatePurchaseState(updatedIngredients);

    }

    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {...this.state.ingredients};
        updatedIngredients[type] = updatedCount;

        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - INGREDIENTS_PRICES[type];

        this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
        this.updatePurchaseState(updatedIngredients);
    }



    render() {

        const disabledInfo = {...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return(
            <Aux>

                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientsHandler}
                    disabled={disabledInfo}
                    totalPrice={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    purchasing={this.purchaseHandler}

                ></BuildControls>

                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler} >
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCancled={this.purchaseCancelHandler}
                        purchaseExecuted={this.purchaseContinueHandler}
                    />
                </Modal>
            </Aux>
        );
    }
}

export default BurgerBuilder;
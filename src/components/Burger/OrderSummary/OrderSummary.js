import React from 'react';
import Aux from '../../../hoc/Aux';
const OrderSummary= (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}: {props.ingredients[igKey]}</span></li>
        })
    return (
        <Aux>
            <h2>Your Order</h2>
            <p>A delicious burger with the following Ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
}

export default OrderSummary;
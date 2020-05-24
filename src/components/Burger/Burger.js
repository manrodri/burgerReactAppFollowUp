import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    // create a nested array:
    // - outer array contains keys of this.state.ingredients
    // - inner arrays contain BurgerIngredient components
    // flaten the resulting array using reduce so we have an array of ingredients elements

    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient type={igKey} key={igKey + i}></BurgerIngredient>
        })
    }).reduce((arr, el) => {
            return arr.concat(el);
        }, [])

    if(transformedIngredients.length === 0){
        transformedIngredients = <div>Please add elements...</div>
    }




    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>
        </div>
    );
}

export default  burger;
import * as actionTypes from '../constants/cartConstant.js'
import axios from 'axios';

const URL = 'https://flipkartserver-k5mi.onrender.com';

export const addToCart = (id, quantity) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`${URL}/product/${id}`);

        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

    } catch (error) {
        console.log({type:actionTypes.ADD_TO_CART_ERROR , payload: error.message});
    }
};

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

};

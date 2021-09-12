import axios from 'axios';
import localDB from '../../../db.json'

export default {
    GET_PRODUCTS_FROM_API({commit}){
        return axios('http://localhost:3000/products', {
            method: "GET"
        })
        .then((products) => {
            commit('SET_PRODUCTS_TO_STATE', products.data);
        return products.data;
    })
        .catch(err => {
            commit('SET_PRODUCTS_TO_STATE', localDB.products);
            console.log(err)
            return err;
        });
    },
}
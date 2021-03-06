import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart:[],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE:(state,products)=>{
      state.products = products;
    },
    SET_CART:(state, product)=>{
      if (state.cart.length){
        let isProductExisits=false;
        state.cart.map(function(item){
          if(item.id === product.id){
            isProductExisits = true;
            item.quantity++;
          }
        });
      
      if(!isProductExisits){
        state.cart.push(product);
      }
      }else{
        state.cart.push(product);
      }
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}){
      return axios("http://localhost:3000/products", {
        method:"GET",
      })
      .then((products)=>{
        commit("SET_PRODUCTS_TO_STATE", products.data);
        return products;
      })
      .catch((error)=>{
        console.log(error);
        return error;
      });
    },
    ADD_TO_CART({commit},product){
      commit("SET_CART",product);
    },
    DELETE_FROM_CART({commit},index){
      commit("REMOVE_FROM_CART",index);
    },
    
  },
  getters: {
    PRODUCTS(state){
      return state.products;
    },
    CART(state){
      return state.cart;
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      cart: [],
      selectedCart: [],
      summary: [],
      currency: "TL",
      removeCartItem: []
  },
  mutations: {
      getCart(state, payLoad) {
          state.cart = payLoad;
      },
      selectedCart(state, payLoad) {
          state.selectedCart = payLoad;
      },
      getSummary(state, payLoad) {
          state.summary = payLoad;
      },
      removeCartItem(state, payLoad) {
          state.removeCartItem = payLoad;
      },
      currency(state, payLoad) {
        state.currency = payLoad;
      }
  },
  actions: {
    getCart({ commit }) {
        axios.get('http://localhost:3004/cart')
            .then(response => {
                commit('getCart', response.data);
        });
    },
    selectedCart({ commit }, payLoad) {
        axios.put(`http://localhost:3004/cart/${payLoad.id}`, payLoad).then(response => {
          commit('selectedCart', response.data);
        }).catch(function (error) {
          console.log(error.response)
        });
    },
    removeCartItem({ commit}, payLoad) {
        axios.delete(`http://localhost:3004/cart/${payLoad}`)
        .then(response => {
          commit('removeCartItem', response.data);
        });
    },
    getSummary({ commit }) {
        axios.get('http://localhost:3004/summary')
            .then(response => {
                commit('getSummary', response.data)
        });
    },
    currency({commit}, payLoad) {
      commit('currency',payLoad);
    }
  },
  modules: {
  }
});
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {},
    currentInfo: {},
    mapCountries: {}
  },
  mutations: {
    setData:(state, data) =>{
      state.data = data
      state.currentInfo = data.Global
      state.mapCountries = data.Countries.map(c => [c.CountryCode, c.TotalConfirmed])
      state.mapCountries.unshift(['Country', 'Loxi'])
    },
    changeCurrentCountry:(state, region) => {
        state.data.Countries.every(function (country) {
          if(country.CountryCode == region){
             state.currentInfo = country;
             return false
          }
          else{
            return true
          }
        })
    }
  },
  actions: {
    async fetchPosts({commit}){
      return axios('https://api.covid19api.com/summary', {method:'GET'})
          .then((data) =>{
            commit('setData', data.data);
          })
    }
  },
  getters: {
    getGlobal(state){
      return state.data.Global
    },
    getCountries(state){
      return state.data.Countries
    }
  }
})

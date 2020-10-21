import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {},
    currentInfo: {},
    mapCountries: {},
    fields: [
      {name: 'Country', id: 'Country', classes: 'totalInfo__text'},
      {name: 'New Confirmed', id: 'NewConfirmed', classes: 'totalInfo__text confirmed'},
      {name: 'Total Confirmed', id: 'TotalConfirmed', classes: 'totalInfo__text confirmed'},
      {name: 'New Deaths', id: 'NewDeaths', classes: 'totalInfo__text deaths'},
      {name: 'Total Deaths', id: 'TotalDeaths', classes: 'totalInfo__text deaths'},
      {name: 'New Recovered', id: 'NewRecovered', classes: 'totalInfo__text recovered'},
      {name: 'Total Recovered', id: 'TotalRecovered', classes: 'totalInfo__text recovered'},
    ]
  },
  mutations: {
    setData:(state, data) =>{
      state.data = data
      state.currentInfo = data.Global
      state.mapCountries = data.Countries.map(c => [c.CountryCode, c.TotalConfirmed])
      state.mapCountries.unshift(['Country', 'сonfirmed'])
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
    },
    sort:((state, countries) => {
      state.data.Countries = countries
    }),
    globalStatistic:(state)=>{
      state.currentInfo = state.data.Global
    }
  },
  actions: {
    async fetchPosts({commit}){
      return axios('https://api.covid19api.com/summary', {method:'GET'})
          .then((data) =>{
            commit('setData', data.data);
          })
    },
    sort({commit, state}, conf){
      let sortData = state.data.Countries.sort((a,b) => a[conf.fieldName] > b[conf.fieldName] ? conf.n1:conf.n2)
      commit('sort', sortData)
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

import { createStore } from 'vuex'

export default createStore({
  state: {
    about:[]
  },
  getters: {
  },
  mutations: {
    setAbout(state, about){
      state.about= about
    }
  },
  actions: {
    fetchAbout({commit}){
      fetch('http://localhost:3000/About')
      .then(response => response.json() )
      .then(about=> {
         commit('setAbout', about[0])
      })
    }
  },
  modules: {
  }
})


import { createStore } from 'vuex';
const hostedData = "https://itsssammara.github.io/data/"
export default createStore({
  state: {
    about: [],
    home: [],
    education: [],
    job:[],
    testimonial:[]
  },
  mutations: {
    setAbout(state, about) {
      state.about = about // Access the "About" property in the response
    },
    setHome(state, homedata) {
      state.home = homedata
    },
    seteducation(state,data){
      state.education = data
    },
    setJob(state,data){
      state.job = data
    },
    setTestimonial(state,data){
      state.testimonial = data
    }
  },
  actions: {
    fetchAbout({commit}) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            console.log(data)
            commit('setData', data.About[0]);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can commit an error state mutation here
            // commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Optionally, you can commit an error state mutation here
        // commit('setError', 'An unexpected error occurred');
      }
    },
    fetchHome({commit}){
      fetch(hostedData)
      .then(response=> response.json())
      .then(home=> {
        // console.log(home)
        commit('setHome',home.Home[0])
      })
    },
    fetcheducation({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
          //  console.log(data[0])
            commit('seteducation', data.education[0]);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can commit an error state mutation here
            // commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Optionally, you can commit an error state mutation here
        // commit('setError', 'An unexpected error occurred');
      }
    },
    fetchJob({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
          //  console.log(data[0])
            commit('setJob', data.jobs[0]);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can commit an error state mutation here
            // commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Optionally, you can commit an error state mutation here
        // commit('setError', 'An unexpected error occurred');
      }
    },
    fetchTestimonial({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
          //  console.log(data[0])
          commit('setTestimonial', data.testimonial);
          // console.log("Image URL:", data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can commit an error state mutation here
            // commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Optionally, you can commit an error state mutation here
        // commit('setError', 'An unexpected error occurred');
      }
    }
  },
  modules: {},
});









import { createStore } from 'vuex';
const hostedData = "https://itsssammara.github.io/data/"
export default createStore({
  state: {
    about: [],
    home: [],
    projects: [],
    resume:[],
    testimonials:[]
  },
  mutations: {
    setAbout(state, about) {
      state.about = about // Access the "About" property in the response
    },
    setHome(state, homedata) {
      state.home = homedata
    },
    setProjects(state,data){
      state.projects = data
    },
    setResume(state,data){
      state.resume = data
    },
    setTestimonials(state,data){
      state.testimonials = data
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
    fetchProjects({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
           console.log(data.Projects)
            commit('setProjects', data.Projects);
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
    fetchResume({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
          console.log(data.Resume)
            commit('setResume', data.Resume);
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
    fetchTestimonials({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
          //  console.log(data.Testimonials)
          commit('setTestimonials', data.Testimonials);
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








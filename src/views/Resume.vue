<template>
    <div class="resume">
      <div>
        <h1>Education /Work Experience</h1>
      </div>
      <div class="cards">
        <div v-for="resume of $store.state.resume" v-bind:key="resume" class="resume-card">
          <div class="resumeinfo">
            <img :src="resume.url" class="resume-image">
            <h2 class="resumename">{{ resume.schoolname }}</h2>
            <p class="resume-text">{{ resume.year }}</p>
            <p class="resume-text">{{ resume.description }}</p>
          </div>
        </div>
      </div>
      <h1>Skills</h1>
      <div class="skills-container">
      <i class="fa-brands fa-html5"></i>
      <i class="fa-brands fa-css3-alt"></i>
      <i class="fa-brands fa-bootstrap"></i>
      <i class="fa-brands fa-js"></i>
      <i class="fa-brands fa-vuejs"></i>
      <i class="fa-solid fa-database"></i>
      <i class="fa-brands fa-figma"></i>
      </div><br><br><br>
      <h1>Soft Skills</h1>
      <div class="soft-skills">
        <i class="fa-solid fa-paintbrush"></i>
      <i class="fa-solid fa-business-time"></i>
      <i class="fa-solid fa-people-arrows"></i>
      <i class="fa-solid fa-infinity"></i>

      </div>
      <footers/>
    </div>
  </template>

  <script>
import footers from '@/components/footer.vue'
export default {
  components: {
    footers
  },
  methods: {
    fetchResume() {
      this.$store.dispatch('fetchResume');
    },
  },
  mounted() {
    this.fetchResume(); // Corrected method call
  },
};
</script>

<style scoped>
 h1{
  color: #f0f0f0;
  font-family: Black Ops One;
 }
.resume {
  padding: 20px;
  text-align: center;
  height: 200vh;
  background-repeat: no-repeat;
  background-color: #f0f0f0;
  background-image: url('https://i.postimg.cc/SQWHkbwY/bg1.jpg');
  background-size: cover; 
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px; 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 54px;
  margin-top: 60px;
}

.resume-card {
  margin: 15px; 
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
/* .resume-card:hover {
  box-shadow: 0 8px 16px rgba(10, 10, 10, 0.2);
  transform: scale(1.10); 
} */

.resume-image {
  width: 100%;
  max-width: 200px; 
  border-radius: 50%;
  margin-bottom: 10px; 
}
.resumename {
  color: #555;
  font-size: 1.5em;
  margin-bottom: 5px; 
}

.resume-text {
  font-style: italic;
  color: #555;
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.skills-container {
  font-size: 130px;
  color: rgb(134, 133, 133);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px; 
}

.soft-skills{
  font-size: 100px;
  color: rgb(134, 133, 133);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
}


</style>

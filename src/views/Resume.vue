<template>
    <div class="resume">
      <div>
        <h1>Education</h1>
      </div>
      <div class="cards">
        <div v-for="resume of $store.state.resume" v-bind:key="resume" class="resume-card">
          <div class="resumeinfo">
            <h2 class="resumename">{{ resume.schoolname }}</h2>
            <p class="resume-text">{{ resume.year }}</p>
            <p class="resume-text">{{ resume.description }}</p>
          </div>
        </div>
      </div>
      <h1>Skills</h1>
      <div class="skills-container">
    <!-- html Card 1 -->
    <div class="skill-card">
      <img src="https://i.ibb.co/jMtxNJS/image-360.png" alt="HTML Image" class="skill-image">
      <img src="https://i.ibb.co/XyKXt9L/sintonlgo.png" alt="sintonlgo" border="0">
<img src="https://i.ibb.co/rt8cvcn/LCLOGO.jpg" alt="LCLOGO" border="0">
    </div>

    <!-- css Card 2 -->
    <div class="skill-card">
      <img src="https://i.ibb.co/q75Pd8J/image-360.png" alt="CSS Image" class="skill-image">
    </div>

    <!-- bootstrap Card 3 -->
    <div class="skill-card">
      <img src="https://i.ibb.co/Y817gCk/image-360.png" alt="CSS Image" class="skill-image">
    </div>

    <!-- js Card 3 -->
    <div class="skill-card">
      <img src="https://i.ibb.co/Q8cWZ3q/image-360.png" alt="CSS Image" class="skill-image">
    </div>

    <!-- vue Card 3 -->
    <div class="skill-card">
      <img src="https://i.ibb.co/80gT044/image-360.png" alt="CSS Image" class="skill-image">
    </div>

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
  height: 150vh;
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
  grid-gap: 154px;
  margin-top: 60px;
}

.resume-card {
  margin: 15px; 
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.resume-card:hover {
  box-shadow: 0 8px 16px rgba(10, 10, 10, 0.2);
  transform: scale(1.10); 
}

.resume-image {
  width: 100%;
  max-width: 200px; 
  border-radius: 50%;
  margin-bottom: 10px; 
}

.resumeinfo {
  text-align: left;
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



</style>

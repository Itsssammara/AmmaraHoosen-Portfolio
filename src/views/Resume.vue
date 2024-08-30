<template>
  <div class="resume"><br>
    <div>
      <h1>Education / Work Experience</h1>
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
    <br><br>
    <h1>Skills</h1>
    <div class="skills-container1">
      <div class="skill">
        <i class="fa-brands fa-html5"></i>
        <span>Html5</span>
      </div>
      <div class="skill">
        <i class="fa-brands fa-css3-alt"></i>
        <span>Css3</span>
      </div>
      <div class="skill">
        <i class="fa-brands fa-bootstrap"></i>
        <span>Bootstrap</span>
      </div>
      <div class="skill">
        <i class="fa-brands fa-js"></i>
        <span>JavaScript</span>
      </div>
    </div>
    <div class="skills-container2">
      <div class="skill">
        <i class="fa-brands fa-vuejs"></i>
        <span>Vue.js</span>
      </div>
      <div class="skill">
        <i class="fa-solid fa-database"></i>
        <span>Mysql</span>
      </div>
      <div class="skill">
        <i class="fa-brands fa-figma"></i>
        <span>Figma</span>
      </div>
      <div class="skill">
        <i class="fa-brands fa-wordpress"></i>
        <span>WordPress</span>
      </div>
    </div>
    <br><br><br><br>
    <h1>Achievements</h1><br>
    <div class="badges">
      <div class="skill">
        <img src="https://i.ibb.co/HqFbzfP/operating-systems-basics.png" alt="">
        
      </div>
      <div class="skill">
        <img src="https://i.ibb.co/Bc8dkYp/network-technician-career-path.png" alt="">
        
      </div>
      <div class="skill">
        <img src="https://i.ibb.co/HX5fRmj/junior-cybersecurity-analyst-career-path-1-1.png" alt="">
        
      </div>
      <div class="skill">
        <img src="https://i.ibb.co/nwXB7vH/scrum.png" alt="">
      </div>
    </div>
    <br><br><br><br>
    <h1>Soft Skills</h1>
    <div class="soft-skills">
      <div class="skill">
        <i class="fa-solid fa-paintbrush"></i>
        <span>Creativity</span>
      </div>
      <div class="skill">
        <i class="fa-solid fa-face-smile-beam"></i>
        <span>Emotional Intelligence</span>
      </div>
      <div class="skill">
        <i class="fa-solid fa-business-time"></i>
        <span>Time Management</span>
      </div>
      <div class="skill">
        <i class="fa-solid fa-people-arrows"></i>
        <span>Communication</span>
      </div>
      <div class="skill">
        <i class="fa-solid fa-infinity"></i>
        <span>Adaptability</span>
      </div>
    </div>

    <!-- <footers /> -->
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
h1 {
  color: #f0f0f0;
  font-family: Black Ops One;
}

.resume {
  padding: 20px;
  text-align: center;
  min-height: 200vh;
  background-repeat: no-repeat;
  background-color: #f0f0f0;
  background-image: url('https://i.postimg.cc/SQWHkbwY/bg1.jpg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); */
  grid-gap: 54px;
  margin-top: 60px;
}

.resume-card {
  margin: 15px;
  width: 25vw;
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
  font-style: Roboto Condensed;
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

.skills-container1 {
  font-size: 130px;
  color: rgb(134, 133, 133);
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
  gap: 50px;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: space-evenly;
}

.skills-container2 {
  font-size: 130px;
  color: rgb(134, 133, 133);
  display: flex;
  flex-wrap: wrap;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
  gap: 10px;
  width: 46%;
  justify-content: space-between;
}

.soft-skills {
  font-size: 100px;
  color: rgb(134, 133, 133);
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
  gap: 10px;
  width: 50%;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
}
.badges {
  /* font-size: 100px;
  color: rgb(134, 133, 133); */
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
  gap: 10px;
  width: 50%;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
}
.badges img {
  width: 200px; 
  height: 200px; 
  object-fit: cover; 
}

.skill {
  text-align: center;
}

/* .skill i {
      font-size: 48px;
    } */

.skill span {
  font-size: 14px;
  display: block;
}
@media screen and (max-width: 768px) {
  .cards {
    grid-gap: 20px; /* Adjust grid gap for smaller screens */
  }

  .resume-card {
    width: 100%; /* Adjust card width for smaller screens */
  }

  .skills-container1,
  .skills-container2,
  .soft-skills {
    font-size: 70px; /* Adjust font size for smaller screens */
    justify-content: center; 
    display: inline-block;
    /* Center the skills container on small screens */
  }
  .skills-container1{
    margin-left: 45%;
  }
  .skills-container2{
    margin-left: 30%;
    /* margin-bottom: 50%; */
  }
  .soft-skills{
    margin-left: 30%;
  }
  .skills-container1 .skill,
  .skills-container2 .skill,
  .soft-skills .skill {
    width: 45%; /* Set width for skills on small screens */
  }
}
.skill .fa-html5,
.fa-css3-alt,
.fa-bootstrap,
.fa-js,
.fa-vuejs,
.fa-database,
.fa-figma,
.fa-wordpress
 {
  transition: 0.5s ease all;
}
.skill .fa-html5:hover {
  transform: scale(1.2);
  color: aquamarine;
}
.skill .fa-css3-alt:hover {
  transform: scale(1.2);
  color: taquamarineeal;
}
.skill .fa-bootstrap:hover {
  transform: scale(1.2);
  color: aquamarine;
}
.skill .fa-js:hover {
  transform: scale(1.2);
  color: aquamarine;
}
.skill .fa-vuejs:hover {
  transform: scale(1.2);
  color: aquamarine;
}
.skill .fa-database:hover {
  transform: scale(1.2);
  color: aquamarine;
}
.skill .fa-figma:hover {
  transform: scale(1.2);
  color: aquamarine;
}
.skill .fa-wordpress:hover {
  transform: scale(1.2);
  color: aquamarine;
}
</style>

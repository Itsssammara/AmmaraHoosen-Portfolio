<template>
  <div class="projects"><br>
    <div>
      <h1>Latest Projects</h1>
    </div><br><br>
    <div class="container">
      <div v-for="project in $store.state.projects" :key="project.id" class="card-body">
        <div class="image-container">
          <img :src="project.url" class="content-img" alt="projectcard">
          <div class="project-icons">
            <a :href="project.github" target="_blank" class="icon-link"><i class="bi bi-github"></i></a>
            <a :href="project.netlify" target="_blank" class="icon-link"><i class="bi bi-arrow-up-right-square-fill"></i></a>
          </div>
        </div>
        <div class="card-text">
          <h2 class="project-name">{{ project.name }}</h2>
          <p class="project-text">{{ project.description }}</p>
        </div>
      </div>
    </div>
    <!-- <footers /> -->
  </div>
</template>


<script>
import footers from "@/components/footer.vue";
export default {
  components: {
    footers,
  },
  computed: {
    fetchProjects() {
      this.$store.dispatch("fetchProjects");
    },
  },
  mounted() {
    this.fetchProjects;
  },
};
</script>

<style scoped>
h1 {
  margin-top: 1px;
  color: #f0f0f0;
  font-family: Black Ops One;
}

.projects {
  color: #fff;
  padding: 20px;
  text-align: center;
  background: fixed;
  width: auto;
  background-size: cover;
  background-position: center;
  min-height: 200vh;
  background-image: url('https://i.postimg.cc/SQWHkbwY/bg1.jpg');
  animation: fadeInLeft 1s ease-in-out; 
}

.card-text {
  font-style: Roboto Condensed;
  color: #555;
}

/* @import url("https://fonts.googleapis.com/css?family=Lora"); */
/* @import url("https://fonts.googleapis.com/css?family=Lato"); */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  margin: 0 auto 75px;
  width: 85%;
}

.card-body {
  background-color: #ffffff;
  box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.2);
  font-family: Roboto Condensed;
  margin: 25px 0;
  height: 450px; /* Default height for cards */
  overflow: hidden;
  width: 100%;
  border-radius: 8px;
}
.card-body:hover {
  box-shadow: 0 8px 16px rgba(9, 9, 9, 0.527);
  transform: scale(1.1); 
  transition: box-shadow 0.3s ease, transform 0.3s ease; 
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .card-body {
    margin: 25px 10px;
    width: calc(50% - 20px); /* Adjust card width for smaller screens with a gap of 20px between cards */
  }
}

@media (min-width: 1024px) {
  .card-body {
    margin: 25px 15px;
    width: calc(30% - 30px); /* Adjust card width for larger screens with a gap of 30px between cards */
  }
}

.content-img {
  border-bottom: 4px solid #ffffff;
  height: 200px;
  overflow: hidden;
}

.card-body img {
  height: auto;
  object-position: center center;
  width: 100%;
}

.card-body .card-text {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 315px;
}

@media (min-width: 768px) {
  .card-body .card-text {
    padding-bottom: 25px;
  }
}

@media (min-width: 1024px) {
  .card-body .card-text {
    margin-top: 25px;
    min-height: 250px;
    padding-bottom: 0;
  }
}

.project-icons {
  display: flex;
  margin-top: 20px;
}

.project-icons a {
  margin-left: 20px;
  font-size: 24px; 
  color: rgb(123, 73, 151); 
}

.image-container {
  position: relative;
}

.content-img {
  transition: filter 0.3s ease; 
}

.card-body:hover .content-img {
  filter: blur(2.5px); /* Apply blur effect on hover */
}

.project-icons {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0; /* Initially hide the icons */
  transition: opacity 0.3s ease; /* Add transition effect */
}

.card-body:hover .project-icons {
  opacity: 1; /* Show the icons on hover */
}
.icon-link {
  margin: 0 10px;
  font-size: 24px; 
  color: rgb(0, 0, 0); 
}
/* Media Query for Small Screens */
@media (max-width: 768px) {
  .card-body {
    height: 350px; /* Adjust the height for small screens */
  }
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

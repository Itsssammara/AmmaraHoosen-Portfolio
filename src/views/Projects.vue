<template>
  <div class="projects">
    <div>
      <h1>My Projects</h1>
    </div>
    <div class="container">
      <div v-for="project in $store.state.projects" :key="project.id" class="card-body">
        <img :src="project.url" class="content-img" alt="projectcard">
        <div class="card-text">
          <h2 class="project-name">{{ project.name }}</h2>
          <p class="project-text">{{ project.description }}</p>
          <div class="project-icons">
            <a :href="project.github" target="_blank"><i class="bi bi-github"></i></a>
            <a :href="project.netlify" target="_blank"><i class="bi bi-arrow-up-right-square-fill"></i></a>
          </div>
        </div>
      </div>
    </div>
    <footers />
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
  height: 200dvh;
  background-image: url('https://i.postimg.cc/SQWHkbwY/bg1.jpg');
  animation: fadeInLeft 1s ease-in-out; 
}

.card-text {
  font-style: italic;
  color: #555;
}

@import url("https://fonts.googleapis.com/css?family=Lora");
@import url("https://fonts.googleapis.com/css?family=Lato");

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
  font-family: "Lora", serif;
  margin: 25px 0;
  min-height: 515px;
  overflow: hidden;
  width: 100%;
  border-radius: 8px;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .card-body {
    margin: 25px 10px;
    width: 45%;
  }
}

@media (min-width: 1024px) {
  .card-body {
    margin: 25px 15px;
    width: 30%;
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
  justify-content: flex-end;
  margin-left: 160px;
}

.project-icons a {
  margin-left: 20px;
  font-size: 24px; /* Adjust icon size */
  color: black; /* Set icon color to black */
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

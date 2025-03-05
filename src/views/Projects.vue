<template>
  <div class="projects"><br>
    <div>
      <h1>Latest Projects</h1>
    </div><br><br>
    <div class="container">
      <div v-for="project in $store.state.projects" :key="project.id" class="card-body">
        <div class="image-container">
          <img :src="project.url" class="content-img" alt="projectcard">
        </div>
        <div class="card-text">
          <h2 class="project-name">{{ project.name }}</h2>
          <p class="project-text">{{ project.description }}</p>
          <a :href="project.netlify" target="_blank" class="view-button">View</a>
        </div>
      </div>
    </div>
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
  font-family: "Roboto Condensed", sans-serif;
  color: #555;
  text-align: center;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Ensures even columns on all screens */
  gap: 20px;
  justify-content: center;
  width: 85%;
  margin: 0 auto;
}

.card-body {
  background-color: #ffffff;
  box-shadow: 0px 0px 30px 10px rgba(0, 0, 0, 0.2);
  font-family: "Roboto Condensed", sans-serif;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.image-container {
  width: 100%;
}

.content-img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-bottom: 4px solid #ffffff;
}

.view-button {
  margin-top: auto;
  background-color: #7b4997;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.3s;
}

.view-button:hover {
  background-color: #5a3575;
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

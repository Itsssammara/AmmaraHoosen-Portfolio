<template>
  <div id="app">
      <div class="about">
        <div class="about-content">
          <h1>About Me</h1>      
          <div class="about-image">
            <img src="https://cdn-thumbs.imagevenue.com/cc/d7/6a/ME17GC7I_t.jpg" alt="Profile Image">
          </div>
          <div class="about-details">
            <p>My name is Ammara and I'm 19 years old. I pride myself on my ability to take initiative and always being eager to learn new things. One of my greatest strengths lies in my ability to work both independently and as part of a team.</p>
            <p>From a young age, I have always loved art and technology, which is why I chose Web Development and UI / UX design.</p>
          </div>
        </div>
      </div>
      <footers />
  </div>
</template>

<script>
import footers from '@/components/footer.vue'
export default {
  components:{
      footers
    },
  computed: {
    fetchAbout() {
      this.$store.dispatch('fetchAbout');
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData: () => {}
  }
}
</script>

<style scoped>
.about {
  text-align: center;
  background-color: #f0f0f0;
  padding: 20px; 
  height: 200px;
  animation: fadeInLeft 1s ease-in-out;
  background-image: url('https://i.postimg.cc/sxxwmG6y/Tropical-Leaf-Wandbild-f-r-das-Dschungel-Feeling-zu-Hause.jpg');
}

.about-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about-image img {
  border-radius: 50%;
  margin-right: 20px;
  margin-top: 3%;
}

h1 {
  color: #fff;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.about-details {
  color: #fff;
  margin-top: 4%;
  max-width: 600px;
  text-align: center;
}

p {
  margin-bottom: 15px;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensure at least the height of the viewport */
}

.about {
  text-align: center;
  background-color: #f0f0f0;
  padding: 20px; 
  flex-grow: 1; /* Make the content area grow to fill the available space */
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 2;
    transform: translateX(0);
  }
}
</style>

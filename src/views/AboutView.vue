<template>
  <div id="app">
      <div class="about">
        <div class="about-content">
          <h1>About Me</h1>      
          <div class="about-image">
            <img src="https://cdn-thumbs.imagevenue.com/cc/d7/6a/ME17GC7I_t.jpg" alt="Profile Image">
          </div>
          <div class="about-details">
            <p>Greetings! My name is Ammara, and I am fueled by a fervent passion for seizing every opportunity that comes my way. I take great pride in my innate ability to not only take initiative but also to continually embrace new knowledge and skills with an insatiable hunger for growth.
            Since childhood, I have found myself drawn to the mesmerizing worlds of art and technology, where creativity intertwines seamlessly with innovation. It is this intersection that has guided me towards the exciting realms of Web Development and UI/UX design.</p>
            <ul>
              <li><strong>Date of Birth:</strong> October 21, 2004</li>
              <li><strong>Location:</strong> Athlone, Cape town</li>
              <li><strong>Hobbies:</strong></li>
              <ul>
                <li>Reading</li>
                <li>Kick-boxing</li>
                <li>Watching anime</li>
                <li>Coding</li>
              </ul>
            </ul>
        </div>
      </div>
    </div>
    <!-- <footers /> -->
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
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  min-height: 00vh;
  background-repeat: no-repeat;
  background-color: #f0f0f0;
  background-image: url('https://i.postimg.cc/SQWHkbwY/bg1.jpg');
  background-size: cover; /* Adjusted */
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
  color: #f0f0f0;
  font-family: Black Ops One;
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

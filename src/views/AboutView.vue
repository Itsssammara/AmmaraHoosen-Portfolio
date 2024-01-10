
  <template>
  <div class="about">
    <div class="about-content">
      <div class="about-image">
        <!-- Add your image URL here -->
        <img src="https://cdn-thumbs.imagevenue.com/cc/d7/6a/ME17GC7I_t.jpg" alt="Profile Image">
      </div>
      <div class="about-details">
        <h1>About Me</h1>
        <p>
          My name is Ammara and I'm 19 years old. I pride myself on my ability to take initiative and always being eager to learn new things.
          One of my greatest strengths lies in my ability to work both independently and as part of a team.
        </p>
        <p>
          From a young age I have always loved art  and technology, which is  why I chose web development.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  background-color: #b45757;
}

.about-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-image img {
  border-radius: 50%;
  margin-right: 20px; /* Adjust as needed */
  margin-top: 20%;
  
}

h1 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.about-details {
  margin-top: 4%;
  max-width: 600px; /* Adjust as needed */
  text-align: left;
}

p {
  margin-bottom: 15px; /* Adjust as needed */
}
</style>


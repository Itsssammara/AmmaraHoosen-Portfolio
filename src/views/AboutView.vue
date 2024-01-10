
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
          Vestibulum euismod lacus ac bibendum sollicitudin. Sed et sem nec massa
          volutpat accumsan. Proin vestibulum elit vitae ante pharetra, eu fermentum
          risus congue.
        </p>
        <p>
          Sed at felis a justo sodales fermentum. Integer sit amet enim eget felis
          sodales cursus. Duis commodo tincidunt quam, nec dapibus ex hendrerit sit
          amet.
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
}

.about-content {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-image img {
  border-radius: 50%;
  margin-right: 20px; /* Adjust as needed */
}

h1 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.about-details {
  max-width: 600px; /* Adjust as needed */
  text-align: left;
}

p {
  margin-bottom: 15px; /* Adjust as needed */
}
</style>


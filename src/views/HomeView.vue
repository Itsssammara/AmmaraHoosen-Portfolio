<template>
  <div class="home">
    <div class="image">
      <img src="https://i.postimg.cc/zD0F42zS/pleat1.png" class="profile-image" alt="Profile Image">
    </div>
    <div class="text-container">
      <h1 class="fade-in" id="first-sentence">Hi, I'm <span class="highlight">Ammara Hoosen</span></h1>
      <h2 class="fade-in" id="second-sentence" style="animation-delay: 1.1s;">Aspiring <span class="highlight">UI/UX Developer</span></h2>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // Get the elements
    const firstSentence = document.getElementById('first-sentence');
    const secondSentence = document.getElementById('second-sentence');
    
    // Apply fade-in animation to the first sentence
    firstSentence.classList.add('fade-in');

    // Apply fade-in animation to the second sentence after a delay
    setTimeout(() => {
      secondSentence.classList.add('fade-in');
    }, 1000); // Delay in milliseconds (1s = 1000ms)
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.image {
  margin-bottom: 20px;
}

.profile-image {
  width: 200px;
  height: auto;
  border-radius: 60%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
}

.text-container {
  text-align: center;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s forwards;
}

.highlight {
  color: #b45757; /* Highlight color */
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

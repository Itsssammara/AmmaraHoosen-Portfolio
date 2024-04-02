<template>
  <div class="home">
    <!-- <div class="image">
      <div class="card">
        <div class="img-wrapper slide-from-right">
          <img class="img" src="https://cdn-thumbs.imagevenue.com/cc/d7/6a/ME17GC7I_t.jpg" />
          <div class="overlay"></div>
        </div>
      </div>
    </div> -->
    <div class="text-container">
      <h1 class="fade-in slide-from-left" id="first-sentence">Hi, I'm <span class="highlight">Ammara  Hoosen</span></h1>
      <h2 class="fade-in slide-from-left" id="second-sentence" style="animation-delay: 1.1s;">Aspiring <span class="highlight">UI/UX Developer</span></h2>
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
  height: 91vh;
  background-repeat: no-repeat;
  background-color: #f0f0f0;
  background-image: url('https://i.postimg.cc/SQWHkbwY/bg1.jpg');
  background-size: cover; /* Adjusted */
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
  animation: fadeIn 3.5s forwards;
}
#first-sentence {
  font-size: 60px; /* Increase font size */
  font-family: 'Arial', sans-serif; /* Change to a nicer font */
  color: #d5dce4; /* Change color */
}

#second-sentence {
  font-size: 50px;
  color: #d5dce4; /* Default color for the second sentence */
}

.highlight {
  color: #47c76e; 
  font-family: Black Ops One;
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

.slide-from-right {
  animation: slideRight 1s ease-in-out forwards;
  opacity: 0;
}

.slide-from-left {
  animation: slideLeft 2s ease-in-out forwards;
  opacity: 0;
}

@keyframes slideRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>



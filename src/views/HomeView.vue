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
      <h2 class="fade-in slide-from-right" id="second-sentence" style="animation-delay: 1.1s;"> <span class="highlight">Web Developer</span> &  <span class="highlight">UI/UX Designer</span></h2>
    </div><br>
    <a class="animated-btn animate_animated animate__zoomIn" target="_blank" href="https://drive.google.com/file/d/1viv-U8ylUvKe_wClmNwY5iTy81zKIHnZ/view?usp=sharing" download>Download CV</a>
  </div>
</template>


<script>
export default {
  mounted() {
    // Get the button element
    const downloadButton = document.querySelector('.animated-btn');

    // Show the button after 3 seconds
    setTimeout(() => {
      downloadButton.classList.remove('zoomIn');
    }, 3000); // Delay in milliseconds (3s = 3000ms)
    
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
  background-size: cover; 
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
  font-size: 60px;
  font-family: 'Arial', sans-serif; 
  color: #47c3c7;  
}

#second-sentence {
  font-size: 50px;
  color: #47c3c7;  
}

.highlight {
  color: #f0f0f0;
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
  animation: slideRight 2.3s ease-in-out forwards;
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
.animated-btn {
        display: inline-block;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        font-weight: bold;
        color: #fff;
        background-image: linear-gradient(to right, #FF6B6B, #556270);
        animation: gradientAnimation 5s infinite alternate;
        animation: zoomInAnimation 0.6s forwards;
        transition: all 0.3s ease;
        text-decoration: none; /* Remove underline */
    }

    /* CSS Animation for gradient */
    @keyframes gradientAnimation {
        0% {
            background-position: 0% 50%;
        }
        100% {
            background-position: 100% 50%;
        }
    }
     /* Animation for zoom in */
     @keyframes zoomInAnimation {
        from {
            transform: scale(0);
            opacity: 0;
        }
        to {
            transform: scale(1);
            opacity: 1;
        }
      }

      .text-container{
        transform: scale(1.1);
      }
    /* Hover effect */
    .animated-btn:hover {
        transform: scale(1.1);
    }
    /* For screens 320px and below */
@media (max-width: 320px) {
  #first-sentence {
    font-size: 30px; /* Adjust font size for small screens */
  }

  #second-sentence {
    font-size: 25px; /* Adjust font size for small screens */
    margin-top: 15px;
  }

  .animated-btn {
    font-size: 14px; /* Make the button text smaller */
    padding: 8px 16px; /* Reduce padding */
  }

  .text-container {
    padding: 10px; /* Add some padding for smaller devices */
    transform: scale(1); /* Adjust scaling */
  }
}

/* For screens 375px and below */
@media (max-width: 375px) {
  #first-sentence {
    font-size: 40px; /* Adjust font size for medium small screens */
  }

  #second-sentence {
    font-size: 35px; /* Adjust font size for medium small screens */
    margin-top: 20px;
  }

  .animated-btn {
    font-size: 15px; /* Slightly larger button text */
    padding: 10px 18px; /* Adjust padding */
  }

  .text-container {
    transform: scale(1.05); /* Scale adjustment */
  }
}

/* For screens 425px and below */
@media (max-width: 425px) {
  #first-sentence {
    font-size: 45px; /* Adjust font size for medium screens */
  }

  #second-sentence {
    font-size: 40px; /* Adjust font size for medium screens */
    margin-top: 25px;
  }

  .animated-btn {
    font-size: 16px; /* Set button font size */
    padding: 12px 20px; /* Adjust padding */
  }

  .text-container {
    transform: scale(1.05); /* Scale adjustment */
  }
}

</style>



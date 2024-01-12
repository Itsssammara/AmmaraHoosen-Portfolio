<template>
  <div class="home">
    <div class="image">
      <img src="https://i.postimg.cc/Nj1SMdLM/propic-360.png" class="profile-image">
    </div>
    <h1 class="slide-in">Hi, my name is Ammara Hoosen</h1>
    <h2 class="slide-in">ASPIRING UI/UX DEVELOPER</h2>
  </div>
</template>

<script>
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #b45757;
  background-image: url('https://i.ibb.co/DKkMz21/bg-gif.gif');
  background-size: cover;
  background-position: center;
}

h1, h2 {
  color: #b45757;
  font-family: fantasy;
  opacity: 0;
  margin-bottom: 20px;
}

.slide-in {
  animation: slideIn 1s forwards;
}

@keyframes slideIn {
  from {
    transform: translateY(50px); /* Adjust this value to control the starting position */
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.image {
  margin-top: 20px;
}

.profile-image {
  width: 200px; /* Adjust as needed */
  height: auto;
  border-radius: 50%;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
}
</style>

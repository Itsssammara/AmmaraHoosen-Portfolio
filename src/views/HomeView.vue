<template>
  <div class="home">
    <h1 class="slide-in">Welcome to my Portfolio</h1>
    <div class="image">
      <img src="https://cdn-thumbs.imagevenue.com/cc/d7/6a/ME17GC7I_t.jpg" alt="Portfolio Image" class="w-25">
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
* {
  text-align: center;
  background: fixed;
  width: 100%;
  background-color: #b45757;
  background-size: 1400px; /* Adjust as needed */
  background-position: center; /* Adjust as needed */
}

.home {
  padding: 20px;
}

h1 {
  color: #fff;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  opacity: 0; /* Initially set the opacity to 0 */
}

.slide-in {
  animation: slideIn 1s forwards; /* 1s duration, forwards to keep the final state */
}

@keyframes slideIn {
  from {
    transform: translateX(-100%); /* Start from the left */
    opacity: 0;
  }
  to {
    transform: translateX(0); /* Move to the original position */
    opacity: 1;
  }
}

.home-image {
  border-radius: 50%;
  margin-right: 20px;
  margin-top: 3%;
}
</style>
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link :to="{name:'Home'}" class="nav-link">Home</router-link>
      <router-link :to="{name:'About'}" class="nav-link">About</router-link>
      <router-link :to="{name:'Resume'}" class="nav-link">Resume</router-link>
      <router-link :to="{name:'Projects'}" class="nav-link">Projects</router-link>
      <router-link :to="{name:'Testimonials'}" class="nav-link">Testimonials</router-link>
      <router-link :to="{name:'Contact'}" class="nav-link">Contact</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style scoped>
.navbar {
  padding: 10px;
  text-align: center;
}

.nav-link {
  color: rgb(81, 206, 210);
  margin: 0 10px; /* Add spacing between links */
  padding: 5px 10px;
}

.nav-link:hover {
  border-bottom: 2px solid #fff;
}
</style>

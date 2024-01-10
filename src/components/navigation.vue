<template>
    <div>
      <nav class="navbar">
        <router-link :to="{name:'Home'}">Home</router-link> |
        <router-link :to="{name:'About'}">About</router-link> |
        <router-link :to="{name:'Resume'}">Resume</router-link> |
        <router-link :to="{name:'Projects'}">Projects</router-link> |
        <router-link :to="{name:'Testimonials'}">Testimonials</router-link> |
        <router-link :to="{name:'Contact'}">Contact</router-link> 
      </nav>
      <router-view/>
    </div>
  </template>
  
  <style scoped>
  .navbar {
    background-color: #06021d;
    padding: 10px;
    text-align: center;
  }
  .navbar a {
    color: #fff;
    text-decoration: none;
    margin: 0 5px;
    padding: 5px 10px;
  }
  
  .navbar a:hover {
    border-bottom: 2px solid #fff;
  }
  </style>
  
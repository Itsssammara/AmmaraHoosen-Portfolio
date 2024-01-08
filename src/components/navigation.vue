<template>
    <div>
        <nav>
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


<style>
</style>
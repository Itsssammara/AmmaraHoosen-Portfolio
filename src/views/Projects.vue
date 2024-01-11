<template>
    <div class="projects">
     <div ><h1>Projects </h1></div>
       <div class="cards">
        
            <div v-for="project in $store.state.projects" :key="project.id" class="project-card">
                <img :src="project.url" class="project-image" alt="projectcard">
                <div class="projectinfo">
                    <h2 class="project-name">{{ project.name }}</h2>
                    <p class="project-text">{{ project.description }}</p>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
export default{
    // data() {
    //     return {
    //         projectData: projectData,
    //     };
    // },
    computed:{
        fetchProjects(){
            this.$store.dispatch('fetchProjects')
        }
    },
    mounted(){
        this.fetchProjects
    }
};
</script>
<style scoped>
 h1{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 }
.projects{
 background-color: #b45757;
 text-align: center;
 background: fixed;
 width: auto;
 background-size: cover; 
 background-position: center; 
}
</style>
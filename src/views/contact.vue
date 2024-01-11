<template>
    <div class="contact">
        <h1>location and contact form</h1>
        <footers/>
    </div>
</template>

<script>
import footers from '@/components/footer.vue'
export default {
  components:{
      footers
    },
}
</script>

<style scoped>
 h1{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 }
.contact{
padding: 20px;
background-color: #b45757;
color: #fff;
width: auto;
background-size: cover; /* Adjust as needed */
background-position: center; /* Adjust as needed */
}
</style>
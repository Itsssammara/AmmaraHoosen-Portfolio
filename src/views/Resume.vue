<template>
    <div class="resume">
        <h1>Education</h1>
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
.resume{
 padding: 20px;
 text-align: center;
 background: fixed;
 width: auto;
 background-size: cover; 
 background-position: center; 
}
</style>
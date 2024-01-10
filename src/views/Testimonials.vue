<template>
    <div class="testimonials">
     <div ><h1>Testimonials </h1></div>
       <div class="cards">
            <div v-for="testimonial in $store.state.testimonials" :key="testimonial.id" class="testimonial-card">
                <img :src="testimonial.url" class="testimonial-image" alt="testimage">
                <div class="testinfo">
                    <h2 class="test-name">{{ testimonial.name }}</h2>
                    <p class="test-text">{{ testimonial.message }}</p>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
export default{
    // data() {
    //     return {
    //         testimonialData: testimonialData,
    //     };
    // },
    computed:{
        fetchTestimonials(){
            this.$store.dispatch('fetchTestimonials')
        }
    },
    mounted(){
        this.fetchTestimonials
    }
};
</script>

<style scoped>
 h1{
  margin-top: 1px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
 }

.testimonials {
  color: #fff;
  text-align: center;
  background: fixed;
  width: auto;
  background-image: url('https://drive.google.com/uc?id=1jFEVA_nynEQXcJ9Wd-NVt8Rk1rAlv_bF');
  background-size: cover; /* Adjust as needed */
  background-position: center; /* Adjust as needed */
  background-color: #904545;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px; /* Adjust as needed */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 154px;
  margin-top: 60px;
}

.testimonial-card {
  margin: 15px; /* Adjust as needed */
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.testimonial-card:hover {
  box-shadow: 0 8px 16px rgba(10, 10, 10, 0.2);
  transform: scale(1.09); /* Increase size on hover */
}

.testimonial-image {
  width: 100%; /* Adjust as needed */
  max-width: 200px; /* Adjust as needed */
  border-radius: 50%;
  margin-bottom: 10px; /* Adjust as needed */
}

.test-info {
  text-align: left;
}

.test-name {
  font-size: 1.5em;
  margin-bottom: 5px; /* Adjust as needed */
}

.test-text {
  font-style: italic;
  color: #555;
}
</style>
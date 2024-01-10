<template>
    <div class="testimonials">
       <div class="cards">
            <div v-for="testimonials in $store.state.testimonial" :key="testimonials.id" class="testimonial-card">
                <img :src="testimonials.image" class="testimonial-image" alt="testimage">
                <div class="testinfo">
                    <h2 class="test-name">{{ testimonials.name }}</h2>
                    <p class="test-text">{{ testimonials.testimonial }}</p>
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
.testimonials{
 text-align: center;
 background: fixed;
 width: auto;
 background-image: url('https://drive.google.com/uc?id=1jFEVA_nynEQXcJ9Wd-NVt8Rk1rAlv_bF');
 background-size: cover; /* Adjust as needed */
 background-position: center; /* Adjust as needed */
}
.testimonials {
  text-align: center;
  background: fixed;
  width: auto;
  background-image: url('https://drive.google.com/uc?id=1jFEVA_nynEQXcJ9Wd-NVt8Rk1rAlv_bF');
  background-size: cover; /* Adjust as needed */
  background-position: center; /* Adjust as needed */
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px; /* Adjust as needed */
}

.testimonial-card {
  margin: 15px; /* Adjust as needed */
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
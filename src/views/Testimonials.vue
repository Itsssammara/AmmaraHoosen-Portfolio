<template>
    <div class="testimonials">
       <div class="cards">
        <div v-for="testimonials in $store.state.testimonial" :key="testimonials.id" class="testimonial-card">
            <img src="testimonials.image" class="testimonial-imag" alt="testimage">
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
        fetchTestimonial(){
            this.$store.dispatch('fecthTestimonials')
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
</style>
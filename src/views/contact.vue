<template>
  <div class="contact-container">
    <div class="contact-form">
      <h2>Lets get in touch!</h2>
      <p>If you have any questions or inquiries, please feel free to contact us using the form below.</p>
      <form @submit.prevent="submitForm" class="form">
        <label for="name">Name:</label>
        <input v-model="formData.name" type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input v-model="formData.email" type="email" id="email" name="email" required>
        <label for="message">Message:</label>
        <textarea v-model="formData.message" id="message" name="message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
    <div class="contact-details">
      <div>
        <h2>Contact Details</h2>
        <p><i class="bi bi-envelope"></i>hoosenammara@gmail.com</p>
        <p><i class="bi bi-telephone"></i>074 524 8576</p>
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/ammara-hoosen-364913288" target="_blank"><i class="bi bi-linkedin"></i></a>
          <a href="https://github.com/Itsssammara" target="_blank"><i class="bi bi-github"></i></a>
          <a href="https://www.instagram.com/marie_paints_?utm_source=qr&igsh=MzNlNGNkZWQ4Mg%3D%3D" target="_blank"><i class="bi bi-instagram"></i></a>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/bgVMZQx/image-480.png" alt="map">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Implement form submission logic here
      console.log('Form Submitted:', this.formData);
      // You can add your form submission logic here, like sending data to an API
    }
  }
};
</script>

  
  <style scoped>
.contact-container {
  background-image: url('https://i.postimg.cc/sxxwmG6y/Tropical-Leaf-Wandbild-f-r-das-Dschungel-Feeling-zu-Hause.jpg');
  display: flex;
  justify-content: space-between;
  padding: 40px;
}
  
  .contact-form,
  .contact-details {
    flex: 1;
  }
  
  .contact-form {
    /* Add styling for the contact form section */
    background-color: #f8f9fa;
    padding: 10px;
    border-radius: 8px;
    margin-right: 20px;
  }
  
  .contact-details {
    /* Add styling for the contact details section */
    background-color: #fff;
    padding: 11px;
    border-radius: 8px;
    height: 70vh;
    margin-top: 20px;
  }
  .contact-form {
            margin-top: 20px;
        }
        label {
            display: block;
            margin-bottom: 10px;
        }
        input[type="text"],
        input[type="email"],
        textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        textarea {
            height: 150px;
        }
        button[type="submit"] {
            background-color: #333;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .contact-details i {
          margin-right: 10px;
        }
        .social-icons {
          margin-top: 10px;
        }

        .social-icons a {
         margin-right: 10px; /* Adjust the spacing between icons */
         color: #333; /* Set the icon color */
        }
        @media only screen and (max-width: 768px) {
  .contact-container {
    flex-direction: row; /* Switch to a row layout on larger screens */
  }

  .contact-form,
  .contact-details {
    margin-bottom: 0; /* Remove the margin between sections in the row layout */
  }
}
        
  </style>
  
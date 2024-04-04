<template>
  <div class="contact-container">
    <div class="container">
      <h1>Get In Touch</h1>
      <form action="https://formspree.io/f/mrgnynzb" target="_blank" method="POST">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <div class="form-btn">
          <input type="submit" value="Submit">
        </div>
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
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13235.946374821839!2d18.492211959253602!3d-33.967184071022515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc449f313450dd%3A0x459cb4fa2f12472b!2sAthlone%2C%20Cape%20Town%2C%207760!5e0!3m2!1sen!2sza!4v1712222339375!5m2!1sen!2sza"
         width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import footers from '@/components/footer.vue'
import spinners from '@/components/spinner.vue'
export default {
  components: {
    footers,
    spinners
  },
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
    display: flex;
    justify-content: space-between;
    align-items: flex-start; /* Align items at the start */
    padding: 40px;
  }

  .container {
    flex: 1; /* Take up remaining space */
    margin-right: 20px; /* Provide some spacing between form and details */
  }

  .contact-details {
  width: 30%; 
  background-color: #fff;
  padding: 11px;
  border-radius: 8px;
  margin-top: 20px;
  opacity: 0.7; /* Adjust the opacity as needed */
}

.contact-container {
  background-image: url('https://i.postimg.cc/SQWHkbwY/bg1.jpg');
  background-size: cover;
  display: flex;
  justify-content: space-between;
  padding: 40px;
}

h1{
  color: #f8f9fa;
  font-family: Black Ops One;
}
h2{
  color: #343131;
  font-family: Black Ops One;
}
  .contact-form,
  .contact-details {
    flex: 1;
  }
  
  .contact-form {
    background-color: #f8f9fa;
    padding: 10px;
    border-radius: 8px;
    margin-right: 20px;
  }
  /* .contact-details {
    background-color: #fff;
    padding: 11px;
    border-radius: 8px;
    height: 40vh;
    margin-top: 20px;
  } */
  .contact-form {
            margin-top: 20px;
        }
        label {
            display: block;
            margin-bottom: 10px;
            color: white;
            margin-right:70%;
        }
        input[type="text"],
        input[type="email"],
        textarea {
            width: 80%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            opacity: 50%;
        }
        textarea {
            height: 150px;
            opacity: 50%;
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
         margin-left: 10px; 
         color: #a707bd; 
         font-size: 24px;
         transition: transform 0.3s ease;
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
/* Update the existing media query for responsiveness */
@media only screen and (max-width: 768px) {
  .contact-container {
    flex-direction: column; /* Change flex direction to column for smaller screens */
    padding: 20px; /* Adjust padding */
  }

  .contact-form,
  .contact-details {
    margin-right: 0; /* Remove right margin for both sections */
    margin-bottom: 20px; /* Add bottom margin to create spacing between sections */
    padding: 20px; /* Adjust padding */
  }

  input[type="text"],
  input[type="email"],
  textarea {
    margin-bottom: 10px; /* Reduce bottom margin for form inputs */
  }

  .contact-details {
    height: auto;
  }

  .social-icons {
    margin-top: 10px; /* Adjust spacing for social icons */
  }
}
.form-btn {
        text-align: center;
        margin-top: 20px;
    }

    .form-btn input[type="submit"] {
        background-color: #b3acb7a2;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
        position: relative;
        overflow: hidden;
        width: 100px;
    }

    .form-btn input[type="submit"]:hover {
        background-color: #201a22; /* Pink color */
    }

    .form-btn input[type="submit"]:hover::before {
        content: "";
        position: absolute;
        background: rgba(255, 105, 180, 0.5); /* Light pink with some transparency */
        top: 50%;
        left: 50%;
        width: 300%;
        height: 300%;
        transform: translate(-50%, -50%);
        transition: width 0.5s, height 0.5s, opacity 0.5s;
        border-radius: 50%;
        z-index: 1;
    }

    .form-btn input[type="submit"]:hover::after {
        content: "";
        position: absolute;
        background: rgba(255, 105, 180, 0.5); /* Light pink with some transparency */
        top: 50%;
        left: 50%;
        width: 300%;
        height: 300%;
        transform: translate(-50%, -50%);
        transition: width 0.5s, height 0.5s, opacity 0.5s;
        border-radius: 50%;
        z-index: 1;
    }

    .form-btn input[type="submit"]:hover::before,
    .form-btn input[type="submit"]:hover::after {
        animation: glow 1s infinite alternate;
    }

    @keyframes glow {
        0% {
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            width: 300%;
            height: 300%;
            opacity: 0;
        }
    }
  </style>
  
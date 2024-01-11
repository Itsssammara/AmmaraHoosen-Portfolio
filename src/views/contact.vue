<template>
  <div class="contact-container">
    <div class="contact-form">
      <h2>Lets get in touch!</h2>
      <p>If you have any questions or inquiries, please feel free to contact us using the form below.</p>
      <form action="https://formspree.io/your-email-here" method="POST" class="contact-form">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
    <div class="contact-details">
      <!-- Your contact details go here -->
      <div>
        <h2>Contact Details</h2>
        <p>Email: example@example.com</p>
        <p>Phone: +1 (123) 456-7890</p>
        <!-- Add more contact details as needed -->
      </div>
    </div>
  </div>
</template>

  
  <style scoped>
  .contact-container {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
  
  .contact-form,
  .contact-details {
    flex: 1;
  }
  
  .contact-form {
    /* Add styling for the contact form section */
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
  }
  
  .contact-details {
    /* Add styling for the contact details section */
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
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
  </style>
  
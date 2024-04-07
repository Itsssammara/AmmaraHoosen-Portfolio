<template>
  <div id="app">
    <div class="about">
      <div class="about-content"><br>
        <h1>About Me</h1><br>      
        <div class="about-image">
          <img src="https://cdn-thumbs.imagevenue.com/cc/d7/6a/ME17GC7I_t.jpg" alt="Profile Image">
        </div>
        <div class="about-details">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="box" style="animation: fadeInLeft 1s forwards;">
                  <p>Greetings! My name is Ammara, and I am fueled by a fervent passion for seizing every opportunity that comes my way. <br> I take great pride in my innate ability to not only take initiative but also to continually embrace new knowledge and skills with an insatiable hunger for growth.
                  Since childhood, I have found myself drawn to the mesmerizing worlds of art and technology, where creativity intertwines seamlessly with innovation. <br> It is this intersection that has guided me towards the exciting realms of Web Development and UI/UX design.</p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="box2" style="animation: fadeInLeft 1s forwards;">
                  <ul>
                    <li><strong>Date of Birth :</strong> October 21, 2004</li>
                    <li><strong>Location : </strong> Athlone, Cape town</li>
                    <li><strong>Hobbies : </strong></li>
                    <ul>
                      <li>Reading</li>
                      <li>Kick-boxing</li>
                      <li>Watching anime</li>
                      <li>Painting</li>
                    </ul>
                  </ul>
                  <div class="social-icons">
                    <a href="https://www.linkedin.com/in/ammara-hoosen-364913288" target="_blank"><i class="bi bi-linkedin"></i></a>
                    <a href="https://github.com/Itsssammara" target="_blank"><i class="bi bi-github"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  min-height: 00vh;
  background-repeat: no-repeat;
  background-color: #f0f0f0;
  background-image: url('https://i.postimg.cc/SQWHkbwY/bg1.jpg');
  background-size: cover;
}

.about-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.about-image img {
  border-radius: 50%;
  margin-right: 20px;
  margin-top: 3%;
}

.box,
.box2 {
  width: 600px; 
  background-color: rgba(2, 1, 1, 0.5);
  box-shadow: 0 0 20px blue;
  border-radius: 20px;
  margin: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

h1 {
  color: #f0f0f0;
  font-family: Black Ops One;
}

.about-details {
  color: #fff;
  margin-top: 4%;
  font-family: Roboto Condensed;
}

p {
  margin-bottom: 15px;
}

ul li {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

ul li::before {
  content: '\2022';
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.about {
  text-align: center;
  background-color: #f0f0f0;
  padding: 20px; 
  flex-grow: 1;
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

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.social-icons {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-icons a {
  margin: 0 5px;
  color: #a707bd;
  font-size: 24px;
  transition: transform 0.3s ease;
  animation: moveInOut 0.6s infinite alternate;
}

@keyframes moveInOut {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}
/* Media Query for smaller screens */
@media (max-width: 768px) {
  .box,
  .box2 {
    width: 100%; 
    margin-bottom: 30px;
    margin-left: 0%;/* Change width for smaller screens */
  }
}
</style>

<template>
  <div class="portfolio">
    <div class="container">
      <div class="sectionHead">
        <h1>Portfolio</h1>
        <h6>Projects I made</h6>
      </div>
      <div class="portfolioItem">
        <div
          class="portfolioDescription has-margin-right"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h6>Golang</h6>
          <h2>Currency Converter (In Dev.)</h2>
          <p align="left">
            <b>Platform：</b>Terminal<br />
            <b>Front：</b>Huh <br />
            <b>Back：</b>Golang<br />
            <b>Techniques：</b>Golang、Huh<br />
            <b>Tools：</b>Huh<br />
            <b>Description:</b><br />
            Golang terminal application for converting currencies from different countries.
          </p>
          <a
            href="https://github.com/NickChunglolz/currency-converter"
            class="cta badge"
            >View Details</a
          >
        </div>
        <div class="portfolioImg" data-aos="fade-left" data-aos-delay="600">
          <img v-lazy="require('../assets/portfolio/currencyconverter/image.png')" />
        </div>
      </div>
      <div class="portfolioItem">
        <div
          class="portfolioDescription has-margin-right"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h6>Golang & Python & Microservices</h6>
          <h2>Stock Advisor (In Dev.)</h2>
          <p align="left">
            <b>Platform：</b>AWS<br />
            <b>Front：</b>HTMX、Templ <br />
            <b>Back：</b>Golang、Fiber、Pyhon、Flask、Redis、Postgres<br />
            <b>Techniques：</b>REST、Event-Driven Programming、CQRS、Clean Architecture、Cron Job、Machine Leanring<br />
            <b>Tools：</b>Huh<br />
            <b>Description:</b><br />
            Golang & Python microservices for querying differnt countries' stocks and giving advice from setting strategy with notifications.
          </p>
          <a
            href="https://github.com/NickChunglolz/stock-advisor"
            class="cta badge"
            >View Details</a
          >
        </div>
        <div class="portfolioImg" data-aos="fade-left" data-aos-delay="600">
          <img v-lazy="require('../assets/portfolio/stockadvisor/image.png')" />
        </div>
      </div>
      <div class="portfolioItem">
        <div
          class="portfolioDescription has-margin-right"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h6>Machine Learning && Web Dev.</h6>
          <h2>My Chat Application (In Dev.)</h2></br>
          <h2>
            <a class="badge" href="https://chatapp.nickchunglolz.com/"
              >TRY ME!
            </a>
          </h2>
          <p align="left">
            <b>Platform：</b>AWS<br />
            <b>Front：</b>React.js <br />
            <b>Back：</b>Python、Pytorch、NLTK、Flask、Socket.io<br />
            <b>Techniques：</b>REST、WebSocket、WebRTC、ML<br />
            <b>Tools：</b>Firebase、AWS Lambda、AWS Amplify<br />
            <b>Description:</b><br />
            My chat application that icludes Nicky Chatbot, WebRTC Stream, and
            some new stuff incomming...
          </p>
          <a
            href="https://bitbucket.org/nickchungios/workspace/projects/MYW"
            class="cta badge"
            >View Details</a
          >
        </div>
        <div class="portfolioImg" data-aos="fade-left" data-aos-delay="600">
          <img v-lazy="require('../assets/portfolio/chatbot/01.png')" />
        </div>
      </div>
      <div class="portfolioItem">
        <div
          class="portfolioImg has-margin-right"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <img v-lazy="require('../assets/portfolio/barcode/Home.png')" />
        </div>
        <div
          class="portfolioDescription"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <h6>MindSphere Web Development</h6>
          <h2>Barcode Shipping IoT Demonstration Applicaion</h2>
          <p align="left">
            <b>Platform：</b>MindSphere<br />
            <b>Front：</b>Vue.js <br />
            <b>Back：</b>Node.js、Express、Socket.io、mongoDB<br />
            <b>Techniques：</b>REST、WebSocket、Cache Control<br />
            <b>Description:</b><br />
            A PoC application that develops for barcode shipping operator and
            monitors usage base on a biotech company.
          </p>
          <a
            href="https://bitbucket.org/account/user/mindspherelolz/projects/BAR"
            class="cta badge"
            >View Details</a
          >
        </div>
      </div>
      <div class="portfolioItem">
        <div
          class="portfolioDescription has-margin-right"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h6>MindSphere Web Development</h6>
          <h2>Smart Building IoT Demonstration Application</h2>
          <p align="left">
            <b>Platform：</b>MindSphere<br />
            <b>Front：</b>Vue.js <br />
            <b>Back：</b>Node.js、Express、Socket.io、mongoDB<br />
            <b>Techniques：</b>REST、WebSocket<br />
            <b>Description:</b><br />
            A PoC application that develops for Siemens' IoT green build concept
            with our Smart Infrastructure team.
          </p>
          <a
            href="https://bitbucket.org/account/user/mindspherelolz/projects/GREEN"
            class="cta badge"
            >View Details</a
          >
        </div>
        <div class="portfolioImg" data-aos="fade-left" data-aos-delay="600">
          <img v-lazy="require('../assets/portfolio/smartbuilding/Home.png')" />
        </div>
      </div>
      <div class="portfolioItem">
        <div
          class="portfolioImg has-margin-right"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <img
            v-lazy="require('../assets/portfolio/automationshow/MSP01.png')"
          />
        </div>
        <div
          class="portfolioDescription"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <h6>MindSphere Web Development</h6>
          <h2>MindSphere Dashboard for 2019 Taipei Automation Show</h2>
          <p align="left">
            <b>Platform：</b>MindSphere<br />
            <b>Front：</b>Vue.js <br />
            <b>Back：</b>MindSphere API<br />
            <b>Techniques：</b>REST<br />
            <b>Description:</b><br />
            A dashboard demo application that develops for Siemens' MindSphere
            booth of the Taipei automation show.
          </p>
          <a
            href="https://bitbucket.org/mindspherelolz/mindspherebooth/src/master/"
            class="cta badge"
            >View Details</a
          >
        </div>
      </div>
      <div class="portfolioItem">
        <div
          class="portfolioDescription has-margin-right"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h6>MindSphere Web Development</h6>
          <h2>Dashboard of Kuka Arm for 2019 Taipei Automation Show</h2>
          <p align="left">
            <b>Platform：</b>MindSphere<br />
            <b>Front：</b>Vue.js <br />
            <b>Back：</b>MindSphere API<br />
            <b>Techniques：</b>REST<br />
            <b>Description:</b><br />
            A dashboard demo application that develops for cooperation with
            KUKA's booth of the Taipei automation show.
          </p>
          <a
            href="https://bitbucket.org/mindspherelolz/kukademoapp/src/master/"
            class="cta badge"
            >View Details</a
          >
        </div>
        <div class="portfolioImg" data-aos="fade-left" data-aos-delay="600">
          <img
            v-lazy="require('../assets/portfolio/automationshow/KUKA01.png')"
          />
        </div>
      </div>
      <div class="portfolioItem">
        <div
          class="portfolioImg has-margin-right"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <img v-lazy="require('../assets/portfolio/taipower/01.png')" />
        </div>
        <div
          class="portfolioDescription"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <h6>Web Development</h6>
          <h2>Taiwan Power Data Grabbing Application</h2>
          <p align="left">
            <b>Platform：</b>Heroku || MindSphere<br />
            <b>Front：</b>Vue.js <br />
            <b>Back：</b
            >Python、Flask、Pandas、BeautifulSoup、PyMongo、Docker、Node-Red<br />
            <b>Techniques：</b>REST<br />
            <b>Description:</b><br />
            A data grabbing application that develops for automatization
            Siemens' GP department's daily data log operations.
          </p>
          <a
            href="https://bitbucket.org/mindspherelolz/taipowerdata/src/master/"
            class="cta badge"
            >View Details</a
          >
        </div>
      </div>
      <div class="portfolioItem">
        <div
          class="portfolioDescription has-margin-right"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h6>Machine Learning</h6>
          <h2>Traffic Identification</h2>
          <p align="left">
            <b>Tools：</b>Python、Yolo、OpenCV、Numpy、Matplotlib、Google
            Vision<br />
            <b>Description:</b><br />
            A violation identification application that develops for our origin
            expert topic, red line, object, car plate identification.
          </p>
          <a href="#" class="cta badge">View Details</a>
        </div>
        <div class="portfolioImg" data-aos="fade-left" data-aos-delay="600">
          <img v-lazy="require('../assets/portfolio/traffic/01.png')" />
        </div>
      </div>
      <div class="portfolioItem">
        <div
          class="portfolioImg has-margin-right"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <img v-lazy="require('../assets/portfolio/handwriting/01.png')" />
        </div>
        <div
          class="portfolioDescription"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <h6>Machine Learning</h6>
          <h2>Handwriting Application</h2>
          <p align="left">
            <b>Platform：</b>IOS<br />
            <b>Front：</b>Swift、Vision、CoreML<br />
            <b>Back：</b>Keras<br />
            <b>Description:</b><br />
            Detecting handwriting number(1~9) by transferring to photo.
          </p>
          <a
            href="https://bitbucket.org/nickchungios/handwritingapp/src/master/"
            class="cta badge"
            >View Details</a
          >
        </div>
      </div>
      <div class="portfolioItem">
        <div
          class="portfolioDescription has-margin-right"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h6>IOS Development</h6>
          <h2>Smack Chat Application</h2>
          <p align="left">
            <b>Platform：</b>IOS<br />
            <b>Front：</b>Swift<br />
            <b>Back：</b>Node.js、Passport、Jwt、Socket.io<br />
            <b>Techniques：</b>REST、WebSocket<br />
            <b>Description:</b><br />
            An IOS chat room application that develops for learning about IOS
            Swift development.
          </p>
          <a
            href="https://bitbucket.org/nickchungios/smack/src/master/"
            class="cta badge"
            >View Details</a
          >
        </div>
        <div class="portfolioImg" data-aos="fade-left" data-aos-delay="600">
          <img v-lazy="require('../assets/portfolio/smack/01.png')" />
        </div>
      </div>
      <div class="portfolioItem">
        <div
          class="portfolioImg has-margin-right"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <img v-lazy="require('../assets/portfolio/yunapp/01.png')" />
        </div>
        <div
          class="portfolioDescription"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <h6>IOS Development</h6>
          <h2>YunAPP</h2>
          <p align="left">
            <b>Platform：</b>IOS<br />
            <b>Front：</b>Swift<br />
            <b>Description:</b><br />
            A PoC front-end model for the 2017 Yuntech dream contest to display
            our campus information application concept.
          </p>
          <a
            href="https://bitbucket.org/nickchungios/yunapp/src/master/"
            class="cta badge"
            >View Details</a
          >
        </div>
      </div>
      <div class="portfolioItem">
        <div
          class="portfolioDescription has-margin-right"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h6>IOS Development</h6>
          <h2>Food Truck</h2>
          <p align="left">
            <b>Platform：</b>IOS<br />
            <b>Front：</b>Swift、IOS map<br />
            <b>Back：</b>Node.js、Express<br />
            <b>Techniques：</b>REST<br />
            <b>Description:</b><br />
            A data store application that store the food truck reviews and
            loaction.
          </p>
          <a
            href="https://bitbucket.org/nickchungios/apipractice/src/master/"
            class="cta badge"
            >View Details</a
          >
        </div>
        <div class="portfolioImg" data-aos="fade-left" data-aos-delay="600">
          <img v-lazy="require('../assets/portfolio/foodtruck/01.png')" />
        </div>
      </div>
      <div class="portfolioItem">
        <div
          class="portfolioImg has-margin-right"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <img v-lazy="require('../assets/portfolio/ooshop/01.png')" />
        </div>
        <div
          class="portfolioDescription"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <h6>Java OOP & JSP Web Development</h6>
          <h2>Oh!Oh!Shop</h2>
          <p align="left">
            <b>Front：</b>JSP、Bootstrap<br />
            <b>Back：</b>Java Servlet(MVC)<br />
            <b>Techniques：</b>Design Pattern<br />
            <b>Description:</b><br />
            A shopping website for the OOP course project.
          </p>
          <a
            href="https://bitbucket.org/nickchungios/ooshop/src/master/"
            class="cta badge"
            >View Details</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Portfolio",
};
</script>

<style src="./styles/Portfolio.scss" lang="scss" scoped/>

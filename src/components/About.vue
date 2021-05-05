<template>
  <div class="about">
    <div class="container">
      <div class="profileImg">
        <img
          v-lazy="require('../assets/NickChung.jpg')"
          alt=""
          data-aos="fade-right"
          data-aos-delay="300"
        />
      </div>
      <div class="detail" data-aos="fade-left" data-aos-delay="600">
        <div class="head">
          <h1>About</h1>
          <h6>Myself</h6>
        </div>
        <p align="left">
          Hi! I am Nick Chung. Graduated from the Information Management
          department at the National Yunlin University of Science and
          Technology. ( About one year )<br />
          My first job is an internship position from Siemens AG and duty on
          MindSphere, Siemens IIoT PaaS, I learned a lot about IIoT and
          experienced the Taipei automation show in this duration, and a few
          activities for promoting our IoT services, it is a very cool
          experience for me.<br />
          After the internship, totally about one year, I am working for an
          outsourcing(solutions) company Beyondsoft currently, we work with a
          top imaging services company from the States, helping them to build
          their imaging web services, that based on the Microservices
          structures.<br />
          In addition, I also learned some different development skills in my
          free time(like IOS applications, MQTT, WebSocket, front-end, and
          ML...), I am trying to be better and like different challenges, btw,
          ML(Pytorch) is the prior stuff at my learning stack at present.<br />
          I hope my skills can be helpful to you. <br />
          <b style="font-size: 18px"
            >These first two links are my personal and Siemens' MindSphere
            projects BitBucket(Git repository) link.
          </b>
        </p>
      </div>
      <div class="socialMedia">
        <ul>
          <li data-aos="fade-up" data-aos-delay="900">
            <!-- <a href="https://bitbucket.org/nickchungios/profile/projects/"><i class="fa fa-github"></i></a> -->
            <a href="https://bitbucket.org/nickchungios/profile/projects/"
              ><i class="fa fa-bitbucket"></i
            ></a>
          </li>
          <li data-aos="fade-up" data-aos-delay="900">
            <a href="https://bitbucket.org/mindspherelolz/profile/projects/"
              ><i class="fa fa-bitbucket"></i
            ></a>
          </li>
          <li data-aos="fade-up" data-aos-delay="900">
            <a href="https://www.linkedin.com/in/nickchunglolz/"
              ><i class="fa fa-linkedin"></i
            ></a>
          </li>
          <li data-aos="fade-up" data-aos-delay="900">
            <a href="https://www.instagram.com/nickchunglolz/"
              ><i class="fa fa-instagram"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "About",
};
</script>

<style src="./styles/About.scss" lang="scss" scoped/>

<template>
  <div class="about">
    <div class="container">
      <div class="profileImg">
        <img v-lazy="require('../assets/NickChung.jpg')" alt="" data-aos="fade-right" data-aos-delay="300" />
      </div>
      <div class="detail" data-aos="fade-left" data-aos-delay="600">
        <div class="head">
          <h1>About</h1>
          <h6>Myself</h6>
        </div>
        <p align="left">
          Hi! I'm Nick Chung, a senior software engineer with a full-stack skillset honed by years of experience leading and collaborating on diverse projects across various companies. </br>
          This well-rounded experience allows me to consult, analyze requirements, and deliver solutions – all within the SDLC framework. <br />
          <b style="font-size: 18px">These links are my personal and Siemens' MindSphere
            projects'(Git repositories) and social medias' links.
          </b>
        </p>
      </div>
      <div class="socialMedia">
        <ul>
          <li data-aos="fade-up" data-aos-delay="900">
          <a href="https://github.com/NickChunglolz?tab=repositories">
              <i class="fa fa-github"></i
            ></a>
          </li>
          <li data-aos="fade-up" data-aos-delay="900">
            <a href="https://bitbucket.org/nickchungios/profile/projects/"><i class="fa fa-bitbucket"></i></a>
          </li>
          <li data-aos="fade-up" data-aos-delay="900">
            <a href="https://bitbucket.org/mindspherelolz/profile/projects/"><i class="fa fa-bitbucket"></i></a>
          </li>
          <li data-aos="fade-up" data-aos-delay="900">
            <a href="https://www.linkedin.com/in/nickchunglolz/"><i class="fa fa-linkedin"></i></a>
          </li>
          <li data-aos="fade-up" data-aos-delay="900">
            <a href="https://www.instagram.com/nickchunglolz/"><i class="fa fa-instagram"></i></a>
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

<style src="./styles/About.scss" lang="scss" scoped />

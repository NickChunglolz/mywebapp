<template>
  <div class="experience">
    <div class="container">
      <div class="sectionHead">
        <h1>Work Experience</h1>
        <h6>Pass and current jobs</h6>
      </div>
      <div class="timeline" data-aos="fade-down" data-aos-delay="300">
        <ul>
          <li class="date" data-date="2020 July. - 2020 Present">
            <h1>
              <img
                class="logo"
                v-lazy="require('../assets/beyondsoft.png')"
              />&nbsp;&nbsp;Beyondsoft
            </h1>
            <p>
              <a href="http://www.beyondsoft.com/">Website</a> <br />
              Software Engineer - Cooperate with the U.S company
              (JavaScript/Python as the main usages)
              <br />Product:&nbsp;<a
                href="https://www.adobe.io/apis/creativecloud/photo-imaging-api.html"
                >Link</a
              >
            </p>
          </li>
          <li class="date" data-date="2019 Sep. - 2020 July">
            <h1>
              <img
                class="logo"
                v-lazy="require('../assets/siemens.svg')"
              />&nbsp;&nbsp;MindSphere World
            </h1>
            <p>
              <a href="https://www.mindsphereworld.tw">Website</a> <br />
              Software Engineer Intern - Siemens MindSphere IoT PoC Apps
              Development
            </p>
          </li>
          <li class="date" data-date="2019 July - 2019 August">
            <h1>
              <img
                class="logo"
                v-lazy="require('../assets/siemens.svg')"
              />&nbsp;&nbsp;Siemens AG
            </h1>
            <p>
              <a href="https://siemens.mindsphere.io/en">Website</a> <br />
              Siemens Summer Internship - MindSphere IIoT 工業物聯網
            </p>
          </li>
          <li class="date" data-date="2019 Jan. - 2019 Feb.">
            <h1>
              <img
                class="logo"
                v-lazy="require('../assets/chingjr.png')"
              />&nbsp;&nbsp;Ching Jr Industrial Co., LTD.
            </h1>
            <p>
              <a href="https://chingjr.com">Website</a> <br />
              Part Time - Web Design and Manage (Wordpress)、Server Erection
              (SiteGround)
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Experience",
};
</script>

<style src="./styles/Experience.scss" lang="scss" scoped/>

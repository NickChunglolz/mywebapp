<template>
  <div class="experience">
    <div class="container">
      <div class="sectionHead">
        <h1>Work Experience</h1>
        <h6>Pass and current jobs</h6>
      </div>
      <div class="timeline" data-aos="fade-down" data-aos-delay="300">
        <ul>
          <li class="date" data-date="2021 Sep. - At Present.">
            <h1>
              <img
                class="logo"
                v-lazy="require('../assets/ibm.png')"
              />&nbsp;&nbsp;IBM
            </h1>
            <a class="badge" href="https://www.ibm.com/">Website</a>
            <a class="badge" href="https://www.ibm.com/consulting"
              >IBM Consulting</a
            >
            <p class="job_desc">
              Application Consultant - Solve and Deliver the Client's'
              Requirements of Application
            </p>
          </li>
          <li class="date" data-date="2020 July. - 2021 July">
            <h1>
              <img
                class="logo"
                v-lazy="require('../assets/beyondsoft.png')"
              />&nbsp;&nbsp;Beyondsoft
            </h1>
            <a class="badge" href="http://www.beyondsoft.com/">Website</a>
            <a
              class="badge"
              href="https://www.adobe.io/apis/creativecloud/photo-imaging-api.html"
              >Adobe.io - Photoshop API</a
            >
            <p class="job_desc">
              Software Engineer - Cooperate with the U.S company
              (JavaScript/Python as the main usages)
            </p>
          </li>
          <li class="date" data-date="2019 Sep. - 2020 July">
            <h1>
              <img
                class="logo"
                v-lazy="require('../assets/siemens.svg')"
              />&nbsp;&nbsp;MindSphere World
            </h1>
            <a class="badge" href="https://mindsphereworld.org/japan-tw/"
              >Website</a
            >
            <a class="badge" href="https://siemens.mindsphere.io/en"
              >MindSphere</a
            >
            <p class="job_desc">
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
            <a class="badge" href="https://www.siemens.com/global/en.html"
              >Website</a
            >
            <a class="badge" href="https://siemens.mindsphere.io/en"
              >MindSphere</a
            >
            <p class="job_desc">
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
            <a class="badge" href="https://chingjr.com">Website</a>
            <p class="job_desc">
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

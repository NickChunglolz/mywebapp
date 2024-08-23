<template>
  <div class="experience">
    <div class="container">
      <div class="sectionHead">
        <h1>Work Experience</h1>
        <h6>Pass and current jobs</h6>
      </div>
      <div class="timeline" data-aos="fade-down" data-aos-delay="300">
        <ul>
          <li class="date" data-date="2024 July - At Present.">
            <h1>
              <img
                class="logo"
                v-lazy="require('../assets/suse.svg')"
              />
            </h1>
            <a class="badge" href="https://www.suse.com/">Website</a>
            <a class="badge" href="https://www.suse.com/products/neuvector/"
              >NeuVector</a
            >
            <p class="job_desc">
              Senior Web Developer</br></br>
              ‣ Revamped NeuVector’s open-source container security apps, improving application loading times and optimizing architectural design for better performance and scalability.
            </p>
          </li>
          <li class="date" data-date="2021 Sep. - At Present.">
            <h1>
              <img
                class="logo"
                v-lazy="require('../assets/ibm.png')"
              />
            </h1>
            <a class="badge" href="https://www.ibm.com/">Website</a>
            <a class="badge" href="https://www.ibm.com/consulting"
              >IBM Consulting</a
            >
            <p class="job_desc">
              Application Consultant </br></br>
              ‣ Led the transformation of legacy
              mainframe systems to modern microservices for a railway
              client, including their business strategy and core
              reservation systems, serving 190,000 inbounds daily.</br>
              ‣ Developed large-scale distributed reservation applications
              using Java, DDD, SAGA, and event-driven architecture,
              applying clean architecture principles.</br>
              ‣ Designed stress tests, created batch job functionalities, and
              led full-stack delivery with Java and Angular.</br>
              ‣ Managed requirements and hosted maintenance and
              training sessions.
            </p>
          </li>
          <li class="date" data-date="2020 July - 2021 July">
            <h1>
              <img
                class="logo"
                v-lazy="require('../assets/beyondsoft.png')"
              />
            </h1>
            <a class="badge" href="http://www.beyondsoft.com/">Website</a>
            <a
              class="badge"
              href="https://www.adobe.io/apis/creativecloud/photo-imaging-api.html"
              >Adobe.io - Photoshop API</a
            >
            <p class="job_desc">
              Software Engineer</br></br>
              ‣ Enhanced code quality and
                optimization with JavaScript, Python, and some Go,
                focusing on AWS microservices, testing, and CI/CD with
                containers and Jenkins.
            </p>
          </li>
          <li class="date" data-date="2019 July - 2020 June">
            <h1>
              <img
                class="logo"
                v-lazy="require('../assets/siemens.svg')"
              />
            </h1>
            <a class="badge" href="https://www.siemens.com/global/en.html"
              >Website</a
            >
            <a class="badge" href="https://siemens.mindsphere.io/en"
              >MindSphere</a
            >
            <p class="job_desc">
              IoT Web Developer Intern</br></br>
              ‣ Developed full-stack web
              applications on MinSphere. (IoT PaaS)
              ‣ Introduced MindSphere at the 2019 Taipei Automation
              Show and lectured at the 2019 MindSphere World Taiwan
              IoT Camp in Taoyuan.
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
              Part Time</br></br>
              ‣ Web Design and Manage (Wordpress)、Server Erection
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

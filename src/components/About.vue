<template>
    <div class="about">
        <div class="container">
            <div class="profileImg">
                <img v-lazy="require('../assets/NickChung.jpg')" alt="" data-aos="fade-right" data-aos-delay="300"/>
            </div>
            <div class="detail" data-aos="fade-left" data-aos-delay="600">
                <div class="head">
                    <h1>About</h1>
                    <h6>Myself</h6>
                </div>
                <p align="left">
                    Hi! I am Nick Chung. I am a student of Information Management at National Yunlin University of Science and Technology, now.<br>
                    Last year summer I joined Siemens summer internship and duty on MindSphere, Siemens IIoT PaaS, I learned a lot about IIoT and experienced the Taipei automation show in this duration, it is a very cool experience for me.<br>                
                    After this internship, I working for Siemens' MindSphere World until now, make some applications and help our customer to develop their business by MindSphere.<br>
                    In addition, I also learned some different develop skills in my free time(like IOS applications, MQTT, WebSocket, front-end, and ML...), I am trying to be better and like different challenges.<br>
                    I hope my skills can be helpful to you. <br>
                    <b style="font-size:18px;">These first two links are my personal and Siemens' MindSphere projects BitBucket(Git repository) link. </b>
                </p>
            </div>
            <div class="socialMedia">
                <ul>
                    <li data-aos="fade-up" data-aos-delay="900">
                        <!-- <a href="https://bitbucket.org/nickchungios/profile/projects/"><i class="fa fa-github"></i></a> -->
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
    name: 'About',
}
</script>

<style src="./styles/About.scss" lang="scss" scoped/>

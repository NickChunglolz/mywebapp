<template>
    <div class="portfolio">
        <div class="container">
            <div class="sectionHead">
                <h1>Portfolio</h1>
                <h6>Projects I made</h6>
            </div>
            <div class="portfolioItem">
                <div class="portfolioImg has-margin-right">
                    <img v-lazy="require('../assets/portfolio/barcode/Home.png')"/>
                </div>
                <div class="portfolioDescription">
                    <h6>MindSphere Web Development</h6>
                    <h1>Barcode Shipping IoT Demonstration Applicaion</h1>
                    <p align="left">
                        <b>Platform：</b>MindSphere<br>
                        <b>Front：</b>Vue.js <br>
                        <b>Back：</b>Node.js、Express、Socket.io、mongoDB<br>
                        <b>Techniques：</b>REST、WebSocket、Cache Control<br>
                        <b>Description:</b><br> A PoC application that develops for barcode shipping operator and monitors usage base on a biotech company.
                    </p>
                    <a href="https://bitbucket.org/account/user/mindspherelolz/projects/BAR" class="cta">View Details</a>
                </div>
            </div>
            <div class="portfolioItem">
                <div class="portfolioDescription has-margin-right">
                    <h6>MindSphere Web Development</h6>
                    <h1>Smart Building IoT Demonstration Application</h1>
                    <p align="left">
                        <b>Platform：</b>MindSphere<br>
                        <b>Front：</b>Vue.js <br>
                        <b>Back：</b>Node.js、Express、Socket.io、mongoDB<br>
                        <b>Techniques：</b>REST、WebSocket<br>
                        <b>Description:</b><br> A PoC application that develops for Siemens' IoT green build concept with our Smart Infrastructure team.
                    </p>
                    <a href="https://bitbucket.org/account/user/mindspherelolz/projects/GREEN" class="cta">View Details</a>
                </div>
                <div class="portfolioImg">
                    <img v-lazy="require('../assets/portfolio/smartbuilding/Home.png')"/>
                </div>
            </div>
            <div class="portfolioItem">
                <div class="portfolioImg has-margin-right">
                    <img v-lazy="require('../assets/portfolio/automationshow/MSP01.png')"/>
                </div>
                <div class="portfolioDescription">
                    <h6>MindSphere Web Development</h6>
                    <h1>MindSphere Dashboard for 2019 Taipei Automation Show</h1>
                    <p align="left">
                        <b>Platform：</b>MindSphere<br>
                        <b>Front：</b>Vue.js <br>
                        <b>Back：</b>MindSphere API<br>
                        <b>Techniques：</b>REST<br>
                        <b>Description:</b><br> A dashboard demo application that develops for Siemens' MindSphere booth of the Taipei automation show.
                    </p>
                    <a href="https://bitbucket.org/mindspherelolz/mindspherebooth/src/master/" class="cta">View Details</a>
                </div>
            </div>
            <div class="portfolioItem">
                <div class="portfolioDescription has-margin-right">
                    <h6>MindSphere Web Development</h6>
                    <h1>Dashboard of Kuka Arm for 2019 Taipei Automation Show</h1>
                    <p align="left">
                        <b>Platform：</b>MindSphere<br>
                        <b>Front：</b>Vue.js <br>
                        <b>Back：</b>MindSphere API<br>
                        <b>Techniques：</b>REST<br>
                        <b>Description:</b><br> A dashboard demo application that develops for cooperation with KUKA's booth of the Taipei automation show.
                    </p>
                    <a href="https://bitbucket.org/mindspherelolz/kukademoapp/src/master/" class="cta">View Details</a>
                </div>
                <div class="portfolioImg">
                    <img v-lazy="require('../assets/portfolio/automationshow/KUKA01.png')"/>
                </div>
            </div>
            <div class="portfolioItem">
                <div class="portfolioImg has-margin-right">
                    <img v-lazy="require('../assets/portfolio/taipower/01.png')"/>
                </div>
                <div class="portfolioDescription">
                    <h6>Web Development</h6>
                    <h1>Taiwan Power Data Grabbing Application</h1>
                    <p align="left">
                        <b>Platform：</b>Heroku || MindSphere<br>
                        <b>Front：</b>Vue.js <br>
                        <b>Back：</b>Python、Flask、Pandas、BeautifulSoup、PyMongo、Docker、Node-Red<br>
                        <b>Techniques：</b>REST<br>
                        <b>Description:</b><br> A data grabbing application that develops for automatization Siemens' GP department's daily data log operations.
                    </p>
                    <a href="https://bitbucket.org/mindspherelolz/taipowerdata/src/master/" class="cta">View Details</a>
                </div>
            </div>
            <div class="portfolioItem">
                <div class="portfolioDescription has-margin-right">
                    <h6>Machine Learning</h6>
                    <h1>Traffic Identification</h1>
                    <p align="left">
                        <b>Tools：</b>Python、Yolo、OpenCV、Numpy、Matplotlib、Google Vision<br>
                        <b>Description:</b><br> A violation identification application that develops for our origin expert topic, red line, object, car plate identification.
                    </p>
                    <a href="#" class="cta">View Details</a>
                </div>
                <div class="portfolioImg">
                    <img v-lazy="require('../assets/portfolio/traffic/01.png')"/>
                </div>
            </div>
            <div class="portfolioItem">
                <div class="portfolioImg has-margin-right">
                    <img v-lazy="require('../assets/portfolio/handwriting/01.png')"/>
                </div>
                <div class="portfolioDescription">
                    <h6>Machine Learning</h6>
                    <h1>Handwriting Application</h1>
                    <p align="left">
                        <b>Platform：</b>IOS<br>
                        <b>Front：</b>Swift、Vision、CoreML<br>
                        <b>Back：</b>Keras<br>
                        <b>Description:</b><br> Detecting handwriting number(1~9) by transferring to photo.
                    </p>
                    <a href="https://bitbucket.org/nickchungios/handwritingapp/src/master/" class="cta">View Details</a>
                </div>
            </div>
            <div class="portfolioItem">
                <div class="portfolioDescription has-margin-right">
                    <h6>IOS Development</h6>
                    <h1>Smack Chat Application</h1>
                    <p align="left">
                        <b>Platform：</b>IOS<br>
                        <b>Front：</b>Swift<br>
                        <b>Back：</b>Node.js、Passport、Jwt、Socket.io<br>
                        <b>Techniques：</b>REST、WebSocket<br>
                        <b>Description:</b><br> An IOS chat room application that develops for learning about IOS Swift development.
                    </p>
                    <a href="https://bitbucket.org/nickchungios/smack/src/master/" class="cta">View Details</a>
                </div>
                <div class="portfolioImg">
                    <img v-lazy="require('../assets/portfolio/smack/01.png')"/>
                </div>
            </div>
            <div class="portfolioItem">
                <div class="portfolioImg has-margin-right">
                    <img v-lazy="require('../assets/portfolio/yunapp/01.png')"/>
                </div>
                <div class="portfolioDescription">
                    <h6>IOS Development</h6>
                    <h1>YunAPP</h1>
                    <p align="left">
                        <b>Platform：</b>IOS<br>
                        <b>Front：</b>Swift<br>
                        <b>Description:</b><br> A PoC front-end model for the 2017 Yuntech dream contest to display our campus information application concept.
                    </p>
                    <a href="https://bitbucket.org/nickchungios/yunapp/src/master/" class="cta">View Details</a>
                </div>
            </div>
            <div class="portfolioItem">
                <div class="portfolioDescription has-margin-right">
                    <h6>IOS Development</h6>
                    <h1>Food Truck</h1>
                    <p align="left">
                        <b>Platform：</b>IOS<br>
                        <b>Front：</b>Swift、IOS map<br>
                        <b>Back：</b>Node.js、Express<br>
                        <b>Techniques：</b>REST<br>
                        <b>Description:</b><br> A data store application that store the food truck reviews and loaction.
                    </p>
                    <a href="https://bitbucket.org/nickchungios/apipractice/src/master/" class="cta">View Details</a>
                </div>
                <div class="portfolioImg">
                    <img v-lazy="require('../assets/portfolio/foodtruck/01.png')"/>
                </div>
            </div>
            <div class="portfolioItem">
                <div class="portfolioImg has-margin-right">
                    <img v-lazy="require('../assets/portfolio/ooshop/01.png')"/>
                </div>
                <div class="portfolioDescription">
                    <h6>Java OOP & JSP Web Development</h6>
                    <h1>Oh!Oh!Shop</h1>
                    <p align="left">
                        <b>Front：</b>JSP、Bootstrap<br>
                        <b>Back：</b>Java(MVC)<br>
                        <b>Techniques：</b>Design Pattern<br>
                        <b>Description:</b><br> A shopping website for the OOP course project.
                    </p>
                    <a href="https://bitbucket.org/nickchungios/ooshop/src/master/" class="cta">View Details</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Portfolio',
}
</script>

<style src="./styles/Portfolio.scss" lang="scss" scoped/>

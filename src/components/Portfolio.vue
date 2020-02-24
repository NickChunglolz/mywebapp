<template>
    <div class="portfolio">
        <div class="container">
            <div class="sectionHead">
                <h1>Portfolio</h1>
                <h6>Projects I made</h6>
            </div>
            <div class="portfolioItem">
                <div class="profileImg has-margin-right">
                    <img v-lazy="require('../assets/portfolio/smartbuilding/Home.png')"/>
                </div>
                <div class="portfolioDescription">
                    <h6>Web Development</h6>
                    <h1>Smart Building IoT Demo</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <a href="#" class="cta">View Details</a>
                </div>
            </div>
            <div class="portfolioItem">
                <div class="portfolioDescription has-margin-right">
                    <h6>Web Development</h6>
                    <h1>Smart Building IoT Demo</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <a href="#" class="cta">View Details</a>
                </div>
                <div class="profileImg">
                    <img v-lazy="require('../assets/portfolio/smartbuilding/Home.png')"/>
                </div>
            </div>
            <div class="portfolioItem">
                <div class="profileImg has-margin-right">
                    <img v-lazy="require('../assets/portfolio/smartbuilding/Home.png')"/>
                </div>
                <div class="portfolioDescription">
                    <h6>Web Development</h6>
                    <h1>Smart Building IoT Demo</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <a href="#" class="cta">View Details</a>
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

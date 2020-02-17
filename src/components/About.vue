<template>
    <div class="about">
        <div class="container">
            <div class="profileImg">
                <img v-lazy="require('../assets/NickChung.jpg')"/>
            </div>
            <div class="detail">
                <div class="head">
                    <h1>About</h1>
                    <h6>Myself</h6>
                </div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
            </div>
            <div class="socialMedia">
                <ul>
                    <li>
                        <a href="#"><i class="fa fa-github"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-bitbucket"></i></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/nickchunglolz/"><i class="fa fa-linkedin"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fa fa-instagram"></i></a>
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

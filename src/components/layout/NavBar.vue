<template>
    <div class="NavBar">
        <div class="myName">
            <h1 >Software&nbsp;Engineer</h1>
        </div>
        <div v-if="!mobileView">
            <a class="navBtn" id="chatBox" href="#" onclick="alert('Chat App Is On Building...');"><i class="fa fa-comment"></i></a>
            <a class="navBtn" id="wordsLink" href="#CONTACT" >CONTACT</a>
            <a class="navBtn" id="wordsLink" href="#EXPER" >EXPERIENCES</a>
            <a class="navBtn" id="wordsLink" href="#PORT" >PORTFOLIO</a>
            <a class="navBtn" id="wordsLink" href="#TECH" >TECHNIQUES</a>
            <a class="navBtn" id="wordsLink" href="#ABOUT" >ABOUT</a>
        </div>
        <div v-else class="mobileNav">
            <div class="menuToggler">
                <div class="bar half start"></div>
                <div class="bar"></div>
                <div class="bar half end"></div>
            </div>
            <nav class="topNav">
                <ul class="navList">
                    <li> 
                        <a href="#HOME" class="navLink">Home</a>
                    </li>
                    <li>
                        <a href="#ABOUT" class="navLink">About</a>
                    </li>
                    <li>
                        <a href="#TECH" class="navLink">Techniques</a>
                    </li>
                    <li>
                        <a href="#PORT" class="navLink">Portfolio</a>
                    </li>
                    <li>
                        <a href="#EXPER" class="navLink">Experiences</a>
                    </li>
                    <li>
                        <a href="#CONTACT" class="navLink">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>
/* eslint-disable */
export default {
    name:'NavBar',
    data(){
        return{
            mobileView: true,
            showNav: false
        }
    },
    methods:{
        handleView() {
            this.mobileView = window.innerWidth <= 1300;
            if(this.mobileView){
                $(document).ready(function() {
                    $(document).on('click','.menuToggler', function() {
                        $(this).toggleClass('open');
                        $('.topNav').toggleClass('open');
                    });
                });
            }
        },
        closeNav(event){
            this.showNav = false;
        }
    },
    beforeCreate(){
            $( window ).scroll(function() {
                $('.NavBar').toggleClass('scrollBG', $(this).scrollTop() > $('.NavBar').height());
            });
    },
    created() {
        this.handleView();
        window.addEventListener('resize', this.handleView);
    },
    destroyed(){
         window.removeEventListener('resize', this.handleResize);
    }
}
</script>
<style src="./NavBar.scss" lang="scss" scoped/>
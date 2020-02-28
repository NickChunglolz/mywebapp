<template>
    <div class="contact">
        <div class="container">
            <div class="sectionHead">
                <h1>Contact</h1>
                <h6>Let's connect to each other</h6>
            </div>
            <div class="form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Enter your name..." required/>
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" placeholder="Enter your email..." required/>
                <label for="services">Services:</label>
                <select name="services" id="services">
                    <option value="">Full-Stack Development</option>
                    <option value="">Front-End Development</option>
                    <option value="">Back-End Development</option>
                    <option value="">Other</option>
                </select>
                <label for="subject">Subject:</label>
                <textarea name="subject" id="subject" cols="10" rows="10"></textarea>
                <input type="submit" value="Submit"/>
                <button v-on:click="sendMail" >Submit</button>
            </div>
        </div>
        <footer class="copyright">
          <div class="up" id="up">
            <i class="fas fa-chevron-up"></i>
          </div>
          <p>&copy; 2020 Nick Chung</p>
    </footer>
    </div>
</template>

<script>
/* eslint-disable */
// Services
// const emailServices = import('@/services/email');
export default {
    name: 'Contact',
    // mixins: [emailServices]
    methods: {
        async sendMail(){
            let body = {
                    "userName": "NickChunglolz",
                    "email": "b10523044@yuntech.org.tw",
                    "title": "testing",
                    "content": "testing"
                }
                try{
                    let res = await this.$axios.post('/email',body);
                    console.log(res.data);
                }catch(e){
                    console.log(e);
                }
        }
    }
}
</script>

<style src="./styles/Contact.scss" lang="scss" scoped/>

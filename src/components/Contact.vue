<template>
    <div class="contact">
        <div class="container">
            <div class="sectionHead">
                <h1>Contact</h1>
                <h6>Let's connect to each other</h6>
            </div>
            <div class="form">
                <label for="name">Name:</label>
                <input type="text" v-model="emailBody.userName" id="name" name="name" placeholder="Enter your name..." required/>
                <label for="email">Email:</label>
                <input type="text" v-model="emailBody.email" id="email" name="email" placeholder="Enter your email..." required/>
                <label for="services">Services:</label>
                <select v-model="emailBody.title" name="services" id="services">
                    <option value="">Full-Stack Development</option>
                    <option value="">Front-End Development</option>
                    <option value="">Back-End Development</option>
                    <option value="">Other</option>
                </select>
                <label for="subject">Subject:</label>
                <textarea v-model="emailBody.content" name="subject" id="subject" cols="10" rows="10"></textarea>
                <input type="submit" value="Submit" v-on:click="sendMail(emailBody)"/>
                <!-- <button v-on:click="sendMail(emailBody)" >Submit</button> -->
            </div>
        </div>
        <!-- <footer class="copyright">
          <div class="up" id="up">
            <i class="fas fa-chevron-up"></i>
          </div>
          <p>&copy; 2020 Nick Chung</p>
        </footer> -->
    </div>
</template>

<script>
/* eslint-disable */
// Services
import emailServices from '@/services/email';
export default {
    name: 'Contact',
    mixins: [emailServices]
}
</script>

<style src="./styles/Contact.scss" lang="scss" scoped/>

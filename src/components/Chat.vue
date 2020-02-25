<template>
<div class="container">
    <div class="modal" id="modal">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="img-box">
                        <a class="avatar-link" href="#">
                            <div class="corner-finder"></div>
                            <img v-lazy="require('../assets/NickChung.jpg')" alt="">
                        </a>
                    </div>
                    <div class="active">
                        <h5>Nick Chung</h5>
                        <h6>10 Messages</h6>
                        <div class="email">Email:&nbsp;zxc87523@gmail.com</div>
                    </div>
                    <span class="closeBtn"><i class="fas fa-times-circle"></i></span>
                    <!-- <i class="fas fa-info-circle"></i> -->
                </div>
                <div class="modal-body">
                    <div class="msg-inbox">
                        <div class="chats">
                            <div class="msg-page">
                                <div class="received-chats">
                                    <div class="received-chats-img">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <!-- <div class="input-group-append"> -->
                        <textarea name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
                    <!-- </div> -->
                    <!-- <div class="input-group-append"> -->
                        <span class="send-btn"><i class="fas fa-location-arrow"></i></span>
                    <!-- </div> -->
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
/* eslint-disable */
export default {
    name: 'Chat',
}
</script>

<style src="./styles/Chat.scss" lang="scss" scoped/>
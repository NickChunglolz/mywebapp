/* eslint-disable */
export default {
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
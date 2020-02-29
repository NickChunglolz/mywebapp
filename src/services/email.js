/* eslint-disable */
export default {
    data(){
        return {
            emailBody: {}
        }
    },
    methods: {
        async sendMail(body){
                try{
                    let res = await this.$axios.post('/email',body);
                    alert("Send mail successfully.");
                    return res.data;
                }catch(e){
                    console.log(e);
                }
        }
    }
}
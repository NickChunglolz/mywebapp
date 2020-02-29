/* eslint-disable */
export default {
    data(){
        return {
            emailBody: {},
            reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
        }
    },
    methods: {
        async sendMail(body){
                try{
                    if(this.reg.test(body.email) && body.userName && body.title && body.content){
                        let res = await this.$axios.post('/email',body);
                        alert("Send mail successfully.");
                        return res.data;
                    }else{
                        if(!this.reg.test(body.email)){
                            alert("ERROR：Email Format Error!!");
                        }else{
                            alert("ERROR：Fill The Form Plz!!");
                        }
                    }
                }catch(e){
                    console.log(e);
                }
        }
    }
}
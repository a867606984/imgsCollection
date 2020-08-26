



new Vue({
    el: '#app',
    data: {

        baseData:{},
        uploadImgUrl:{},
        btnDisabled:false,

        userName:"",
        password:""
    },
    components: {
        // 'el-pagination': '',
    },
    mounted() {
    
    },
    methods: {
        
        save(){
            const _this = this;

            let {userName,password} = this;
            
            if(!userName || !password){
                _this.$message({message:"填写不能为空",type:'error'})
               return

            }
            
            _post({
                baseURL: 'http://localhost:3000/',
                url: 'login/login',
                params: {
                    userName,
                    password
                },
                method: 'POST',
                success: function (res) {
                    if(res.code === 200) {
                        _this.$message({message:"登录成功",type:'success'});
                        localStorage.setItem("token",res.data);
                        // location.href = "../home/home.html";
                    }

                },
                failure: function (err) { }
            })
        },
 
    }

})
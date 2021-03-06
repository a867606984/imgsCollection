



new Vue({
    el: '#app',
    data: {

        baseData: {},
        uploadImgUrl: {},
        btnDisabled: false,

    },
    components: {
        // 'el-pagination': '',
    },
    mounted() {
        // this.getData();
    },
    methods: {
        getData() {
            const _this = this;
            _post({
                baseURL: 'http://localhost:3000/',
                url: 'home/findList',
                params: {
                    pageNum: 1,
                    pageSize: 10,
                    searchVal: ""
                },
                headers: {
                    "authorization": localStorage.getItem("token")
                },
                method: 'GET',
                success: function (res) {
                    res.data.data.forEach(item => {
                        item.url = 'http://localhost:3000/' + item.url
                    })

                    _this.imgData = res.data;

                },
                failure: function (err) { }
            })
        },


        uploadImg(params) {
            const _this = this;

            const formdata = new FormData();
            const file = params.file;
            formdata.append("file", file);

            axios.post("http://localhost:3000/upload/uploadImg", formdata, {
                headers: {
                    //头部信息
                    "Content-Type": "multipart/form-data",
                    "cookies": localStorage.getItem("token")
                }
            }).then(res => {
                _this.uploadImgUrl = res.data.data.uploadUrl;
                console.log(_this.uploadImgUrl)
            })
        },
        save() {
            const _this = this;

            let { baseData, uploadImgUrl } = this;

            if (!baseData.title || !baseData.detail || !uploadImgUrl) {
                _this.$message({ message: "有错", type: 'error' })
                return

            }

            _post({
                baseURL: 'http://localhost:3000/',
                url: 'upload/saveImg',
                params: {
                    ...this.baseData,
                    url: this.uploadImgUrl
                },
                method: 'POST',
                headers: {

                },
                success: function (res) {
                    if (res.code === 200) {
                        _this.$message({ message: "保存成功", type: 'success' });
                        // location.href = "../home/home.html";
                    }

                },
                failure: function (err) { }
            })
        },
        handleSuccess(response, file, fileList) {

        },
        handlePreview(e) { },
        handleRemove(e) {
            console.log(e)
        },
    }

})
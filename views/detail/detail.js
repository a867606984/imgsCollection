



new Vue({
    el: '#app',
    data: {
        id: "",

        imgUrl: "",
        iscollect: 0,
        title: "",
        detail: "",
        headimg: "",

        commentList: [],

        commentVal: "",

        isAuth: false
    },
    components: {
        // 'el-pagination': '',
    },
    mounted() {
        this.id = location.href.split('?')[1].split('=')[1];

        this.getData();
    },
    methods: {
        getData() {
            const _this = this;

            _post({
                baseURL: 'http://localhost:3000/',
                url: 'detail/findInfoByid',
                params: {
                    id: this.id
                },
                method: 'GET',
                success: function ({ data }) {
                    _this.imgUrl = 'http://localhost:3000/' + data.url;
                    _this.iscollect = data.iscollect;
                    _this.title = data.title;
                    _this.detail = data.detail;
                    _this.headimg = data.headimg;
                    _this.isAuth = data.isAuth

                },
                failure: function (err) { }
            })

            _post({
                baseURL: 'http://localhost:3000/',
                url: 'detail/findComment',
                params: {
                },
                method: 'GET',
                success: function ({ data }) {
                    _this.commentList = data.reverse();
                    console.log(_this.commentList)

                },
                failure: function (err) { }
            })

        },
        collect() {
            if (!this.isAuth) {
                this.$message({ message: "请先登录", type: 'error' });
                return
            }

            const _this = this;
            _post({
                baseURL: 'http://localhost:3000/',
                url: 'home/updateCollection',
                params: {
                    id: this.id,
                    iscollect:this.iscollect
                },
                method: 'POST',
                success: function (res) {
                    _this.iscollect = !_this.iscollect;

                },
                failure: function (err) { }
            })
        },
        addComment() {
            if (!this.isAuth) {
                this.$message({ message: "请先登录", type: 'error' });
                return
            }

            const _this = this;
            _post({
                baseURL: 'http://localhost:3000/',
                url: 'detail/addComment',
                params: {
                    commentVal: this.commentVal
                },
                method: 'POST',
                success: function (res) {
                    _this.commentList.unshift(res.data)
                },
                failure: function (err) { }
            })
        }
    }

})
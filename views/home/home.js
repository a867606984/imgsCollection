



new Vue({
    el: '#app',
    data: {
        imgData: {
            // pageSize: 1,
            // pageNum: 10,
            // totalSize: 0,
            // imgList: []
        },
        pageNum: 1,
        pageSize: 10,
        searchVal: "",
    },
    components: {
        // 'el-pagination': '',
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            const _this = this;
            _post({
                baseURL: 'http://localhost:3000/',
                url: 'home/findList',
                params: {
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                    searchVal: this.searchVal
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
        collect(id) {
            const _this = this;
            _post({
                baseURL: 'http://localhost:3000/',
                url: 'home/updateCollection',
                params: {
                    id
                },
                method: 'POST',
                success: function (res) {
                    _this.imgData.data.forEach(item => {
                        if (item.id === id) item.iscollect = item.iscollect == 0 ? 1 : 0;
                    })

                },
                failure: function (err) { }
            })
        },
        pageChange(pageNum) {
            this.pageNum = pageNum;
            this.getData();
        },
        toDetail(id) {
            location.href = `../detail/detail.html?id=${id}`;
        },
        search() {
            this.pageNum = 1;
            this.pageSize = 10;
            this.getData();
        }
    }

})
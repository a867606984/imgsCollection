



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
        pageSize: 10
    },
    components: {
        // 'el-pagination': '',
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {

        },
    }

})
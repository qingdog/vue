<!-- axios -->
<template>
    <div>
        <input type="button" value="获取远程数据" @click="sendReq()">
    </div>
</template>
<script>
import axios from '../util/myaxios'
const options = {
    methods: {
        async sendReq() {
            // 1. 演示 get, post
            // const resp = await axios.post('/api/a2');

            // 2. 发送请求头
            // const resp = await axios.post('/api/a3',{},{
            //     headers:{
            //         Authorization:'abc'
            //     }
            // });

            // 3. 发送请求时携带查询参数 ?name=xxx&age=xxx
            // const name = encodeURIComponent('&&&');
            // const age = 18;
            // const resp = await axios.post(`/api/a4?name=${name}&age=${age}`);

            // 不想自己拼串、处理特殊字符、就用下面的办法
            // const resp = await axios.post('/api/a4', {}, {
            //     params: {
            //         name:'&&&&',
            //         age: 20
            //     }
            // });

            // 4. 用请求体发数据，格式为 urlencoded
            // const params = new URLSearchParams();
            // params.append("name", "张三");
            // params.append("age", 24)

            // const resp = await axios.post('/api/a4', params);


            // 5. 用请求体发数据，格式为 multipart
            // const params = new FormData();
            // params.append("name", "李四");
            // params.append("age", 30);
            // const resp = await axios.post('/api/a5', params);

            // 6. 用请求体发数据，格式为 json
            // const resp = await axios.post('/api/a5json', {
            //     name: '王五',
            //     age: 50
            // });

            // 7. 默认配置
            // const _axios = axios.create({
            //     baseURL: 'http://localhost:8080',
            //     withCredentials: true
            // });

            // await _axios.post('/api/a6set')
            // await _axios.post('/api/a6get')

            // 8. 响应格式
            // try {
            //     const resp = await _axios.post('/api/students');
            //     console.log(resp)
            // } catch (error) {
            //     console.log(error.response);
            // }

            const resp = await axios.get('/api/students');
            console.log(resp)
        }
    }
};
export default options;
</script>
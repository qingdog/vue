<!-- cascader -->
<template>
    <el-cascader :options="ops"></el-cascader>
</template>
<script>
import axios from '../util/myaxios'
const options = {
    async mounted() {
        const resp = await axios.get('/api/menu')
        console.log(resp.data.data)
        const array = resp.data.data;

        const map = new Map(); // get set

        // 1. 将所有数据存入 map 集合(为了接下来查找效率)
        for(const {id,name,pid} of array) {
            map.set(id, {value:id, label:name, pid:pid})
        }
        // console.log(map);
        // 2. 建立父子关系
        // 3. 找到顶层对象
        const top = [];
        for(const obj of map.values()) {
            // console.log(obj);
            const parent = map.get(obj.pid);
            if(parent !== undefined) {
                // if(parent.children === undefined) {
                //     parent.children = []
                // }
                parent.children ??= [];
                parent.children.push(obj);
            } else {
                top.push(obj)
            }
        }
        this.ops = top;
    },
    data(){
        return {
            ops: []
            /* ops:[
                {value:100, label:'主页',children:[
                    {value:101, label:'菜单1', children:[
                        {value:105, label:'子项1'},
                        {value:106, label:'子项2'}
                    ]},
                    {value:102, label:'菜单2', children:[
                        {value:107, label:'子项3'},
                        {value:108, label:'子项4'},
                        {value:109, label:'子项5'}
                    ]},
                    {value:103, label:'菜单3', children:[
                        {value:110, label:'子项6'},
                        {value:111, label:'子项7'}
                    ]},
                    {value:104, label:'菜单4'}
                ]}
            ] */
        }
    }
};
export default options;
</script>
<style scoped>
.el-cascader {
    margin: 10px 0 0 10px;
}
</style>

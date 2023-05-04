<!-- 计算属性 -->
<template>
    <div>
        <h2>{{fullName()}}</h2>
        <h2>{{fullName()}}</h2>
        <h2>{{fullName()}}</h2>
    </div>
</template>
<script>
const options = {
    data: function () {
        return { firstName: '三', lastName: '张' };
    },
    methods: {
        fullName() {
            console.log('进入了 fullName')
            return this.lastName + this.firstName;
        }
    },
    /* computed: {
        fullName() {
            console.log('进入了 fullName')
            return this.lastName + this.firstName;
        }
    } */
};
export default options;
</script>
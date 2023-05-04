<!-- 重用组件 -->
<template>
    <div>
        <h1>父组件</h1>
        <my-button type="primary" size="small">1</my-button>
        <my-button type="danger" size="middle">2</my-button>
        <my-button type="success" size="large">1</my-button>
    </div>
</template>
<script>
import MyButton from '../components/MyButton.vue'
const options = {
    components: {
        MyButton
    }
};
export default options;
</script>
<style scoped>
    div {
        background-color: gainsboro;
        width: 100%;
        height: 400px;
    }
    h1 {
        font-family: 华文行楷;
    }
</style>
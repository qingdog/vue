<template>
    <div class="button" :class="[type,size]">
        a<slot></slot>b
    </div>
</template>
<script>
const options = {
    props: ["type", "size"]
};
export default options;
</script>
<style scoped>
.button {
    display: inline-block;
    text-align: center;
    border-radius: 30px;
    margin: 5px;
    font: bold 12px/25px Arial, sans-serif;
    padding: 0 2px;
    text-shadow: 1px 1px 1px rgba(255, 255, 255, .22);
    box-shadow: 1px 1px 1px rgba(0, 0, 0, .29), inset 1px 1px 1px rgba(255, 255, 255, .44);
    transition: all 0.15s ease;
}

.button:hover {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, .29), inset 1px 1px 2px rgba(0, 0, 0, .5);
}

.button:active {
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, .8);
}

.primary {
    background-color: #1d6ef9;
    color: #b5e3f1;
}

.danger {
    background-color: rgb(196, 50, 50);
    color: white;
}

.success {
    background-color: #a5cd4e;
    ;
    color: #3e5706;
}

.small {
    width: 40px;
    height: 20px;
    font-size: 10px;
    line-height: 20px;
}

.middle {
    width: 50px;
    height: 25px;
    font-size: 14px;
    line-height: 25px;
}

.large {
    width: 60px;
    height: 30px;
    font-size: 18px;
    line-height: 30px;
}
</style>
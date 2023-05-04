<template>
    <div class="container">
        <el-container>
            <el-header>
                <el-button type="primary" icon="el-icon-edit" circle size="mini" @click="jump('/c1/p1')"></el-button>
                <el-button type="success" icon="el-icon-check" circle size="mini" @click="jump('/c1/p2')"></el-button>
                <el-button type="warning" icon="el-icon-star-off" circle size="mini" @click="jump('/c1/p3')"></el-button>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <!-- <router-link to="/c1/p1">P1</router-link>
                    <router-link to="/c1/p2">P2</router-link>
                    <router-link to="/c1/p3">P3</router-link> -->
                    <el-menu router background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                        <el-submenu index="/c1">
                            <span slot="title">
                                <i class="el-icon-platform-eleme"></i>
                                菜单1
                            </span>
                            <el-menu-item index="/c1/p1">子项1</el-menu-item>
                            <el-menu-item index="/c1/p2">子项2</el-menu-item>
                            <el-menu-item index="/c1/p3">子项3</el-menu-item>
                        </el-submenu>
                        <el-menu-item index="/c2">
                            <span slot="title">
                                <i class="el-icon-phone"></i>
                                菜单2
                            </span>
                        </el-menu-item>
                        <el-menu-item index="/c3">
                            <span slot="title">
                                <i class="el-icon-star-on"></i>
                                菜单3
                            </span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
const options = {
    methods: {
        jump(url) {
            this.$router.push(url);
        }
    }
}
export default options;
</script>
<style scoped>
.container {
    height: 100%;
    background-color: cornsilk;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='15' y='10' font-size='14' font-family='system-ui, sans-serif' text-anchor='middle' dominant-baseline='middle'%3E主页%3C/text%3E%3C/svg%3E");
    padding: 20px;
    box-sizing: border-box;
}

.el-container {
    height: 100%;
}

.el-header {
    background-color: aquamarine;
}

.el-aside {
    background-color: gold;
}

.el-main {
    background-color: dodgerblue;
}

a {
    text-decoration: none;
    display: block;
    margin: 10px 10px 0 10px;
    padding: 3px;
    font-size: 13px;
}

.router-link-active {
    color: #fff;
    background-color: darkslateblue;
}

.el-button {
    margin-top: 15px;
}
</style>
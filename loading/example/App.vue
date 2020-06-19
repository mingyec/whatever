<template>
    <div id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
        <div class="box">test</div>
    </div>
</template>

<script>
export default {
    name: "App",
    mounted() {
        this.$loading()
        this.$loading()
    }
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    .box {
        margin: 0 auto;
        height: 100px;
        width: 100px;
        background-color: rgb(218, 110, 49);
    }
}
</style>

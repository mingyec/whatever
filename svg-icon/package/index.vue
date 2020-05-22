<template>
    <svg aria-hidden="true" class="svg-icon" @click="click">
        <use v-bind:xlink:href="iconClass" />
    </svg>
</template>

<script>
export default {
    props: {
        // svg icon name
        icon: {
            type: String,
            required: true
        }
    },
    computed: {
        iconClass() {
            return `#icon-${this.icon}`;
        }
    },
    methods: {
        /**
         * 向上传递点击事件
         */
        click() {
            this.$emit("click");
        }
    }
};
</script>

<style scoped>
.svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>

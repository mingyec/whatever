<template>
    <svg
        aria-hidden="true"
        class="svg-icon"
        :class="{'icon-loading': loading}"
        :style="`width: ${size};height: ${size}`"
        @click="click"
    >
        <use v-bind:xlink:href="iconClass" />
    </svg>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true
        },
        className: {
            type: String,
            default: ""
        },
        loading: {
            type: Boolean,
            default: false
        },
        size: {
            type: String,
            default: "1em"
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
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
.icon-loading {
    animation: rotate 1s infinite linear;
}
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>

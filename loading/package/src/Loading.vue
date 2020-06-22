<template>
    <transition name="fade">
        <div v-show="visible" class="loading-container" :style="{
            background: bgColor
        }">
            <span class="loading-inner">
                <svg class="loading" viewBox="25 25 50 50">
                    <circle cx="50" cy="50" r="20" fill="none" class="loading-circle" />
                </svg>
            </span>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            bgColor: 'rgba(255, 255, 255, 0.9)'
        };
    }
};
</script>

<style lang="scss">
.loading-container {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba($color: #fff, $alpha: 0.9);
    display: flex;
    justify-content: center;
    align-items: center;

    .loading-inner {
        display: inline-block;
        width: 30px;
        height: 30px;
        animation: icon-rotate 2s linear infinite;
        color: #00a9ba;
    }

    .loading-circle {
        stroke: currentColor;
        stroke-width: 3;
        stroke-linecap: round;
        animation: circle-rotate 1.5s ease-in-out infinite;
    }

    @keyframes icon-rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @keyframes circle-rotate {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -40;
        }
        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -120;
        }
    }
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity ease-in-out 0.5s;
}
</style>
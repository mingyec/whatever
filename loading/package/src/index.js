import LoadingTemp from './Loading.vue';
import Vue from 'vue';
import { merge } from "./utils";

// TODO 可替换中心的loading，改成render函数方式，接受一个slot
// TODO 最少loading时长 minDur添加
// TODO 锁定背景滚动

const LoadingCtor = Vue.extend(LoadingTemp);

// 全屏loading实例
let fullscreenLoading;

// 默认配置
const defaults = {
    body: false,
    fullscreen: true, // 是否全屏
    target: undefined,
    lock: true, // 默认锁定
    gif: undefined, // 图片，可用于替换loading部分
    minDur: 0 // 最少loading时长, 单位毫秒
};

/**
 * 关闭loading
 */
LoadingCtor.prototype.close = function () {
    if (fullscreenLoading) {
        fullscreenLoading = undefined;
    }
    // 动画结束后销毁组件
    setTimeout(() => {
        if (this.$el && this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el);
        }
        this.$destroy()
    }, 500);
    this.visible = false;
};

const Loading = (options = {}) => {
    // 合并参数
    console.info(options)
    options = merge(options, defaults)
    console.info(options)

    // target为css选择器时，转化为dom对象
    if (typeof options.target === 'string') {
        options.target = document.querySelector(options.target);
    }

    // 不传目标target则附加在body节点下
    options.target = options.target || document.body;

    if (options.target !== document.body) {
        options.fullscreen = false
    } else {
        options.body = true;
    }

    // 只维护一个全屏loading实例
    if (options.fullscreen && fullscreenLoading) {
        return fullscreenLoading
    }

    // 确定挂载节点
    const parent = options.body ? document.body : options.target;

    // const {height} = parent.getBoundingClientRect();
    const height = parent.clientHeight;

    const ins = new LoadingCtor({
        el: document.createElement('div'),
        data: options
    });

    // 设置样式
    if (!options.body) {
        parent.style.position = 'relative';
        ins.$el.style.position = 'absolute';
        ins.$el.style.height = height + 'px';
    }
    
    ins.$el.style.left = '0'
    ins.$el.style.top = '0'

    // 挂载节点
    parent.appendChild(ins.$el);

    // 调用即显示
    ins.visible = true;

    if (options.fullscreen) {
        fullscreenLoading = ins;
    }

    return ins;
};

export default Loading;

import LoadingTemp from './Loading.vue';
import Vue from 'vue';
import { merge } from "./utils";

// TODO 替换加载图片
// TODO 最少loading时长 minDur添加

const LoadingCtor = Vue.extend(LoadingTemp);

// 全屏loading实例
let fullscreenLoading;

const defaults = {
    // 默认配置
    body: false,
    fullscreen: true // 是否全屏
};

/**
 * 关闭loading
 */
LoadingCtor.prototype.close = function () {
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
    options = merge(options, defaults)

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

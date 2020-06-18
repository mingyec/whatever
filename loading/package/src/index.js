import LoadingTemp from './Loading.vue';
import Vue from 'vue';

// TODO 针对target的loading
// TODO 替换加载图片

const LoadingCtor = Vue.extend(LoadingTemp);

const defaults = {
    // 默认配置
    fullscreen: true // 是否全屏
};

/**
 * 关闭loading
 */
LoadingCtor.prototype.close = function () {
    this.visible = false;
};

const Loading = (options = {}) => {
    // 合并参数
    Object.assign(options, defaults);

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

    // 确定挂载节点
    const parent = options.body ? document.body : options.target;

    const ins = new LoadingCtor({
        el: document.createElement('div'),
        data: options
    });

    // 挂载节点
    parent.appendChild(ins.$el);

    // 调用即显示
    ins.visible = true;

    return ins;
};

export default Loading;

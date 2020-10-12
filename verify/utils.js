const debounce = (fn, delay) => {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}

const throttle = (fn, delay) => {
    let flag = true;
    return function (...args) {
        if (!flag) {
            return
        }
        flag = false;
        setTimeout(() => {
            fn.apply(this, args)
            flag = true
        }, delay);
    }
}

debounce1 = (fn, delay) => {
    let timer = null;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    }
}

throttle1 = (fn, delay) => {
    let flag = true;
    return function (...args) {
        if (!flag) return
        flag = false;
        setTimeout(() => {
            fn.apply(this, args)
            flag = true
        }, delay);
    }
}
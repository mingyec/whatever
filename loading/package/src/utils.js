export const getStyle = function(element, styleName) {}

/**
 * 合并多个值到target
 * @param {*} target 
 * @param  {...any} others 
 */
export const merge = function(target, ...others) {
    for(const opt of others) {
        for(const prop in opt) {
            if (!opt.hasOwnProperty(prop)) {
                continue;
            }
            const val = opt[prop];
            if (val !== undefined) {
                target[prop] = val;
            }
        }
    }
    return target;
}
/**
 * 爱吃香蕉的珂珂
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function (piles, H) {
    let left = 1,
        right = Math.max(...piles) + 1;
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (canFinish(piles, mid, H)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

const canFinish = (piles, speed, h) => {
    let time = 0;
    for (const pile of piles) {
        const t = Math.ceil(pile / speed);
        time += t;
    }
    return time <= h;
}

console.info(minEatingSpeed([3, 6, 7, 11], 8))
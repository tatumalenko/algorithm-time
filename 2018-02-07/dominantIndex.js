const predicateFn = (element, index, array) => {
    const arrayMinusElement = array.filter(e => e != array[index]);
    return arrayMinusElement.every(e => element >= e*2);
};

const main = (nums) => {
    return nums.findIndex(predicateFn);
};

console.log(main([3, 6, 1, 0]));
console.log(main([1, 2, 3, 4]));
console.log(main([3, 6, 1, 0, 13]));
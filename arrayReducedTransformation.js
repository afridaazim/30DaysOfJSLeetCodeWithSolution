/*Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

    A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.

    If the length of the array is 0, it should return init.

    Please solve it without using the built-in Array.reduce method.*/

let nums = [1,2,3,4];
let init = 100;
function fn(p1, p2) {
    return p1+(p2*p2);
}

var reduce = function(nums, fn, init) {
    let value=init;
    for(let i=0; i<nums.length; i++){
        value = fn(init, nums[i]);
        init = value;
    }
    return value;
};
console.log(reduce(nums, fn, init))

/*Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

    The first time the returned function is called, it should return the same result as fn.
    Every subsequent time it is called, it should return undefined.*/

let calls = [[1,2,3],[2,3,6]]
function fn(a,b,c){
    return a+b+c;
}

var once = function(fn) {
    let usedOnce = true;
    let result;

    return function(...args){
        if(usedOnce){
            usedOnce = false;
            result = fn(...args)
            return(result) ;
        }
        return undefined;
   }
};
const onceFn = once(fn);
console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2,3,6)); // undefined, fn was not called

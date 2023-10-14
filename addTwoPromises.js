/*
Given two promises promise1 and promise2, return a new promise.
 promise1 and promise2 will both resolve with a number.
 The returned promise should resolve with the sum of the two numbers.*/

var addTwoPromises = async function(promise1, promise2) {
let sum=null;
  for (let promise of [promise1, promise2]){
      sum += await promise;
  }
    return sum;
};


  addTwoPromises(Promise.resolve(2), Promise.resolve(3))
    .then(console.log); // 4

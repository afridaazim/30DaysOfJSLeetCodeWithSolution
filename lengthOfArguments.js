//Write a function argumentsLength that returns the count of arguments passed to it.

var argumentsLength = function(...args) {
    return args.length ;
};


 console.log(argumentsLength({}, 2, null,4)) ; // 4

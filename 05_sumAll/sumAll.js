const sumAll = function(int1, int2) {
    let smallNum = Math.min(int1, int2);
    let largeNum = Math.max(int1, int2);
    let sum = 0;
    
    if (int1 < 0 || int2 < 0 || typeof int1 == 'string' || typeof int2 == 'string' || isNaN(int1) == true || isNaN(int2) == true) {
        return 'ERROR';
    }
    
    for (let i = smallNum; i <= largeNum; i++) {
        sum = sum + i;
    }

    return sum;
}

// console.log(sumAll(1, 4));
sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;

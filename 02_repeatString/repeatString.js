const repeatString = function(string, num) {
    let blankString = '';
    if (num < 0) {
        return 'ERROR'
    }

    for (let i = 0; i < num; i++) {
        blankString += string;
    }
    return blankString;

};

repeatString('hey', 3);


// Do not edit below this line
module.exports = repeatString;

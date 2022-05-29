const palindromes = function (sent) {
    let regString = revString = sent.toLowerCase();
    
    fixedReg = fixedRev = regString.replace(/[^a-z]/g, '');
    
    fixedRev = fixedRev.split('').reverse();
    fixedRev = fixedRev.join('');
    
    if (fixedRev == fixedReg) {
        return true;
    }   
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

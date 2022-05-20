  const removeFromArray = function(list, ...remove) {
        for (let i = 0; i < remove.length; i++) {
            let word = remove[i];
            let wordIndex = list.indexOf(word);
            
            if (wordIndex >= 0) {
                list.splice(wordIndex, 1);
            }
        }
        
        return list;
}

removeFromArray(['mango', 'apple', 3, 'dog'], )
// Do not edit below this line
module.exports = removeFromArray;

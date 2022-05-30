const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]
const getTheTitles = function(books) {
    let emptArr = [];
    for (let i = 0; i < books.length; i++) {
        emptArr.push(books[i].title);
    }
    return emptArr;
}

getTheTitles(books);
// Do not edit below this line
module.exports = getTheTitles;

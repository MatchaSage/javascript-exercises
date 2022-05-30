const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
      
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

const findTheOldest = function(people) {
    let ageArray = [];
    for (let i = 0; i < people.length; i++) {
        if (people[i].yearOfDeath === undefined) {
            people[i].yearOfDeath = new Date().getFullYear();
        }
        
        ageArray.push(people[i].yearOfDeath - people[i].yearOfBirth);
    }

    let oldest = Math.max(...ageArray);
    let oldestIndex = ageArray.indexOf(oldest);
    let thePerson = people[oldestIndex];
    return thePerson;
    
};

findTheOldest(people).name;
// Do not edit below this line
module.exports = findTheOldest;

const findTheOldest = function(people) {
    let oldestPerson = undefined;
    let currentDate = new Date();

    people.forEach((person) => {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = currentDate.getFullYear();
        }
    });
    
    people.forEach(function (person) {
        if (oldestPerson === undefined) {
            oldestPerson = person;
        } 
        
        if ((person.yearOfDeath - person.yearOfBirth) > (oldestPerson.yearOfDeath - oldestPerson.yearOfBirth)) {
            oldestPerson = person;
        }
    })

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

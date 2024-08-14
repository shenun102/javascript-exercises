function getAge(personObj) {
  const today = new Date();
  const death = personObj.yearOfDeath;
  if (!death) return today.getFullYear() - personObj.yearOfBirth;
  return personObj.yearOfDeath - personObj.yearOfBirth;
}

const findTheOldest = function (people) {
  return people.reduce((oldestPerson, currPerson) => {
    const oldestAge = getAge(oldestPerson);
    const currPersonAge = getAge(currPerson);
    // console.log(oldestPerson.name);
    // console.log(currPersonAge, oldestAge);
    return currPersonAge < oldestAge ? oldestPerson : currPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;

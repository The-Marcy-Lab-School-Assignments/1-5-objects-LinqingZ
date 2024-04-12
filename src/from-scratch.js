// Q1
const coolGreeting = (person) => {
  // return {
  //   name: person.name,
  //   bio: person.bio,
  //   age : person.age,
  //   isCool : person.isCool

  // }
  if (person.isCool){
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`
  }
  return `Greetings ${person.name}, how have you been lately?`
};

// Q2
const haveBirthday = (person) => {
  person.age += 1
};

// Q3
const becomeSecretAgent = (person, spyHandle) => {
  delete person.name;
  person["spyHandle"] = spyHandle;
};

// Q4
const carMaker = (name, maker, year) => {
  return {
    name: name,
    year: year,
    maker: maker,
    needsOilChange: false
  }
};

// Q5
const weAreNotFriends = (person) => {
  if (person && person.friends && person.friends.length >= 0) {
    return person.friends.pop()
  }else{
    return person.friends
  }
  // return person.friends.pop()
};
// Q6
const listHobbies = (person) => {
  // if (person && person.hobbies && person.hobbies.length > 0){}
  for (let hobby of person.hobbies){
    console.log(`${person.name} likes ${hobby}.`)
  }
};

// Q7
const getNextOpponent = (team) => {
  if (team && team.matches && team.matches.length >0 ){
    return team.matches[0].teamName
  }else{
    return null
  }
};

// Q8
const listAllKeys = (anObject) => {
  return Object.keys(anObject)
};

// Q9
const listAllValues = (anObject) => {
  return Object.values(anObject)
};

// Q10
const convertToMatrix = (objects) => {
  let output = []
  if (objects.length>0){
    // console.log(`object inside`)
    output.push(Object.keys(objects[0]))
    // console.log(Object.keys(objects[0]))
    for (let obj of objects){
      output.push(Object.values(obj))
    }
  return output
  }else{
    return output
  }
};

const users = [
  {
    name: 'Sara',
    age: 30,
    bio: 'What a legend',
  },
  {
    name: 'Bob',
    age: 30,
    bio: "Kind of mean if we're being honest",
  },
];

convertToMatrix(users)

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};

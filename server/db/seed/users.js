/* eslint-disable max-statements */
const faker = require('faker')
const { USER_INTERESTS, PROFESSIONS, LATITUDE_NY, LONGITUDE_NY } = require('../../../constants')
const { getRandomInt, getRandomIntBetween } = require('../../../utils/mathFuncs')
const { saltAndHash } = require('../../../utils/hashPasswordFunc')

const createUsers = async (numUsers) => {
  let firstNames = [
    'Charles',
    'Christine',
    'David',
    'John',
    'Mario'
  ];
  let lastNames = [];
  let userEmails = [];
  let userImages1 = [
    './images/users/man.jpg',
    './images/users/woman.jpg',
    './images/users/man2.jpg',
    './images/users/man3.png',
    './images/users/mario.png',
  ];
  let dogImages = [
    './images/dogs/airedale.jpeg',
    './images/dogs/golden.jpg',
    './images/dogs/germanshepherd.jpeg',
    './images/dogs/dalmatian.jpeg',
    './images/dogs/shibainu.jpeg'
    ];
  let zipCodes = [];
  let city = [];
  let state = [];
  let userInterests = [];
  let age = [];
  let profession = [];
  let users = [];
  let userLatitude = [];
  let userLongitude = [];
  const signs = [-1, 1]

  for (let i = 0; i < numUsers;i++){
    firstNames.push(faker.name.firstName())
    lastNames.push(faker.name.lastName())
    userEmails.push(faker.internet.email().toLowerCase())
    userImages1.push(faker.image.people())
    zipCodes.push(getRandomIntBetween(10009, 10042))
    city.push('New York')
    state.push('NY')
    age.push(getRandomIntBetween(24, 41))
    profession.push(PROFESSIONS[getRandomInt(PROFESSIONS.length)])
    userInterests.push([USER_INTERESTS[getRandomInt(USER_INTERESTS.length)]])
    // currently seeding NY-area users so that there are more distance filter matches
    userLatitude.push((LATITUDE_NY + Math.random() * signs[getRandomInt(2)]) / 10) // +/- up to 1/10 latitude fron NY (1 lat = 69 miles)
    userLongitude.push((LONGITUDE_NY + Math.random() * signs[getRandomInt(2)]) / 10) // +/- up to 1/10 longitude fron NY (1 long = 50 miles)
  }

  for (let i = 0; i < numUsers;i++){
    users.push({});
    users[i].firstName = firstNames[i]
    users[i].lastName = lastNames[i]
    users[i].userEmail = userEmails[i]
    users[i].hashedPassword = await saltAndHash(userEmails[i])
    users[i].userImage1 = userImages1[i]
    users[i].dogImage = dogImages[i]
    users[i].zipCode = zipCodes[i]
    users[i].city = city[i]
    users[i].state = state[i]
    users[i].age = age[i]
    users[i].profession = profession[i]
    users[i].userInterests = userInterests[i]
    users[i].userLatitude = userLatitude[i]
    users[i].userLongitude = userLongitude[i]
  }
  return users;
}

module.exports = createUsers;

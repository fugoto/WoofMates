/* eslint-disable max-statements */
const {BREEDS, MAX_DOG_AGE, MAX_DOG_WEIGHT, PROFESSIONS, USER_INTERESTS, MAX_USER_AGE, MAX_DISTANCE_FROM_USER, DOG_INTERESTS} = require('../../../constants')
const {setValObj, setNumericalObj} = require('../../../utils/dbFuncs')

const createPreferences = (numUsers, numVotes) => {
  let dogBreeds = [];
  let dogAges = [];
  let dogInterests = [];
  let dogEnergyLevels = [];
  let dogWeights = [];
  let isNeuteredDealbreaker = [];
  let userInterests = [];
  let userAge = [];
  let userProfession = [];
  let distanceFromLocation = [];
  let preferences = [];

  for (let i = 0; i < numUsers;i++){
    dogBreeds.push(setValObj(BREEDS, numVotes))
    dogAges.push(setNumericalObj(MAX_DOG_AGE, numVotes))
    dogEnergyLevels.push(setNumericalObj(5, numVotes))
    dogWeights.push(setNumericalObj(MAX_DOG_WEIGHT, numVotes))
    dogInterests.push(setValObj(DOG_INTERESTS, numVotes))
    // first user as broad as possible for match testing purposes
    isNeuteredDealbreaker.push(false)
    userInterests.push(setValObj(USER_INTERESTS, numVotes))
    userAge.push(setNumericalObj(MAX_USER_AGE, numVotes))
    userProfession.push(setValObj(PROFESSIONS, numVotes))
    // first user as broad as possible for match testing purposes
    distanceFromLocation.push(MAX_DISTANCE_FROM_USER)
  }

  for (let i = 0; i < numUsers;i++){
    preferences.push({});
    preferences[i].dogBreed = dogBreeds[i]
    preferences[i].dogAgeForPref = dogAges[i]
    preferences[i].dogEnergyLevel = dogEnergyLevels[i]
    preferences[i].dogInterests = dogInterests[i]
    preferences[i].dogWeight = dogWeights[i]
    preferences[i].isNeuteredDealbreaker = isNeuteredDealbreaker[i]
    preferences[i].userInterests = userInterests[i]
    preferences[i].userAge = userAge[i]
    preferences[i].userProfession = userProfession[i]
    preferences[i].distanceFromLocation = distanceFromLocation[i]
    preferences[i].userId = i + 1
  }
  return preferences;
}

module.exports = createPreferences;

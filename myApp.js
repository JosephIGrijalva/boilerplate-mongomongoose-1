require('dotenv').config();
const mongoose = require('mongodb');
const Schema = mongoose.Schemea

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new Schema({
  name: {type: String, required: true},
  age: Number, 
  favoriteFoods: [String] 

});

const Person = mongoose.model("Person", personSchema);

const createAndSavePerson = (done) => {
  
  var josephGrijalva = new Person({
    name: "Joseph",
    age: 18 ,
    favoriteFoods: [ "tacos", "sushi", "Thai tea"]
  });

  josephGrijalva.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });

  
};

const createManyPeople = (arrayOfPeople, done) => {
  
  var arrayOfPeople = [
    {
      name: "Chie",
      age: 28,
      favoriteFoods: ["Steak", "Mint chocolate chip ice cream", "Ramen"]
    },
    {
      name: "Rex",
      age: 4,
      favoriteFoods: ["Chicken", "Quesadillas", "tacos"]
    },
    {
      name: "Revy",
      age: 20,
      favoriteFoods: ["Ramen", "Gyoza", "Sake"]
    }
  ];

  

  Person.create(arrayOfPeople, function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;

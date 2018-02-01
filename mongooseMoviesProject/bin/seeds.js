const mongoose = require("mongoose");

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/celebrityDB', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
});

const Celebrity = require('../models/celebrities');

const celebrities = [
    {
      name: 'Katie Holmes',
      occupation: "actress",
      catchPhrase: 'The window is just another way to enter a room',
    },
    {
      name: 'Matthew McConaughy',
      occupation: "actor",
      catchPhrase: 'Good guy, looking for reason to move out',
    },
    {
      name: 'Jennifer Aniston',
      occupation: "actress",
      catchPhrase: 'The One with 5 Friends in Manhattan',
    }
  ];

Celebrity.create(celebrities, (err, docs) => {
    if (err) {
      throw err;
    }
  
    docs.forEach((celebrity) => {
      console.log(celebrity.name)
    });
    mongoose.connection.close();
  });
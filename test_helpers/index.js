"use strict";

const factoryGirl = require("factory-girl");
const adapter = new factoryGirl.SequelizeAdapter();
const factory = factoryGirl.factory;
factory.setAdapter(adapter);

let Models = require("../models");

// clean the factory state - necessary for mocha watch
factory.cleanUp();
factory.factories = [];

// define factories
require("./factories")(factory, Models);


beforeEach((done) => {
  Models.sequelize.sync({ force: true }).then(() => {
    done();
  });
});

module.exports = {
  factory: factory,
  Models: Models,
};
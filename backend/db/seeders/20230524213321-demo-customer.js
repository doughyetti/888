'use strict';

const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Customers';
    await queryInterface.bulkInsert(options, [
      {
        firstName: 'Zuko',
        lastName: 'The Blue Spirit',
        email: 'demo@user.io',
        phoneNumber: "123-456-7890",
        hashedPassword: bcrypt.hashSync('password')
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Customers';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      email: { [Op.in]: ['demo@user.io'] }
    }, {});
  }
};

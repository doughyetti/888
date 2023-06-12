'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "Reviews";
    await queryInterface.bulkInsert(options, [
      {
        customerId: 1,
        firstName: 'Zuko',
        lastName: 'The Blue Spirit',
        description: `This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority.`
      },
      {
        customerId: 2,
        firstName: 'Spongebob',
        lastName: 'Squarepants',
        description: `Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before you book. Highly recommended.`
      },
      {
        customerId: 3,
        firstName: 'Minato',
        lastName: 'Namikaze',
        description: `Amazing experience! If you thought gourmet kitchen will leave you hungry, think again. You should skip several meals before visiting this amazing restaurant. Everything is so tasty, you cannot restraint yourself from having all of the dishes.`
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    await queryInterface.bulkDelete(options, {
      customerId: [1]
    }, {});
  }
};

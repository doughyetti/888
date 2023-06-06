'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'Menus';
    await queryInterface.bulkInsert(options, [
      {
        type: "Starters"
      },
      {
        type: "Noodle Soup"
      },
      {
        type: "Chef's Signature"
      },
      {
        type: "Drinks"
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'Menus';
    await queryInterface.bulkDelete(options, {
      type: ["Starters", "Noodle Soup", "Chef's Signature", "Drinks"]
    }, {});
  }
};

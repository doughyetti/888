'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = "Items";
    await queryInterface.bulkInsert(options, [
      {
        menuId: 1,
        name: "Spring Rolls",
        description: "Shrimp, fresh ricepaper, rice noodles, lettuce, cucumber, cilantro.",
        price: 6.00
      },
      {
        menuId: 1,
        name: "Vietnamese-Style Egg Rolls",
        description: "Pork, crispy skin, side of lime fish sauce.",
        price: 6.25
      },
      {
        menuId: 1,
        name: "Steam Dumplings (8 pieces)",
        description: "Ground pork, scallions, cilantro, ginger.",
        price: 7.25
      },
      {
        menuId: 1,
        name: "Royal Sampler",
        description: "Combination of 4 pork egg rolls, 2 seafood puffs, 2 imperial crispy shrimp.",
        price: 16.00
      },
      {
        menuId: 1,
        name: "Bangkok Wings",
        description: "Crispy wings, thai basil, yellow onion, tossed with Bangkok spicy tamarind sauce.",
        price: 9.00
      },
      {
        menuId: 1,
        name: "Grilled Squid",
        description: "Five flavors marinated grilled squid, side of sweet & tangy pineapple sauce.",
        price: 7.75
      },
      {
        menuId: 2,
        name: "Pho Dac Biet",
        description: "Pho with combination of rare flank steak slices, beef tripe, braised brisket, meat ball, & soft tendon.",
        price: 13.00
      },
      {
        menuId: 2,
        name: "Pho Ga",
        description: "Pho with chicken.",
        price: 12.00
      },{
        menuId: 2,
        name: "Pho Oxtail & Flank steak",
        description: "Pho with combination of oxtail and flank steak slices.",
        price: 16.00
      },
      {
        menuId: 2,
        name: "Pho Do Bien",
        description: "Pho with shrimp, fish balls, squid, scallop, and krab.",
        price: 12.50
      },
      {
        menuId: 2,
        name: "Pho Rau Cai",
        description: "Pho with vegetable both, bok choy, cauliflower, broccoli, carrots, mushrooms, and soft tofu.",
        price: 11.50
      },
      {
        menuId: 2,
        name: "Egg Noodle Soup",
        description: "Egg noodle soup made with chicken broth, flavored with vegetable and spices.",
        price: 11.00
      },
      {
        menuId: 3,
        name: "Roast Duck",
        description: "Roast duck breast in chef's signature fruit sauce (lychee, tangerine, lotus, shiitake mushroom, green and red peppers.",
        price: 18.00
      },
      {
        menuId: 3,
        name: "Bo Luc Lac",
        description: "Stir-fried tender cubed flank steak with yellow onion; finish with a touch of butter, lettuce, and fried potatoes",
        price: 17.00
      },
      {
        menuId: 3,
        name: "Thai-Style Stir-fried Seafood w/ Vegetables",
        description: "Stir-fried shrimp, scallop, squid fish balls, and crab with thai basil, red & green bell peppers, broccoli, shiitake mushrooms, asparagus, carrot, and snow peas in chef's spicy thai sauce.",
        price: 17.00
      },
      {
        menuId: 3,
        name: "Sizzling Red Snapper",
        description: "Crispy red snapper fillet covered in chef's special tangy sauce with tangerine, red & green bell peppers, thai basil, and white mushroom.",
        price: 17.25
      },
      {
        menuId: 3,
        name: "Panang Curry Lamb Chop",
        description: "Grilled lamb chops, asparagus, red & green bell pepper, Kaffir lime leaf, yellow onion, in chef's coconut-milk panang curry sauce.",
        price: 18
      },
      {
        menuId: 3,
        name: "Drunken Devil",
        description: "Grilled shrimp wrapped in sliced flank steak with chef's sake - panang sauce, green & red bell peppers, yellow onion, and Kaffir lime leaf.",
        price: 17.25
      },
      {
        menuId: 4,
        name: "Soda (free refills)",
        description: "Mexican Cola ONLY uwu",
        price: 3
      },
      {
        menuId: 4,
        name: "Thai Ice Tea",
        description: "Creamy and refreshing, mildly spiced sweet tea made from Thai tea mix, milk, and sugar.",
        price: 5.25
      },
      {
        menuId: 4,
        name: "Hot Jasmine Tea",
        description: "Fresh jasmine tea leaves brewed to perfection.",
        price: 4
      },
      {
        menuId: 4,
        name: "888 Vietnamese Iced Coffee",
        description: "Rich, chocolatey flavor from the Vietnamese style robusta coffee, mixed with sweetened condensed milk.",
        price: 5.25
      },
      {
        menuId: 4,
        name: "Avocado Milk Shake",
        description: "Fresh avocado blended with milk and ice for heavenly deliciousness, uwu",
        price: 5.25
      },
      {
        menuId: 4,
        name: "Jackfruit Milk Shake",
        description: "Fresh jackfruit blended with milk and ice for heavenly deliciousness, uwu",
        price: 5.95
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    options.tableName = "Items";
    return queryInterface.bulkDelete(options, {
      menuId: [1, 2, 3, 4]
    }, {});
  }
};

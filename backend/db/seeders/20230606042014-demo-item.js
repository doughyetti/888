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
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/VIETNAMESE-SPRING-ROLLS-1536x864.jpg",
        price: 6.00
      },
      {
        menuId: 1,
        name: "Vietnamese-Style Egg Rolls",
        description: "Pork, crispy skin, side of lime fish sauce.",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/Traditional-Vietnamese-Egg-Rolls.jpg",
        price: 6.25
      },
      {
        menuId: 1,
        name: "Steam Dumplings (8 pieces)",
        description: "Ground pork, scallions, cilantro, ginger.",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/steamed_dumps.jpg",
        price: 7.25
      },
      {
        menuId: 1,
        name: "Royal Sampler",
        description: "Combination of 4 pork egg rolls, 2 seafood puffs, 2 imperial crispy shrimp.",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/royall.jpg",
        price: 16.00
      },
      {
        menuId: 1,
        name: "Bangkok Wings",
        description: "Crispy wings, thai basil, yellow onion, tossed with Bangkok spicy tamarind sauce.",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/bangkok.jpg",
        price: 9.00
      },
      {
        menuId: 1,
        name: "Grilled Squid",
        description: "Five flavors marinated grilled squid, side of sweet & tangy pineapple sauce.",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/grilled-squid-tubes-483751.jpg",
        price: 7.75
      },
      {
        menuId: 2,
        name: "Pho Dac Biet",
        description: "Pho with combination of rare flank steak slices, beef tripe, braised brisket, meat ball, & soft tendon.",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/pho_dac_biet.jpg",
        price: 13.00
      },
      {
        menuId: 2,
        name: "Pho Ga",
        description: "Pho with chicken.",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/pho_ga.jpg",
        price: 12.00
      },{
        menuId: 2,
        name: "Pho Oxtail & Flank steak",
        description: "Pho with combination of oxtail and flank steak slices.",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/instant-pot-oxtail-pho-main-square.jpg",
        price: 16.00
      },
      {
        menuId: 2,
        name: "Pho Do Bien",
        description: "Pho with shrimp, fish balls, squid, scallop, and krab.",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/pho_do_bien.jpg",
        price: 12.50
      },
      {
        menuId: 2,
        name: "Pho Rau Cai",
        description: "Pho with vegetable both, bok choy, cauliflower, broccoli, carrots, mushrooms, and soft tofu.",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/20220118+Vegetarian+Pho+LEDE.jpg",
        price: 11.50
      },
      {
        menuId: 2,
        name: "Egg Noodle Soup",
        description: "Egg noodle soup made with chicken broth, flavored with vegetable and spices.",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/egg_noodle.jpg",
        price: 11.00
      },
      {
        menuId: 3,
        name: "Roast Duck",
        description: "Roast duck breast in chef's signature fruit sauce (lychee, tangerine, lotus, shiitake mushroom, green and red peppers.",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/Crisp-Roast-Duck-19032019.jpg",
        price: 18.00
      },
      {
        menuId: 3,
        name: "Bo Luc Lac",
        description: "Stir-fried tender cubed flank steak with yellow onion; finish with a touch of butter, lettuce, and fried potatoes",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/Vietnamese-Shaking-Beef-Bo-Luc-Lac-3.jpg",
        price: 17.00
      },
      {
        menuId: 3,
        name: "Thai-Style Stir-fried Seafood w/ Vegetables",
        description: "Stir-fried shrimp, scallop, squid fish balls, and crab with thai basil, red & green bell peppers, broccoli, shiitake mushrooms, asparagus, carrot, and snow peas in chef's spicy thai sauce.",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/Thai-Style-Stir-Fried-Seafood-2.jpg",
        price: 17.00
      },
      {
        menuId: 3,
        name: "Sizzling Red Snapper",
        description: "Crispy red snapper fillet covered in chef's special tangy sauce with tangerine, red & green bell peppers, thai basil, and white mushroom.",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/red_snapper.jpg",
        price: 17.25
      },
      {
        menuId: 3,
        name: "Panang Curry Lamb Chop",
        description: "Grilled lamb chops, asparagus, red & green bell pepper, Kaffir lime leaf, yellow onion, in chef's coconut-milk panang curry sauce.",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/curry_lamb_jpg.jpeg",
        price: 18
      },
      {
        menuId: 3,
        name: "Drunken Devil",
        description: "Grilled shrimp wrapped in sliced flank steak with chef's sake - panang sauce, green & red bell peppers, yellow onion, and Kaffir lime leaf.",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/drunken_devil.jpg",
        price: 17.25
      },
      {
        menuId: 4,
        name: "Soda (free refills)",
        description: "Mexican Cola ONLY uwu",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/soda.jpg",
        price: 3
      },
      {
        menuId: 4,
        name: "Thai Ice Tea",
        description: "Creamy and refreshing, mildly spiced sweet tea made from Thai tea mix, milk, and sugar.",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/thai-iced-tea-square-1-of-1.jpg",
        price: 5.25
      },
      {
        menuId: 4,
        name: "Hot Jasmine Tea",
        description: "Fresh jasmine tea leaves brewed to perfection.",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/JasmineTeaThumb.jpg",
        price: 4
      },
      {
        menuId: 4,
        name: "888 Vietnamese Iced Coffee",
        description: "Rich, chocolatey flavor from the Vietnamese style robusta coffee, mixed with sweetened condensed milk.",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/jun20_vietnamese-iced-coffee-161761-1.jpg",
        price: 5.25
      },
      {
        menuId: 4,
        name: "Avocado Milk Shake",
        description: "Fresh avocado blended with milk and ice for heavenly deliciousness, uwu",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/Avocado-Milkshake-3-1.jpg",
        price: 5.25
      },
      {
        menuId: 4,
        name: "Jackfruit Milk Shake",
        description: "Fresh jackfruit blended with milk and ice for heavenly deliciousness, uwu",
        previewPhoto: "https://888capstone.s3.us-east-2.amazonaws.com/menu-items/menu/Easy-Mango-Jackfruit-Smoothie.jpg",
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

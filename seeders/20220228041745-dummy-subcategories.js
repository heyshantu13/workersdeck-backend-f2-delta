'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

     await queryInterface.bulkInsert('SubCategories', [
      {
      name: 'Home Cleaning',
      category_id: 5,
      createdAt:new Date(),
      updatedAt: new Date(),
      },
      {
        name: 'Commercial Cleaning',
        category_id: 5,
        createdAt:new Date(),
        updatedAt: new Date(),
        },
      {
          name: 'Residential Cleaning',
          category_id: 5,
          createdAt:new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Dry Cleaning',
          category_id: 5,
          createdAt:new Date(),
          updatedAt: new Date(),
          },
          {
            name: 'Shaping and cutting',
            category_id: 2,
            createdAt:new Date(),
            updatedAt: new Date(),
            },
            {
              name: 'Joister',
              category_id: 2,
              createdAt:new Date(),
              updatedAt: new Date(),
              },
              {
                name: 'Trim carpentry',
                category_id: 2,
                createdAt:new Date(),
                updatedAt: new Date(),
                },
                {
                  name: 'Faucet services',
                  category_id: 3,
                  createdAt:new Date(),
                  updatedAt: new Date(),
                  },
                {
                    name: 'Sewer line services',
                    category_id: 3,
                    createdAt:new Date(),
                    updatedAt: new Date(),
                    },
                  {
                      name: 'Water heater services',
                      category_id: 3,
                      createdAt:new Date(),
                      updatedAt: new Date(),
                      }, 
                      {
                        name: 'Piping/leak services',
                        category_id: 3,
                        createdAt:new Date(),
                        updatedAt: new Date(),
                        },    
                        {
                          name: 'Repairing',
                          category_id: 4,
                          createdAt:new Date(),
                          updatedAt: new Date(),
                          }, 
                          {
                            name: 'Ceiling Fan Installations',
                            category_id: 4,
                            createdAt:new Date(),
                            updatedAt: new Date(),
                            },  
                            {
                              name: 'Installations',
                              category_id: 4,
                              createdAt:new Date(),
                              updatedAt: new Date(),
                              },  
                              {
                                name: 'Panel Upgrades',
                                category_id: 4,
                                createdAt:new Date(),
                                updatedAt: new Date(),
                                },  
                                {
                                  name: 'Interior Painting',
                                  category_id: 1,
                                  createdAt:new Date(),
                                  updatedAt: new Date(),
                                  }, 
                                  {
                                    name: 'Exterior Painting',
                                    category_id: 1,
                                    createdAt:new Date(),
                                    updatedAt: new Date(),
                                    }, 
                                    {
                                      name: 'Residential Painting',
                                      category_id: 1,
                                      createdAt:new Date(),
                                      updatedAt: new Date(),
                                      },  
                                      {
                                        name: 'Commercial Painting',
                                        category_id: 1,
                                        createdAt:new Date(),
                                        updatedAt: new Date(),
                                        },  

  ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Band', [{
      name: 'The Band',
      genre: 'Rock and Roll',
      available_start_time: "2022-11-15T18:30:00",
      end_time: "2022-11-15T23:00:00"
    },
  {
    name: 'Black Sabbath',
    genre: 'Hard Rock',
    available_start_time:"2022-11-15T18:30:00",
    end_time: "2022-11-15T23:00:00"
  }], {})
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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

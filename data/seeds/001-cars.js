
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: '1HGBH41JXMN109186', make: 'Toyota', model: 'Prius', mileage: 23754, transmission: 'auto'},
        { VIN: '1HGBH41TYE109186', make: 'Toyota', model: 'Prius', mileage: 238854, transmission: 'manual' },
        { VIN: '1HGBH46JXMN10486', make: 'Subaru', model: 'WRX', mileage: 23754, transmission: 'auto', title: 'clean' }
      ]);
    });
};

exports.seed = function(knex, Promise) {
  return knex('restaurants').insert([
    { name: 'Janno Restaurant', location: 'Degfer Street, Benadir-Somalia,', owner_id: 1, created: '2023-07-30', updated: '2023-08-10' },
    { name: 'Garaad Restaurant', location: 'seapiano, Benadir-Somalia', owner_id: 2, created: '2023-07-30', updated: '2023-08-12' },
    { name: 'African Daafi & Pizza ', location: 'Waberi, Benadir-Somalia', owner_id: 1, created: '2023-05-30', updated: '2023-07-30' }
  ]);
};

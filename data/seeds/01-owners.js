exports.seed = function(knex, Promise) {
  return knex('owners').insert([
    { name: 'Abdullahi Khalif', email: "khalif@gmail.com", created: '2023-07-30', updated: '2023-08-01' },
    { name: 'Iqro Abdi', email: "iqrush@gmail.com", created: '2023-06-30', updated: '2023-07-30' },
    { name: 'Mascuud Abdirahman', email: "maska@gmail.com", created: '2023-06-20', updated: '2023-08-20' },
    { name: 'Ayan Abdullahi', email: "ayanah@gmail.com", created: '2023-05-10', updated: '2023-09-01' }
    
  ]);
};


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('missions').del()
    .then(function () {
      // Inserts seed entries
      return knex('missions').insert([
        {id: 1, colName: 'rowValue1'},
        {id: 2, colName: 'rowValue2'},
        {id: 3, colName: 'rowValue3'}
      ]);
    });
};

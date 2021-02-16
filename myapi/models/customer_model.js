const db = require('../database');

const customer = {
  get: function(callback) {
    return db.query('select * from customer', callback);
  },
  getById: function(id, callback) {
    return db.query('select * from customer where id_customer=?', [id], callback);
  },
  add: function(customer, callback) {
    return db.query(
      'insert into customer (fname,lname) values(?,?)',
      [customer.fname, customer.lname],
      callback
    );
  },
  delete: function(id, callback) {
    return db.query('delete from customer where id_customer=?', [id], callback);
  },
  update: function(id, customer, callback) {
    return db.query(
      'update customer set fname=?,lname=? where id_customer=?',
      [customer.fname, customer.lname, id],
      callback
    );
  }
};
module.exports = customer;
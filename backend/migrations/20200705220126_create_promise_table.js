const createPromiseTableQuery = `
    CREATE TABLE promise (
        id serial primary key,
        uuid text unique,
        content text unique, 
        time text, 
        date text, 
        place text, 
        phone_number integer,
        ctime timestamptz,
        mtime timestamptz default current_timestamp
        );`

const dropPromiseTableQuery = `DROP TABLE promise`


exports.up = function(knex) {
  return knex.raw(createPromiseTableQuery)
};

exports.down = function(knex) {
  return knex.raw(dropPromiseTableQuery)
};

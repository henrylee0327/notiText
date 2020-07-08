const createPromiseTableQuery = `
    CREATE TABLE promise (
        id serial primary key,
        uuid text unique,
        content text, 
        time time, 
        date date, 
        place text, 
        phone_number text,
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

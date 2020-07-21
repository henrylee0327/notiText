const knex = require('knex')
const dbCfg = require('../knexfile')

// This will hold database connection
let conn = null

function connect () {
    return new Promise(function (resolve, reject) {
        conn = knex(dbCfg.development)
        conn.raw(`SELECT 1 + 1 AS test`)
            .then((result) => {
                console.log(result.rows)
                if (result.rows.length === 1 && result.rows[0].test === 2) {
                    console.log('Database connected')
                    resolve()
                } else {
                    console.error('Database was unable to do 1+1')
                    reject()
                }
            })
            .catch((err) => {
                reject(err)
            })
    })
}

// get a whole list of Promise query
const getPromiseQuery = 'SELECT * FROM promise'

function getPromise () {
    return conn.raw(getPromiseQuery)
        .then((result) => {
            return result.rows
        })
}

// get an individual promise query
const getIndividualPromiseQuery = 'SELECT * FROM promise WHERE uuid = ?'

function getIndividualPromise (uuid) {
    return conn.raw(getIndividualPromiseQuery, uuid)
        .then((result) => {
            return result.rows
        })
}

// Create a new promise query
const createPromiseQuery = 
`INSERT INTO promise (uuid, content, time, date, place, phone_number, email, ctime, mtime) 
VALUES (?, ?, ?, ?, ?, ?, ?, current_timestamp, current_timestamp)
RETURNING *
`

function createPromise (uuid, content, time, date, place, phone_number, email) {
    return conn.raw(createPromiseQuery, [uuid, content, time, date, place, phone_number, email])
        .then((result) => {
            return result.rows
        })
}

// Update a promise query
const updatePromiseQuery = 
`UPDATE promise SET uuid = ?, content = ?, time = ?, date = ?, place = ?, phone_number = ?, ctime = current_timestamp, mtime = current_timestamp, email = ? 
WHERE uuid = ? 
RETURNING *;
`

function updatePromise (uuid, content, time, date, place, phone_number, email) {
    return conn.raw(updatePromiseQuery, [uuid, content, time, date, place, phone_number, email])
        .then((result) => {
            return result.rows
        })
}

// Delete a promise query
const deletePromiseQuery = 
`
DELETE FROM promise WHERE uuid = ?
RETURNING *;
`

function deletePromise (uuid) {
    return conn.raw(deletePromiseQuery, [uuid])
        .then((result) => {
            return result.rows
        })
}

// Public API

module.exports = {
    connect: connect,
    getPromise: getPromise,
    getIndividualPromise: getIndividualPromise,
    createPromise: createPromise,
    updatePromise: updatePromise,
    deletePromise: deletePromise
}
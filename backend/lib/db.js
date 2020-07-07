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

const getPromiseQuery = 'SELECT * FROM promise'

function getPromise () {
    return conn.raw(getPromiseQuery)
        .then((result) => {
            return result.rows
        })
}

// Public API

module.exports = {
    connect: connect,
    getPromise: getPromise
}
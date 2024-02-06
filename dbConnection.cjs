const {MongoClient} = require('mongodb')

let dbConnection
function connectToDb(callBack) {
    MongoClient.connect('mongodb+srv://janani:prathika@cluster0.eqzasu5.mongodb.net/praga?retryWrites=true&w=majority').then(function(client) {
        dbConnection = client.db()
        console.log("connected")
        callBack()
    }).catch(function(error) {
        callBack(error)
    })
}

function getDb() {
    return dbConnection
}

// Exporting required functions
module.exports = {connectToDb, getDb}
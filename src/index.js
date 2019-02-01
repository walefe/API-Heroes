const ContextStrategy = require('./db/strategies/base/contextStrategy')
const MongoDB = require('./db/strategies/mongodb')
const Postgres= require('./db/strategies/postgres')

const contexMongo = new ContextStrategy(new MongoDB())
contexMongo.create()

const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create()
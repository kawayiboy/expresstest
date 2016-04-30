var settings = require('../db-set'),
    Db = require('mongodb').Db,
    Connection = require('mongodb').Connection,
    Server = require('mongodb').Server;
module.exports = new Db(settings.db, 
						new Server(settings.url, Connection.DEFAULT_PORT), 
						{safe: true});
const server = require('./config/configs')
require('./config/db')
require('./config/routes')(server)
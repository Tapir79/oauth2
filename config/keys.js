
if(process.env.NODE_ENV === 'production'){
    //we're in production - return prod keys
    module.exports = require('./prod');
} else {
    // we're in development -return dev keys
    module.exports = require('./dev');
}


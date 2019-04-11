const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb+srv://omnistack:1a23B456b@cluster0-ikrsv.mongodb.net/omnistack?retryWrites=true')
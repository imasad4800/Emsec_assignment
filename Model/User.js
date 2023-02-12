const mong = require('mongoose')


const schema = new mong.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        
    }

})

module.exports = mong.model('User',schema)

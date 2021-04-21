const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UsersSchema = new schema({
    tenant: {
        type: String
    },
    client_id: {
        type: String
    },
    connection: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    user_metadata: {
        type: Object
    },
    given_name: {
        type: String
    },
    family_name: {
        type: String
    },
    request_language: {
        type: String
    },
    points: {
        type: Number
    }
})

const Users = mongoose.model('users', UsersSchema);

module.exports = Users;
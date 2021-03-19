const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UsersSchema = new Schema({
    _id: {
        type: ObjectID,
        required: [true, 'The _id field is required']
      },

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
        type: Int32
    }
})

const Users = mongoose.model('users', UsersSchema);

module.exports = Users;
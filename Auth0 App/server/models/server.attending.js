const mongoose = require('mongoose');
const schema = mongoose.Schema;

const AttendingSchema = new schema({
    event: ObjectId,
    user: ObjectId
});
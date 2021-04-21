const mongoose = require('mongoose');
const schema = mongoose.Schema;

const EventsSchema = new schema({
    googleId: String,
    attending: [mongoose.Types.ObjectId]
});

const Events = mongoose.model('event', EventsSchema);

module.exports = Events;
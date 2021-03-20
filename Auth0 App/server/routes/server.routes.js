const controllers = require('../controllers/server.controllers.js');
const users = require('../models/server.users.js');
const router = express.Router();

router.get('/users', (req, res, next) => {
    users.find({}, 'email')
        .then(data => res.json(data))
        .catch(next)
});


const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const usersRoutes = require('./user-routes');

router.use('/thought', thoughtRoutes);
router.use('/users', usersRoutes);

module.exports = router;
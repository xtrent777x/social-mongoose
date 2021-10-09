const router = require('express').Router();
const {
  getAllUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers
} = require('../../controllers/users-controller');

// /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUsers);

// /api/Users/:id
router
  .route('/:id')
  .get(getUsersById)
  .put(updateUsers)
  .delete(deleteUsers);

module.exports = router;
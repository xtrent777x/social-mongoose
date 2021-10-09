const router = require('express').Router();
const {
  getAllUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
  addFriend
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

router
  .route('/:usersId/friends/:friendsId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
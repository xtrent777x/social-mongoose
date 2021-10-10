const router = require('express').Router();
const {
  addThought,
  removeThought,
  getAllThought,
  findThoughtById,
  addReaction
} = require('../../controllers/thought-controller');

// /api/thought/<usersId>
router.route('/:usersId').post(addThought);

router.route('/').get(getAllThought);

// /api/comments/<usersId>/<thoughtId>
router
  .route('/:usersId/:thoughtId')
  .put(addReaction)
  .get(findThoughtById)
  .delete(removeThought);



module.exports = router;
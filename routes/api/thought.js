const router = require('express').Router();
const {
  addThought,
  removeThought,
  getAllThought,
  findThoughtById,
  addReaction,
  removeReaction
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

router.route('/:usersId/:thoughtId/:reactionId').delete(removeReaction); 



module.exports = router;
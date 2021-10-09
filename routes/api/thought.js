const router = require('express').Router();
const {
  addThought,
  removeThought,
  getAllThought,
  getThoughtById,
  addReaction
} = require('../../controllers/thought-controller');

// /api/thought/<usersId>
router.route('/:usersId').post(addThought);

router.route('/').get(getAllThought);

// /api/comments/<usersId>/<thoughtId>
router
  .route('/:usersId/:thoughtId')
  .put(addReaction)
  .get(getThoughtById)
  .delete(removeThought);



module.exports = router;
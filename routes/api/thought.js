const router = require('express').Router();
const {
  addThought,
  removeThought
} = require('../../controllers/thought-controller');

// /api/thought/<usersId>
router.route('/:usersId').post(addThought);

// /api/comments/<usersId>/<thoughtId>
router
  .route('/:usersId/:thoughtId')
  .delete(removeThought);



module.exports = router;
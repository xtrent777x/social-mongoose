const { Thought, Users } = require('../models');

const thoughtController = {
  // add thought to user
  addThought({ params, body }, res) {
    console.log(params);
    Thought.create(body)
      .then(({ _id }) => {
        return Users.findOneAndUpdate(
          { _id: params.userId },
          { $push: { thought: _id } },
          { new: true }
        );
      })
      .then(dbSocialData => {
        console.log(dbSocialData);
        if (!dbSocialData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbSocialData);
      })
      .catch(err => res.json(err));
  },


  // remove thought
  removeThought({ params }, res) {
    Thought.findOneAndDelete({ _id: params.thoughtId })
      .then(deletedThought => {
        if (!deletedThought) {
          return res.status(404).json({ message: 'No thought with this id!' });
        }
        return Users.findOneAndUpdate(
          { _id: params.UsersId },
          { $pull: { thought: params.thoughtId } },
          { new: true }
        );
      })
      .then(dbSocialData => {
        if (!dbSocialData) {
          res.status(404).json({ message: 'No users found with this id!' });
          return;
        }
        res.json(dbSocialData);
      })
      .catch(err => res.json(err));
  },
};

module.exports = thoughtController;
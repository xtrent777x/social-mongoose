const { Thought, Users } = require('../models');

const thoughtController = {
  // add thought to user
  addThought({ params, body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        return Users.findOneAndUpdate(
          { _id: params.usersId },
          { $push: { thought: _id } },
          { new: true }
        );
      })
      .then(dbSocialData => {
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
          { _id: params.usersId },
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

  getAllThought(req, res) {
    Thought.find({})
      .populate({
        path: 'reactions',
        select: '-__v'
      })
      .select('-__v')
      .then(dbSocialData => res.json(dbSocialData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  findThoughtById({ params }, res) {
    Thought.findOne({ _id: params.thoughtId })
      .populate({
        path: 'reaction',
        select: '-__v'
      })
      .select('-__v')
      .then(dbSocialData => {
        if (!dbSocialData) {
          res.status(404).json({ message: 'No thought found with this id!' });
          return;
        }
        res.json(dbSocialData);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

//   addReaction({ params, body }, res) {
//     Thought.findOneAndUpdate(
//       { _id: params.thoughtId },
//       { $push: { reaction: body } },
//       { new: true }
//     )
//       .then(dbSocialData => {
//         if (!dbSocialData) {
//           res.status(404).json({ message: 'No Thought found with this id!' });
//           return;
//         }
//         res.json(dbSocialData);
//       })
//       .catch(err => err.json(err));
//   },

//   removeReaction({ params }, res) {
//     Thought.findOneAndUpdate(
//         { _id: params.thoughtId },
//         { $pull: { reactions: { reactionId: params.reactionId } } },
//         { new: true }
//     )
//         .then(dbSocialData => res.json(dbSocialData))
//         .catch(err => res.json(err));
// }

};

module.exports = thoughtController;
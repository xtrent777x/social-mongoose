const { Schema, model } = require('mongoose');

const UsersSchema = new Schema(
    {
      userName: {
        type: String,
        Unique: true,
        required: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        Unique: true,
        trim: true
      },
      thought: {
    
      },
      friend: {
       
      },
      
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      // prevents virtuals from creating duplicate of _id as `id`
      id: false
    }
  );


//   PizzaSchema.virtual('commentCount').get(function() {
//     return this.comments.reduce(
//       (total, comment) => total + comment.replies.length + 1,
//       0
//     );
//   });
  
 const Users = model('Users', UsersSchema);

 module.exports = Users;
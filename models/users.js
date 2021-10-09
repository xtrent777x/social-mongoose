const { Schema, model } = require('mongoose');

const UsersSchema = new Schema(
    {
      username: {
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
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      },
      friend: {
        type: Schema.Types.ObjectId,
        ref: 'User'
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


  UsersSchema.virtual('friendCount').get(function() {
    return this.friend.length;
    //  https://mongoosejs.com/docs/4.x/docs/api.html#virtualtype-js
  });
  
 const Users = model('Users', UsersSchema);

 module.exports = Users;
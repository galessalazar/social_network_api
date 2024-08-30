const { Schema, model } = require ('mongoose');


const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // dont know how to validate the email just yet look up mongoose matching validation
    },
    thoughts: [
         {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
    },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
      ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const User = model('User', userSchema);

module.exports = User;
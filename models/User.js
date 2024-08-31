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
        match: [ /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email required' ],
    },
    thoughts: [
         {
        type: String,
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
const { Schema, model } = requrire (mongoose);
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trimmed: true,
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
        toJson: {
            virtuals: true,
        },
        id: false,
    }
);

const User = model('User', userSchema);

model.exports = User;
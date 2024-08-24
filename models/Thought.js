const { Schema, model, default: mongoose } = require('mongoose');

// nested 

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
            // https://mongoosejs.com/docs/schematypes.html#schematype-options 
        },
        createdAt: {
            type: Date,
            default: Date.now(), 
            // unsure how to use a getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'reaction',
            },
        ],
        // not sure thats correct. im supposed to use the reactions schema of the arrays that get created?? 
    },
);

thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});
// https://mongoosejs.com/docs/tutorials/virtuals.html#:~:text=You%20define%20virtuals%20on%20a,the%20Schema%23virtual()%20function.&text=The%20Schema%23virtual()%20function%20returns%20a%20VirtualType%20object.,any%20type%20coercion%20on%20virtuals.

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
            // referenced the mini projects assignment model with assignment id
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            //   * Use a getter method to format the timestamp on query dont know how
        },
        reactions: [reactionSchema],
        // referenced mini project students model line 22, no se....

    }

);


const Thought = model('Thought', thoughtSchema);

module.exports = Thought;


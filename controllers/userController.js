const { ObjectId } = require('mongoose');
const  User  = require('../models/User');

module.exports = {

 async getUsers(req, res) {
    console.log('is it working');
    try {
        console.log('hi');
        const users = await User.find();
        console.log('what about now');
        res.json(users);

    } catch (err) {
        console.error('anything?');
        return res.status(500).json(err);
    }
},

async getSingleUserById(req, res) {
    try {
        const user = await User.findOne({ _id: req.params.userId}).select('-__v');

        if(!user) {
            return res.status(404).json({ message: 'get lost'})
        }

        res.json(user);
    } catch (err) {
        console.error(err);
        return res.status(500).json(err);
    }
},

async createUser(req, res) {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
},

async updateUserById(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.params.userId, req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
},

async deleteUserById(req, res) {
    try {
        const user = await User.findByIdAndRemove(req.params.userId);
        res.status(200);

        if(!user) {
            return res.status(404).json({ message: 'doesnt exist :('});
        }
    } catch(err) {
        console.error(err);
        res.status(500).json(err);
    }
},
};
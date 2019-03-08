// jshint esversion:6

const mongoose = require('mongoose');

let toDoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Cannot be empty'
    },
    completed: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

let Todo = mongoose.model('Todo', toDoSchema);
module.exports = Todo;
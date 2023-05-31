const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitSchema = new Schema({
    firstname: {
        type: Number,
        required: true,
    },
    lastname: {
        type: Number,
        required: true,
    },
    lastname: {
        type: Number,
        required: true,
    },
    lastname: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Employee", employeeSchema);

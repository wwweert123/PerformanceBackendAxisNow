const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const visitSchema = new Schema({
    DNS: {
        type: Number,
        required: true,
    },
    TCP: {
        type: Number,
        required: true,
    },
    Request: {
        type: Number,
        required: true,
    },
    Response: {
        type: Number,
        required: true,
    },
    Processing: {
        type: Number,
        required: true,
    },
    LoadEvent: {
        type: Number,
        required: true,
    },
    TotalTime: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Employee", visitSchema);

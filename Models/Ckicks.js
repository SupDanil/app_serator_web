const {Schema, model, Types} = require('mongoose');

const scheme = new Schema({
    clicks: {type: Number},
})

module.exports = model('Clicks', scheme);

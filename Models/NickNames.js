const {Schema, model, Types} = require('mongoose');

const scheme = new Schema({
    nickname: {type: String, required: true}
})

module.exports = model('Nickname', scheme);

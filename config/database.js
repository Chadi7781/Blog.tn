const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
    .update('I love node js')
    .digest('hex');

module.exports =
    {
        uri:'mongodb://localhost:27017/blog' ,
        secret:hash,
        db:'blog'
    }
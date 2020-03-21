const mongoose = require('mongoose');

const userShema = mongoose.Schema({
    name: {
        type : String,
        maxlength : 50
    },
    email : {
        type : String,
        trim : true, 
        unique : 1
    },
    password : {
        type : String,
        minlength : 5
    },
    lastname : {
        type : String,
        maxlengrth : 50
    },
    role : {
        type : Number,
        default : 0
    },
    image : String,
    token : {
        type : String
    },
    tokenExp : {
        type : Number,
    }
})

const User = mongoose.model('User',userShema)

module.exports = {User}

// trim = jun hwa @naver.com 띄어쓰기를 없애주는 역할을 함 -> junhwa @naver.com
// role = 관리자가 될 수 있고 일반유저가 될 수 있다. 
// 관리자는 일반유저를 관리하기 위해 관리자가 1이라면 관리자가 되겠고, 0이라면 일반유저로 설정할 수 있겠다.
// default = 임의로 role을 지정하지 않으면 0을 주겠다. 기본값이 0이다라고 이해하면 되겠다.
// token = 유효성 관리
// tokenExp = 유효기간 token이 사용할 수 있는 기간을 주는 것.
// Shema를 model로 감싸준다.
// const User = mongoose.model('User', userShema)
// userShema로 지정한 것을 model로 감싸는 것이다.
// 다른 파일에서도 쓸 수 있도록 module.exports ={User}를 해준다.


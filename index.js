const express = require('express') // dependencies의 express를 가져왔기때문에 가져 올 수 있다.
const app = express()
const port = 5000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://junhwa:apfhd123!@cluster0-xw9nb.mongodb.net/test?retryWrites=true&w=majority',{ 
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false 
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))

app.get('/', (req,reset) => reset.send('실행했다 res는 어디서 왔을까?'))
app.listen(port, () => console.log(`이건가보다 아항 ${port}`)) // ''이게 아니라 ``이거였습니다.

/*
app.get('/', (req, res) => res.send('Hello World! 이것이 노드인가요~~')) // '/' 루트 디렉토리에 Hello World가 출력되기 하는 것

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
*/

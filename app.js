const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 5000
const {MONGOURI} = require('./keys')
require('./models/user')

mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', ()=>{
    console.log('connected to mongo')
})
mongoose.connection.on('error', (err)=>{
    console.log('error connecting',err)
})



// OdqYehjgy6cY0kpS

// const customMiddleware = (req, res, next) =>{
//     console.log('middleware executed!')
//     next()
// }

// app.use(customMiddleware)

// app.get('/', (req, res) => {
//     console.log('home')
//     res.send('hello world')
// })

app.listen(PORT, () => {
    console.log('Server is connected via', PORT)
})
const express = require('express')
const app = express()
const PORT = 5000
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
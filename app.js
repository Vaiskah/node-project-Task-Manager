const express = require('express')
const app = express()

app.get('/hello', (req, res) =>{
    res.send('Welcome to Task Manager')
})


const port = 3001

app.listen(port, console.log(`Server is listening port ${3001}..........`))

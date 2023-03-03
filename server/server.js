const express = require('express')
const app = express()
const port = 80
const cors = require('cors');
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log(req)
})
app.get('/a', (req, res) => {
    res.send('you are AWESOME!')
    console.log(req)
})

app.get('/b', (req, res) => {
    res.send('really really AWESOME!!!!!!!!!!!')
    console.log(req)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.send('index API')
})

app.post('/api/sensor', (req, res) => {
    console.log(req.body)
    res.json({"Message": "index API"})
})

app.listen(port, () => {
    console.log(`Server: http://localhost:${port}`)
})

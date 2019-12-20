const express = require('express')
const app = express()
const port = process.env.PORT || 3000

//res.sendFile
//res.json
app.use(express.static('FrontEnd'))
app.get('/', (req, res) => res.sendFile(__dirname+'/FrontEnd/HTML/HOME.html'))
var student={"name" : "Being Zero", "college" : "VNRVJIET","regno" : 1232} 

app.get('/data', (req, res) => res.json(student))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

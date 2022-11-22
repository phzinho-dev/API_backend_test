const express = require('express')
const axios = require('axios')

const app = express()

app.listen('3000')

app.use(express.json())

app.route('/').get( (req,res)) => {
    axios.get('')

}

// app.route('/api/user').get((req,res) => {
//     return res.json({...req.query.since})
// })

// app.route('/api/user/:username/details').get((req,res) => {
//     return res.json({...req.params})
// })

// app.route('/api/user/:username/repos').get((req,res) => {
//     return res.json({...req.params})
// })

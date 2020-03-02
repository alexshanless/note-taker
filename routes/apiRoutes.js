const fs = require('fs')
const path = require('path');
const filePath = path.join(__dirname, '../db/db.json')

module.exports = function (app) {

    app.get('/api/notes', function (req, res) {
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) throw err;

            res.json(JSON.parse(data))
        })
    })

    app.post('/api/notes', function (req, res) {
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) throw err;

            data = JSON.parse(data)

            var newObj = req.body
            newObj.id = data.length + 1

            data.push(newObj)

            console.log(data)
        })
    })

    app.delete('/api/notes/:id', function (req, res) {

    })


}


const path = require('path');
const fs = require('fs');
const filePath = path.join(__dirname, '../db/db.json')

module.exports = function (app) {


    app.get("/api/notes", function (req, res) {

        fs.readFile(filePath, 'utf8', function (err, db) {
            if (err) res.sendStatus(500)

            res.json(JSON.parse(db));
        })
    });


    app.post("/api/notes", function (req, res) {
        const note = req.body;
        note.id = new Date().getTime();
        console.log(note);

        fs.readFile(filePath, 'utf8', function (err, db) {
            if (err) res.sendStatus(500)

            db = JSON.parse(db)
            db.push(note);

            fs.writeFile(filePath, JSON.stringify(db), function (err) {
                if (err) res.sendStatus(500)

                res.sendStatus(200)
            })

        })
    });

    app.delete("/api/notes/:id", function (req, res) {

        fs.readFile(filePath, 'utf8', function (err, db) {
            if (err) res.sendStatus(500)

            db = JSON.parse(db).filter(note => note.id !== parseInt(req.params.id))

            fs.writeFile(filePath, JSON.stringify(db), function (err) {
                if (err) res.sendStatus(500)

                res.sendStatus(200)
            })

        })
    });
};


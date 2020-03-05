db = require("../db/db.json");

module.exports = function (app) {


    app.get("/api/notes", function (req, res) {
        res.json(db);
    });


    app.post("/api/notes", function (req, res) {


        const note = req.body;

        note.id = new Date().getTime().toString();

        console.log(note);

        db.push(note);
        res.json(note);

    });

    app.delete("/api/notes/:note", function (req, res) {

        const note = req.body;
        console.log(note);

        db.splice(note, 1);
        res.json(note);

    });
};


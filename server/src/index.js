const express = require('express')
const db = require('./database.js');
const app = express();
const bodyParser = require('body-parser');
const port = 3003;
const cors = require('cors');

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

app.get("/dialogues", function(req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    db.Dialogue.findAll()
        .then( persons => {
            res.status(200).send(JSON.stringify(persons));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});
app.get("dialogues/:id", function(req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    db.Dialogue.findByPk(req.params.id)
        .then( Dialogue => {
            res.status(200).send(JSON.stringify(Dialogue));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});
app.post("/dialogues", function(req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    console.log(req.body);
    db.Dialogue.create({
        name: req.body.name,
        content: req.body.content,
        id: req.body.id
    })
        .then( Dialogue => {
            res.status(200).send(JSON.stringify(Dialogue));
        })
        .catch( err => {
            res.status(500).send(req.body);
        });
});

app.patch("/dialogues/:id", function(req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    db.Dialogue.update({
        name: req.body.name,
        content: req.body.content
    },{
        where: {
            id: req.params.id
        }
    })
        .then( (DialogueId) => {
            db.Dialogue.findByPk(DialogueId)
        .then( Dialogue => {
            res.status(200).send(JSON.stringify(Dialogue));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

app.delete("dialogues/:id", function(req, res) {
    res.set('Access-Control-Allow-Origin', '*');
    db.Dialogue.destroy({
        where: {
            id: req.params.id
        }
    })
        .then( () => {
            res.status(200).send();
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});
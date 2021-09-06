var express = require('express');
var router = express.Router();
var db = require('../DB/database')

router.get('/all', function(req, res) {
    db.User.findAll({attributes: ['name', 'email']})
    .then(users => {
        res.status(200).send(JSON.stringify(users));
    })
    .catch(err => {
        res.status(500).send(JSON.stringify(err))
    })
})

router.get("/:id", function(req, res) {
    db.User.findByPk(req.params.id)
    .then(user => {
        res.status(200).send(JSON.stringify(person));
    })
    .catch(error => {
        res.status(500).send(JSON.stringify(error));
    })
})

router.post("/", function(req, res) {
    db.User.create({
        name: req.body.name,
        email: req.body.email,
    })
    .then(user =>{
        res.status(200).send(JSON.stringify(user))
    })
    .catch(err => {
        res.status(500).send(JSON.stringify(err))
    })
})

router.put("/", function(req, res) {
    db.User.create({
        name: req.body.name,
        email: req.params.email,
        id: req.body.id
    })
    .then(person => {
        res.status(200).send(JSON.stringify(person))
    })
    .catch(error => {
        res.status(500).send(JSON.stringify(error))
    })
})

router.delete("/:id", function(req, res) {
    db.User.destroy({
        where: {
            id: req.params.id
        }
    })
    .then( ()=> {
        res.status(200).send();
    })
    .catch(error => {
        res.status(500).send(JSON.stringify(error))
    })
})

module.exports = router;
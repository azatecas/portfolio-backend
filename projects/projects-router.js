const router = require('express').Router();
const Projects = require('./projects-model.js');

router.get("/", (req, res) => {
    Projects
        .find()
        .then(user => {
            res.status(200).json({currentUsers: user});
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err})
        })
})

module.exports = router;
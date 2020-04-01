const router = require('express').Router();
const Skills = require('./skills-model.js');

router.get("/", (req, res) => {
    Skills
        .find()
        .then(skill => {
            res.status(200).json({currentSkills: skill});
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err})
        })
})

module.exports = router;
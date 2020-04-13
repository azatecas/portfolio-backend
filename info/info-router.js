const router = require('express').Router();
const Info = require('./info-model.js');
const restricted = require('../auth/restrictedMiddleware.js');


router.get("/", (req, res) => {
    Info
        .find()
        .then(info => {
            res.status(200).json(info);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err})
        })
})

router.post("/", restricted, (req, res) => {
    let body = req.body
    if(!body.name || !body.bio || !body.github || !body.linkedin || !body.img_url){
        res.status(400).json({ message: "required fields missing: name, bio, github, linkedin, img_url"})
    }    
    Info
        .add(body)
        .then(info => {
            res.status(201).json({ info: info })
        })
        .catch(err => {
            res.status(500).json({ message: "failed to add new info"})
        })
})

router.put("/:id", restricted, (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Info
        .findById(id)
        .then(skill => {
            if(skill) {
                Skills.update(changes, id)
                .then(updatedSkill => {
                    res.json(updatedSkill);
                })
            } else {
                res.status(404).json({message: 'could not find bio with that ID'})
            }
        })
        .catch(err => {
            res.status(500).json({ message: `Failed to update bio id:${id}`})
        })
})


router.delete("/:id", restricted, (req, res) => {
    const { id } = req.params
    
    Info
        .remove(id)
        .then(() => {
             res.json({ removed: id }); 
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to delete skill' });
          });
})


module.exports = router;
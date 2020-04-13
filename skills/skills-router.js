const router = require('express').Router();
const Skills = require('./skills-model.js');

router.get("/", (req, res) => {
    Skills
        .find()
        .then(skill => {
            res.status(200).json(skill);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err})
        })
})

router.post("/", (req, res) => {
    let body = req.body
    if(!body.skills_name || !body.img_url){
        res.status(400).json({ message: "skills_name & img_url fields required!"})
    }    
    Skills
        .add(body)
        .then(skill => {
            res.status(201).json(skill)
        })
        .catch(err => {
            res.status(500).json({ message: "failed to add new skill"})
        })
})

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Skills
        .findById(id)
        .then(skill => {
            if(skill) {
                Skills.update(changes, id)
                .then(updatedSkill => {
                    res.json(updatedSkill);
                })
            } else {
                res.status(404).json({message: 'could not find skill with that ID'})
            }
        })
        .catch(err => {
            res.status(500).json({ message: `Failed to update skill id:${id}`})
        })
})




router.delete("/:id", (req, res) => {
    const { id } = req.params
    
    Skills
        .remove(id)
        .then(() => {
             res.json({ removed: id }); 
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to delete skill' });
          });
})


module.exports = router;
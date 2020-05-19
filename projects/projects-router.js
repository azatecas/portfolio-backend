const router = require('express').Router();
const Projects = require('./projects-model.js');
const restricted = require('../auth/restrictedMiddleware');

router.get("/", (req, res) => {
    Projects
        .find()
        .then(proj => {
            res.status(200).json(proj);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error: err})
        })
})

router.post("/", restricted, (req, res) => {
    let body = req.body
    if(
        !body.img_url || 
        !body.project_title || 
        !body.project_des || 
        !body.tech_used || 
        !body.project_url || 
        !body.repo
        ){
        res.status(400).json({ message: "All Fields required"})
    }    
    Projects
        .add(body)
        .then(proj => {
            res.status(201).json({project: proj,
                res: restricted
            })
        })
        .catch(err => {
            res.status(500).json({ message: "failed to add new skill"})
        })
})

router.put("/:id", restricted, (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Projects
        .findById(id)
        .then(proj => {
            if(proj) {
                Projects
                .update(changes, id)
                .then(updatedProj => {
                    res.json(updatedProj);
                })
            } else {
                res.status(404).json({message: 'could not find skill with that ID'})
            }
        })
        .catch(err => {
            res.status(500).json({ message: `Failed to update skill id:${id}`})
        })
})




router.delete("/:id", restricted, (req, res) => {
    const { id } = req.params
    
    Projects
        .remove(id)
        .then(() => {
             res.json({ removed: id }); 
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to delete skill' });
          });
})



module.exports = router;
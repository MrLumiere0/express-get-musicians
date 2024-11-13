const express = require('express')
const router = express.Router();
const { Musician } = require("../../models/index");


router.get("/", async (req, res) => {
    const musicians = await Musician.findAll();
    res.json(musicians);
  });

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const musican = await Musician.findByPk(id);
    res.json(musican);
  });


router.post("/", async (req, res, next) => {
    
    try{
        const artist =  await Musician.create(req.body);
        
        if (artist){
            res.status(201).json({message: "Musician Created"})
        }

    }

    catch (error) {
        next (error)
    }
})

router.put("/:id", async (req,res) => {

    try{
      await Musician.update(req.body, {
        where: {id : req.params.id}
      })
      res.status(200)
      }

    catch (err)
    {
        res.status(404)
    }
})

router.delete("/:id", async (req,res) => {
    try{
        await Musician.destroy({where: {id: req.params.id}})
        res.status(201).json({message: "Musician Deleted"})
    }
    catch(err){
        res.send(400)
    }

})






module.exports = router;
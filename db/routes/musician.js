const express = require('express')
const router = express.Router();
const { Musician } = require("../../models/index");
const {check, validationResult} = require('express-validator')


router.get("/", async (req, res) => {
    const musicians = await Musician.findAll();
    res.json(musicians);
  });

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const musican = await Musician.findByPk(id);
    res.json(musican);
  });


router.post("/", [
    check("name").not().isEmpty().trim().withMessage("Name required"),
    check("instrument").not().isEmpty().trim().withMessage("Instrument Required"),
] ,
async (req, res, next) => {
    
    const errors = validationResult(req);

    if(!errors.isEmpty()){
       return  res.json({error: errors.array()})
    }
    else {
        const artist =  await Musician.create(req.body);
        const musicans = await Musician.findAll();
        res.json(musicans);
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
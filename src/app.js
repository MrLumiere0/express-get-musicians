const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

app.use(express.json())
app.use(express.urlencoded())


app.get("/musicians", async (req, res) => {
    const musicians = await Musician.findAll();
    res.json(musicians);
  });

app.get("/musicians/:id", async (req, res) => {
    const id = req.params.id;
    const musican = await Musician.findByPk(id);
    res.json(musican);
  });


app.post("/musicians", async (req, res, next) => {
    
    try{
        const artist =  await Musician.create(req.body);
        

        res.status(201).json({message: "Musician Created"})

    }

    catch (error) {
        next (error)
    }
})

app.put("/musicians/:id", async (req,res) => {

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

app.delete("/musicians/:id", async(req,res) => {
    try{
        await Musician.destroy({where: {id: req.params.id}})
        res.status(200).message("User Deleted!")
    }
    catch(err){
        res.send(400)
    }

})






module.exports = app;
const express = require("express");
const router = express.Router();
const { Movie } = require("../models/movie")

router.get("/", (req, res) => {
    res.send("Server Arriba");
});

//CRUD
//Create
router.post("/api/v1/movie", (req, res) => {
    const {title, year, image, description, theme, director} = req.body;
    const newMovie = Movie ({
        title,
        year,
        image,
        description,
        theme,
        director
    })
    newMovie.save((err, pelicula) => {
        err
        ? res.status(500).send(err)
        : res.status(200).send("Registro Exitos")
    })
});



module.exports = {router};
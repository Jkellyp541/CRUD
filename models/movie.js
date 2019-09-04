//Instancia de mongoose
const mongoose = require("mongoose");
//Creaciond el Schema
const Schema = mongoose.Schema;
//Id unico
const ObjectId = mongoose.Schema.ObjectId;

//Creacion del modelo
const movieSchema = new Schema({
    movieID: ObjectId, 
    tittle: String,
    year: Number,
    image: [String],
    description: {
        type: String,
        default: "Descripcion no disponible"
    },
    theme: {
        type: String,
        enum: ["comedia", "drama", "terror", "infantil", "accion"]
    },
    director: {
        type: String,
        maxlength: 30
    }
});

//Instancia de mongoose para generar el modelo
const Movie = mongoose.model("Movie",movieSchema);
//Exporta el modelo
module.exports = { Movie }
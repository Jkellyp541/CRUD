//Express framework para backend
const express = require("express");
//Body Parser sirve para recibir los JSON de los requests
const bodyParser = require("body-parser");
//Informacion que proviene del archivo de rutas
const {router} = require("./routes/routes");

//Importancion para la coneccion(Diver) a la base de datos con Mongo DB
const mongoose = require("mongoose");
const MONGOURI = require("./config/keys").mongoURI;

//Declaracion del puerto
const PORT = process.env.PORT || 5000;

//Instancia de Express
const app =  express();

//Body parser config
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Config de acceso a la base de datos.
mongoose.connect(MONGOURI, {useNewUrlParser: true})
    .then(() => console.log("Conectado a la base de datos"))
    .catch((error) => console.log(error));

//Instancia de las rutas
app.use("/", router);

//Levanta el server y siempre va de ultimo
app.listen(PORT, (router) => {
    console.log(`Server tunning on port ${PORT}`)
})

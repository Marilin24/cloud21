// Importar librerias
const express = require('express');
//Llamado al archivo de conexion
const knex = require('./db');
//Llamado al acrchivo de las rutas
const routes = require('./routes');
const cors= require('cors');
const app = express(); //Crear una nueva instancia
const port = 3000; // Puerto de salida   //3000

app.use(cors());
app.use(express.json());   //configura tipo de dato json

//servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

//URL base y rutas 
app.use('/api', routes);
app.use('/api/flores', routes);
app.use('/api/varieda', routes);
app.use('/api/jardines', routes);

//404
app.use((req, res, next) => {
    res.status(404).send('page not found');
});

//errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
});

app.listen(port, () => { //API por el puerto 3001
    console.log(`Servidor corriendo en el puerto ${port}`);
})

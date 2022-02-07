const express=require('express');
const cors = require('cors');
const path = require('path');
const { dbConnection } = require('./db/config');
require ('dotenv').config();


//crear el servidor/aplicacion de express
const app=express();

//base de datos
dbConnection();

//directorio publico
app.use(express.static('public'));


//lectura y parseo del body
app.use(express.json());
//cors
app.use(cors());
// Rutas
app.use( '/api/auth',require('./routes/auth') );

//manejo de rutas
app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'public/index.html'));
})

app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});

//forma anterior a la ES6
//const express = require('express')
//const mongoose = require('mongoose')


import express from 'express'  // forma actual
import mongoose from 'mongoose' // forma actual
import dotenv from 'dotenv' // forma actual 

dotenv.config()
import Usuarios from './modeles/user.js'

// require('dotenv').config() // Forma anterior
//const Usuarios = require('./modeles/user') //traemos el modelo // forma anterior a la es6

const app = express()
app.use(express.json())

//conectamos base de datos 
mongoose.connect(process.env.DB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,

})

.then(() =>
    console.log('conexion exitosa a la base de datos')
)

.catch((error) => console.log('Error en la conexion a la base de datos :', error))

//creamos crud

//empezamos con el Post 
app.post('/Usuarios',async(req, res)=>{
    //hacemos un manejo de errores  llamado try catch
    try{
        const {name, mail, phone, age} = req.body
        const nuevoUsuario = new Usuarios({name, mail, phone, age})
        await nuevoUsuario.save();
        res.status(201).json({
            message: 'Usuario creado con exito', Usuarios: nuevoUsuario
        })
    }catch(error){
        res.status(500).json({
            message: 'Error al crear Usuario', error
        })
    }
})

// hacemos el get 

app.get('/Usuarios', async(req,res) =>{
    try {
        const user = await Usuarios.find()
        res.status(200).json(user) 
    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener Usuario', error
        })
    }
})

// realizamos metodo Put actualizar

app.put('/Usuarios/:id',async(req, res) =>{
    try{
    const actualizarUsuario = await Usuarios.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(actualizarUsuario) 
    }catch(error){
        res.status(500).json({
            message: 'Error al actualizar Usuario', error
        })
    }
})

// Realizamos el metodo Delete Eliminar

app.delete('/Usuarios/:id', async(req, res)=>{
    try {
        await Usuarios.findByIdAndDelete(req.params.id)
        res.status(204).json({message:'Usuario eliminado correctamente'})
    } catch (error) {
        res.status(500).json({message:'Error al eliminar usuario',error})
    }
})


const PORT = process.env.PORT
app.listen(PORT,() => {console.log(`servidor inicializado en el puerto 3000`)})
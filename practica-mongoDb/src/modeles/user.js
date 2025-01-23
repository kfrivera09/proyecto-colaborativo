//const mongoose = require('mongoose')// forma de importat a la version ES6

import mongoose from "mongoose" // forma actual

const usuarioSchema = new mongoose.Schema({
    name: {type:String, required: true},
    mail: {type:String, required: true},
    phone: {type:Number, required: true},
    age: {type:Number, required: true},
})

const Usuarios = mongoose.model('usuarios',usuarioSchema)

// module.exports = Usuarios // Forma de exportar version ANTERIOR A LA ES6

export default Usuarios // forma actual
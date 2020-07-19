import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schemaUsers = new Schema({
	correo: String,
	password: String,
	nombre: String,
	ciudad: String,
	estado: Boolean,
	fecha: Date
})

// Convertir a modelo
const Auth = mongoose.model('Usuarios', schemaUsers);

export default Auth;
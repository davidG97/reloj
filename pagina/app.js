//----------LIBRERIAS-------------------------------------
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const history = require('connect-history-api-fallback');        // Middleware para Vue.js router modo history
const app = express();
const crypto = require('crypto-js')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const router = express.Router();
var http = require('http').createServer(app)
const socketio = require('socket.io')(http)
const axios = require('axios')
const sgTransport = require('nodemailer-sendgrid-transport');
//--------------------------------------------------------

//----------CONFIGURACION---------------------------------
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))     //application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'public')));
app.use(history());
app.use('/api', router)
app.set('puerto', process.env.PORT || 3000);
//-------------------------------------------------------

//--------------------SERVIDOR---------------------------
http.listen(app.get('puerto'), function () {
  console.log('App listening on port '+ app.get('puerto'));
});
//-------------------------------------------------------

//----------------DATABASE-------------------------------
const connectionstring = "mongodb+srv://David_garcia:97122110420@cluster0-gaa4d.mongodb.net/reloj"

mongoose.connect(connectionstring, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, res){
	if(err){
		console.log('Error conectando a Atlas: '+ err )
	}else{
		console.log('Conectado a Atlas')
	}
})
//--------------------------------------------------------

//-------------------JSON's-------------------------------
const datos = {
	temperatura_amb: 0,
	temperatura_local: 0
}
//--------------------------------------------------------

//-------------------SOCKET-------------------------------
socketio.on("connection", socket => {
	console.log("conectado por socket")
})
//--------------------------------------------------------

//---------------CONFIG. MENSAJE CORREO-------------------
const options = {
	auth: {
		api_key: "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"
	}
}
mailConfig = sgTransport(options);
transporter = nodemailer.createTransport(mailConfig);

var mensaje = "BIenvenido, gracias por unirte a nuestra app, por favor verifique el estado de su cuenta ingresando al siguiente link: https://your-clock.herokuapp.com/#/verify Gracias por su colaboracion.";
//---------------------------------------------------------

//--------------------IMPORTS------------------------------
import Auth from './models/users';
//---------------------------------------------------------

//------------------ROUTER---------------------------------
router.post('/login', async(req, res) => {
	
	var email = req.body.mail
	var contra = req.body.pass
	var nombre = req.body.name
	var ciudad = req.body.city
	
	if(!email || !contra || !nombre || !ciudad){	
		res.send("305")
		console.log("Error, faltaron datos")	
	}else{		
		await Auth.find({correo: email}, function(err, result){
			if(err){
				console.log("Error consultando")
				res.send("400")
			}else{
				console.log("Consulta realizada")
				if(result == ""){
					var contraHASH = crypto.HmacSHA1(contra, "ust")
					var payload = {
						correo: email,
						password: contraHASH,
						nombre: nombre,
						ciudad: ciudad,
						estado: false,
						fecha: new Date()
					}
					var myData = new Auth(payload)
					myData.save().then(item => {
						console.log('Usuario guardado en Atlas')
						res.send("300")
					})
					.catch(err => {
						console.log("No se pudo salvar el registro: "+err)
						res.send("400")
					})

					var mailOptions = {
						from: 'no-reply@yourclock.com',
						to: email,
						subject: 'Verificacion cuenta en Your Clock',
						text: mensaje
					};

					transporter.sendMail(mailOptions, function(error, info){
						if (error) {
						  console.log(error);
						} else {
						  console.log('Email enviado: ' + info.response);
						}
					});

				}else{
					console.log("Usuario ya existente")
					res.send("304")	
				}
			}
		})		
	}			
})

router.post('/auth', async(req, res) => {

	var correo_req = req.body.mail
	var password_req = req.body.pass

	if(!correo_req || !password_req){
		console.log("Error, faltan datos")
		res.send("305")
	}else{
		await Auth.find({correo: correo_req}, {_id: 0,__v: 0}, function(err, result){
			if(err){
				console.log("Error consultando")
				res.send("400")
			}else{	
				if(result == ""){
					console.log("Correo incorreto")
					res.send("307")
				}else{
					var contraHASH = crypto.HmacSHA1(password_req, "ust")
					if(contraHASH == result[0].password){
						if(result[0].estado == true){
							var tokenData = {
								email: correo_req,
								contra: password_req,
							}	
							updateToken(tokenData, function(error, token){
								if(error){
									res.send("400")
								}else{
									res.send(token)
								}
							})
						}else{
							console.log('verificacion no realizada')
							res.send("308")
						}
					}else{
						res.send("306")
						console.log("Contraseña incorrecta")
					}
				}
			}
		})
	}
})

router.post('/inicio', async(req, res) => {
	var token_req = req.body.token
	
	await verifyToken(token_req, function(err, newToken){
		if(err){
			res.send("401")
			console.log("Error, el token ha expirado en inicio")
		}else{
			res.send(newToken)
			console.log('Token actualizado')
		}
	})
})

router.post('/token', async(req, res) => {
	var token_req = req.body.token
	
	await jwt.verify(token_req, 'reloj', function(err, decoded){
		if(err){
			res.send("0")
		}else{
			res.send("1")
		}
	})
})

router.post('/verify', async(req, res) => {
	var email = req.body.mail

	if(!email){
		console.log('error, faltaron datos')
		res.send("305")
	}else{
		await Auth.find({correo: email}, {_id: 0,__v: 0}, function(err, result){
			if(err){
				console.log("Error consultando")
				res.send("400")
			}else{
				if(result == ""){
					console.log("Correo incorreto")
					res.send("307")
				}else{
					if(result[0].estado == true){
						res.send("309")
						console.log('verificacion ya realizada')
					}else{
						Auth.updateOne({correo: email},{$set: {estado: true}}, function(err,resullt){
							if(err){
								console.log("Error consultando")
								res.send("400")
							}else{
								console.log("estado actualizado correctamente")
								res.send("310")
							}
						})
					}
				}
			}
		})
	}
})

router.post('/datos', async(req, res) => {
	var temperatura_amb = req.body.temp_amb
	var temperatura_local = req.body.temp_local
	if(!temperatura_amb || !temperatura_local){
		res.send("faltaron datos")
	}else{
		res.send("OK")
		datos.temperatura_amb = temperatura_amb
		datos.temperatura_local = temperatura_local
		await socketio.emit('datos',datos)
		console.log(datos)
	}
})

router.post('/alarma', async(req, res) =>{
	var time = req.body.time

	if(!time){
		res.send("faltaron datos")
	}else{
		var hora = time.substr(0,2);
		var min = time.substr(3,4);
		var alarma = hora+min
		await axios.get('https://cloud.arest.io/reloj1/alarma',{
			params: {
				params: alarma,
				key: '821famk4b2t1q2el'
			}
		})
		.then(response => {
			console.log(response.data)
		})
		.catch(error => {
			console.log(error)
		})
		res.send(alarma)
	}
})
//-----------------------------------------------------------

//-------------------FUNCIONES-------------------------------
function updateToken(tokenData, callback){
	jwt.sign(tokenData, 'reloj', {expiresIn: 60*60}, function(err,newToken){
		if(err){
			console.log("el token no fue actualizado")
			callback(true, null)
		}else{
			console.log("el token fue actualizado")
			callback(false, newToken)
		}
	})
		
}

function verifyToken(token, callback){
	jwt.verify(token, 'reloj', function(err, decoded){
		if(err){
			console.log("el token ha expirado, vuelva a ingresar")
			callback(true, null)
		}else{
			var tokenData = {
				email: decoded.email,
				contra: decoded.contra
			}	
			updateToken(tokenData,function(err, newToken){
				if(err){
					callback(true, null)
				}else{
					callback(false, newToken)
				}
			})

		}
	})
}

function getDateTime(){
	var date = new Date()
	var hour = date.getHours()
	var min = date.getMinutes()
	var sec = date.getSeconds()
	var year = date.getFullYear()
	var month = date.getMonth() + 1
	month = (month < 10 ? "0" : "") + month
	var day = date.getDate()
	day = (day < 10 ? "0" : "") + day
	return year  + '-' + month + '-' + day + ' ' + hour + '-' + min + '-' + sec
}
//---------------------------------------------------------
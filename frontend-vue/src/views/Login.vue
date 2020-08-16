<template>
    <div class="mt-5 text-center">
        <b-img 
            center 
            src="https://zero1.sg/img/accountlogin-icon.png" 
            alt="Center image"
            width="175px"
        ></b-img>
        <br>
        <h1>
            Registrese
        </h1>
        <br>
        <div v-if="state == 305">
            <b-alert show dismissible variant="warning">
                Llene todos los campos para completar el registro
            </b-alert>
        </div>
        <div v-else-if="state == 304">
            <b-alert show dismissible variant="warning">
                Usuario ya existente, intentelo de nuevo
            </b-alert>
        </div>
        <div v-else-if="state == 400">
            <b-alert show dismissible variant="danger">
                Error, compruebe su conexion e intentelo de nuevo
            </b-alert>
        </div>
        <div v-else-if="state == 402">
            <b-alert show dismissible variant="danger">
                Error al enviar el correo, verifique su conexion, si el error persiste, intente mas tarde
            </b-alert>
        </div>
        <br>
        Nombre: <b-form-input type="text" v-model="userName" :state="comprobarName" size="sm" placeholder="Escriba su nombre completo"></b-form-input>
        <br>
        Correo: <b-form-input type="email" v-model="userEmail" :state="comprobarEmail" size="sm" placeholder="Escriba su correo electronico"></b-form-input>
        <br>
        Contraseña: <b-form-input type="password" v-model="userPassword" :state="comprobarPassword" size="sm" placeholder="Escriba su contraseña"></b-form-input>
        <br>
        Ciudad: <b-form-input type="text" v-model="userCity" :state="comprobarCity" size="sm" placeholder="Escriba su ciudad actual"></b-form-input>
        <br>
        <div>
            <b-button @click="enviar" variant="outline-success">Registrarse</b-button>
        </div>
        <br>
        <br>
    </div>
</template>

<script>

import router from 'vue-router'

export default{
    name: 'Login',
    data(){
        return{
            userName: "",
            userEmail: "",
            userPassword: "",
            userCity: "",
            state: "",
            token: ""
        }
    },
    computed:{
        comprobarName(){
            return this.userName.length > 0 ? true : false
        },
        comprobarEmail(){
            return this.userEmail.length > 0 ? true : false
        },
        comprobarPassword(){
            return this.userPassword.length > 0 ? true : false
        },
        comprobarCity(){
            return this.userCity.length > 0 ? true : false
        }
    },  
    methods:{
        enviar(){
            let vue=this
            console.log("enviado")
            this.axios.post('/login',{
                mail: this.userEmail,
                pass: this.userPassword,
                name: this.userName,
                city: this.userCity
            })
            .then(function (response) {
                console.log(response.data)
                vue.state = response.data
                if(response.data == 300){
                    alert("Usuario registrado correctamente, verifique su correo para autenticar su cuenta")
                    vue.$router.push('/')
                }
            })
            .catch(function (error) {
                console.log("ERROR: "+error);
                vue.$router.push('/error')
            });
        }
    }
}
</script>
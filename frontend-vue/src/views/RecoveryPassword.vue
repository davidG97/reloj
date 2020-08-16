<template>
    <div class="mt-5 text-center">
        <h1>
            Cambie su contraseña
        </h1>
        <br>
        <div v-if="state == 305">
            <b-alert show dismissible variant="warning">
                Llene todos los campos para completar el registro
            </b-alert>
        </div>
        <div v-else-if="state == 400">
            <b-alert show dismissible variant="warning">
                Error, compruebe su conexion e intentelo de nuevo
            </b-alert>
        </div>
        <br>
        Nueva contraseña: <b-form-input type="password" v-model="userPassword" :state="comprobarPassword" size="sm" placeholder="Escriba su contraseña"></b-form-input>
        <br>
        Repita la contraseña: <b-form-input type="password" v-model="userPasswordVerification" :state="comprobarPasswordVerification" size="sm" placeholder="Escriba de nuevo su contraseña"></b-form-input>
        <br>
        <div>
            <b-button @click="enviar" variant="outline-success">Cambiar</b-button>
        </div>
    </div>
</template>

<script>

import router from 'vue-router'

export default {
    name: "recoverypassword",
    data(){
        return{
            userPassword: "",
            userPasswordVerification: "",
            state: ""
        }
    },
    computed:{
        comprobarPassword(){
            return this.userPassword.length > 0 ? true : false
        },
        comprobarPasswordVerification(){
            return this.userPasswordVerification.length > 0 ? true : false
        }
    },
    methods:{
        enviar(){
            let vue = this
            if(this.userPassword != this.userPasswordVerification){
                alert("Las contraseñas indicadas no coinciden, verifique e intentelo de nuevo")
            }else{
                this.axios.post('/recoverypassword',{
                    id: vue.$route.params.id,
                    pass: this.userPassword
                })
                .then(function(response){
                    console.log(response.data)
                    vue.state = response.data
                    if(response.data == 310){
                        alert("Contraseña reestablecida exitosamente, ingrese de nuevo")
                        localStorage.token = null
                        vue.$router.push('/auth')
                    }
                })
                .catch(function (error) {
                    console.log("ERROR: "+error);
                    vue.$router.push('/error')
                });
            }
        }
    }
}
</script>
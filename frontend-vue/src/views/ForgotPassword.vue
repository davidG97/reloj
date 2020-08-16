<template>
    <div class="mt-5 text-center">
        <br>
        <h1>
            ¿Olvido o desea cambiar su contraseña?
        </h1>
        <br>
        <a1>
            Escriba su correo electronico, le enviaremos un mensaje para reestablecerla.
        </a1>
        <br>
        <div v-if='state == 400'>
            <b-alert show dismissible variant="warning">
                Error, compruebe su conexion e intentelo de nuevo
            </b-alert>
        </div>
        <div v-else-if='state == 402'>
            <b-alert show dismissible variant="warning">
                Error al enviar el correo, verifique su conexion, si el error persiste, intente mas tarde
            </b-alert>
        </div>
        <div v-else-if='state == 307'>
            <b-alert show dismissible variant="warning">
                Correo incorrecto o inexistente, intentelo de nuevo
            </b-alert>
        </div>
        <div v-else-if="state == 305">
            <b-alert show dismissible variant="warning">
                Llene todos los campos para completar el registro
            </b-alert>
        </div>
        <br>
        Correo: <b-form-input type="email" v-model="userEmail" :state="comprobarEmail" size="sm" placeholder="Escriba su correo electronico"></b-form-input>
        <br>
        <div>
            <b-button @click="enviar" variant="outline-success">Enviar</b-button>
        </div>
        <br>
        <br>
    </div>
</template>

<script>

import router from 'vue-router'

export default {
    name: 'forgotpassword',
    data(){
        return{
            userEmail: "",
            state: ""
        }
    },
    computed:{
        comprobarEmail(){
            return this.userEmail.length > 0 ? true : false
        }
    },
    methods:{
        enviar(){
            let vue = this
            console.log("enviado")
            this.axios.post('/forgotpassword',{
                mail: this.userEmail
            })
            .then(function(response){
                console.log(response.data)
                vue.state = response.data
                if(response.data == 300){
                    alert("Mensaje enviado exitosamente, verifique su correo para cambiar su contraseña")
                    vue.$router.push('/')
                }
            })
            .catch(function(error){
                console.log("ERROR: "+error)
                vue.$router.push('/error')
            });
        }
    }
}
</script>
<template>
    <div class="text-center">
        <img alt="Vue logo" src="../assets/logo.png" width="350px">
        <h1>
            Ingrese
        </h1>
        <br>
        <div v-if="state == 305">
            <b-alert show dismissible variant="warning">
                Llene todos los campos para completar el registro
            </b-alert>
        </div>
        <div v-else-if="state == 306">
            <b-alert show dismissible variant="warning">
                contraseña incorrecta, intentelo de nuevo
            </b-alert>
        </div>
        <div v-else-if="state == 307">
            <b-alert show dismissible variant="warning">
                Correo incorrecto, intentelo de nuevo
            </b-alert>
        </div>
        <div v-else-if="state == 308">
            <b-alert show dismissible variant="danger">
                Error, verifique su cuenta para continuar
            </b-alert>
        </div>
        <div v-else-if="state == 400">
            <b-alert show dismissible variant="danger">
                Error, compruebe su conexion e intentelo de nuevo
            </b-alert>
        </div>
        <br>
        Correo: <b-form-input type="email" v-model="userEmail" :state="comprobarEmail" size="sm" placeholder="Escriba su correo electronico"></b-form-input>
        <br>
        Contraseña: <b-form-input type="password" v-model="userPassword" :state="comprobarPassword" size="sm" placeholder="Escriba su contraseña"></b-form-input>
        <br>
        <b-button @click="enviar" variant="outline-success">Ingrese</b-button>
        <div v-if="this.loading == false">
            
        </div>
        <div v-else-if="this.loading == true">
            <div class="clearfix">
                <b-spinner class="float-right" label="Floated Right"></b-spinner>
            </div>
        </div>
        <br><br>
    </div>
</template>

<script>

export default{
    name: 'auth',
    data(){
        return{
            state: "",
            userEmail: "",
            userPassword: "",
            loading: false
        }
    },
    computed:{
        comprobarEmail(){
            return this.userEmail.length > 0 ? true : false
        },
        comprobarPassword(){
            return this.userPassword.length > 0 ? true : false
        }
    },  
    methods:{
        enviar(){
            let vue=this
            vue.loading = true
            console.log("enviado")
            this.axios.post('/auth',{
                mail: this.userEmail,
                pass: this.userPassword
            })
            .then(function (response) {
                vue.state = response.data
                if(response.data.length > 6 ){
                    console.log("token recibido")
                    localStorage.token = response.data
                    vue.$router.push('/inicio')
                }
            })
            .catch(function (error) {
                console.log("ERROR: "+error);
            });
        }
    }
}
</script>
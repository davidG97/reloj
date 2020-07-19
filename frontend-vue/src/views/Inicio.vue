<template>
    <div class="mt-5 text-center">
        <h1>
            Bienvenid@
        </h1>
        <br><br>
        <b-col>
            <br>
            temperatura ambiente: {{datos.temperatura_amb}}
            <br>
            temperatura local: {{datos.temperatura_local}}
            <br>
        </b-col>
        <b-col>
            <div>
                <br>
                Select a time: <input type="time" v-model="alarm" class="form-control">
                <br>
                <br>
                <b-button @click="alarma" variant="outline-success">Enviar alarma</b-button>
            </div>
        </b-col>
    </div>
</template>

<script>
import io from "socket.io-client"

export default {
    name: 'Inicio',
    data(){
        return{
            alarm: "",
            socket: {},
            token: localStorage.token,
            datos: {
                temperatura_amb: 0,
                temperatura_local: 0
            },
        }
    },
    methods:{
        enviar(){
            this.axios.post('/inicio',{
                token: localStorage.token
            })
            .then(function (response) {
                localStorage.token = response.data
            })
            .catch(function (error) {
                console.log("ERROR: "+error);
            });
        },
        alarma(){
            this.axios.post('/alarma',{
                time: this.alarm
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log("ERROR: "+error);
            });
        }
    },
    created() {
        this.enviar();
        this.socket = io('https://your-clock.herokuapp.com');
    },
    async mounted(){
        await this.socket.on('datos', data => {
            this.datos = data;
            console.log(data)
        })
    }
}
</script>

<style scoped>
	h1 {
		font-family: Courier;
		text-align: center;
		font-weight: 450;
		font-size: 70px;
		line-height: 1.3em;
	}
</style>
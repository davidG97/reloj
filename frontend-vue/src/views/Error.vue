<template>
    <div class="mb-2 text-center">
        <b-img :src="require('../assets/error.jpg')" fluid alt="Responsive image"></b-img>
        <br>
        <br>
        <h3> Lo sentimos, ha ocurrido un error :(</h3>
        <br>
        <h5> Por favor comprueba tu conexion a internet, recarga la pagina y vuelve a intentarlo. :D</h5>   
    </div>
</template>

<script>

import router from 'vue-router'

export default {
    name: "error"
}
</script>
<template>
  <div id="app">
      <b-navbar toggleable="md" type="dark" variant="dark"> 
		<b-container>
			<b-navbar-toggle target="nav-collapse">
			</b-navbar-toggle>
			<b-navbar-brand href="#/inicio">
				<img alt="Vue logo" src="@/assets/logo.png" width="55px">
				Reloj
			</b-navbar-brand>
			<b-collapse id="nav-collapse" is-nav>
				 <b-navbar-nav class="ml-auto">
					 <b-nav-item :to="{name: 'inicio'}">Inicio</b-nav-item>
					 <b-nav-item-dropdown right>
						<template v-slot:button-content>
							<em>Cuenta</em>
						</template>
						<b-dropdown-item href="#/Login">Registrese</b-dropdown-item>
						<b-dropdown-item href="#/Auth">Ingrese</b-dropdown-item>
						<b-dropdown-item-button @click="salir">Salir</b-dropdown-item-button>
          </b-nav-item-dropdown>
				 </b-navbar-nav>
			</b-collapse>
		</b-container>
	  </b-navbar>
	<b-container>
		<router-view/>
	</b-container>
  </div>
</template>

<script>
export default {
	name: 'app',
    data(){
        return{

        }
	},
	methods:{
		salir(){
			let vue=this
			console.log("Has salido")
			localStorage.token = null
			vue.$router.push('/auth')
		}
	}
}
</script>

<style>

body {
  margin: 0px;
  font-family: Helvetica, Verdana, sans-serif;
}
#side {
  float: left;
  width: 208px;
}
#full_div {
  position: absolute;
  overflow-x: auto;
  top: 0;
  right: 0;
  left: 208px;
  bottom: 0;
  padding-left: 8px;
  border-left: 1px solid #111;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  font: 200 15px/1.5 Helvetica, Verdana, sans-serif;
  border-bottom: 1px solid #999;
}
li:last-child {
  border: none;
}
li a {
  font-size: 15px;
  padding-left: 8px;
  text-decoration: none;
  color: #000;
  display: block;
  -webkit-transition: font-size 0.3s ease, background-color 0.3s ease;
  -moz-transition: font-size 0.3s ease, background-color 0.3s ease;
  -o-transition: font-size 0.3s ease, background-color 0.3s ease;
  -ms-transition: font-size 0.3s ease, background-color 0.3s ease;
  transition: font-size 0.3s ease, background-color 0.3s ease;
}
li a:hover {
  font-size: 20px;
  background: #000;
}
</style>
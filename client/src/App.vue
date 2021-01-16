<template>
	<div id="app">
		<NavBar></NavBar> 
		<RouterView />
	</div>
</template>

<script>
import NavBar from "../src/components/NavBar"
export default {
	components: {
		NavBar
	}
}
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Antic+Slab&display=swap');
	
	html, body {
		font-family: 'Antic Slab', sans-serif !important;
	}

	#app {
		font-family: 'Antic Slab', sans-serif !important;
	}
</style>
<template>
	<div id="app">
		<NavBar /> 
		<RouterView />
		<Footer />
	</div>
</template>

<script>
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"
export default {
	components: {
		NavBar,
		Footer,
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
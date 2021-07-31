<template>
	<div id="app">
		<!-- UI -->
		<NavBar />

		<!-- RouterView -->
		<RouterView />

		<!-- Footer -->
		<Footer />
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import NavBar from "@/components/nav/NavBar"
	import Footer from "@/components/nav/Footer"

	export default {
		components: {
			NavBar,
			Footer,
		}
	}
</script>

<style lang="scss">
	// [IMPORT] // Cuprum // Zilla Slab //
	@import url('https://fonts.googleapis.com/css2?family=Balthazar&display=swap');

	* { font-family: 'Balthazar', serif !important; }
</style>
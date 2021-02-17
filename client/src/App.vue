<template>
	<div id="app">
		<NavBar /> 
		<RouterView />
		<Footer />
	</div>
</template>

<script>
	// [IMPORT] Personal //
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
	// [IMPORT] // Cuprum // Zilla Slab //
	@import url('https://fonts.googleapis.com/css2?family=Allura&family=Courgette&display=swap');

	* { font-family: 'Courgette', cursive !important; }

	h1, h2, h3, h4, h5, h6 {
		font-family: 'Allura', cursive !important;
	}
</style>
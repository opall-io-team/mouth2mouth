<template>
	<nav
		class="bg-light shadow nav-drawer-menu"
		:class="{ isOpen: sideMenuOpen }"
	>
		<BButton
			v-show="sideMenuOpen"
			variant="primary"
			class="w-100 mb-3 p-4 text-light"
			@click="closeMenu"
		><XIcon size="36" /></BButton>

		<BButton
			v-show="sideMenuOpen"
			variant="outline-seconadry"
			class="w-100 p-2 text-primary"
			@click="home()"
		><span aria-hidden="true" style="font-size: 1.5em;">Home</span></BButton>

		<BButton
			v-show="sideMenuOpen"
			variant="outline-seconadry"
			class="w-100 p-2 text-primary"
			@click="services()"
		><span aria-hidden="true" style="font-size: 1.5em;">Services</span></BButton>

		<BButton
			v-show="sideMenuOpen"
			variant="outline-seconadry"
			class="w-100 p-2 text-primary"
			@click="gallery()"
		><span aria-hidden="true" style="font-size: 1.5em;">Gallery</span></BButton>

		<BButton
			v-show="sideMenuOpen"
			variant="outline-seconadry"
			class="w-100 p-2 text-primary"
			@click="about()"
		><span aria-hidden="true" style="font-size: 1.5em;">About</span></BButton>
		
		<BButton
			v-show="sideMenuOpen"
			variant="outline-seconadry"
			class="w-100 p-2 text-primary"
			@click="directions()"
		><span aria-hidden="true" style="font-size: 1.5em;">Directions</span></BButton>

		<a :href="companyInfo.googleMapsLink" class="text-center">
			<h5 class="h2 m-5 text-info">{{ companyInfo.address }}</h5>
		</a>

		<SocialMediaPlug v-show="sideMenuOpen" size="48" variant="info" class="my-3" />
	</nav>
</template>

<script>
	// [IMPORT] //
	import { XIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import companyInfo from '@/defaults/companyInfo'
	import SocialMediaPlug from '@/components/SocialMediaPlug'
	import router from '@/router'

	// [EXPORT] //
	export default {
		props: {
			sideMenuOpen: {
				type: Boolean,
				required: true,
			}
		},

		components: {
			XIcon,
			SocialMediaPlug,
		},

		data() {
			return {
				companyInfo: companyInfo
			}
		},

		methods: {
			closeMenu() {
				this.sideMenuOpen = !this.sideMenuOpen
				this.$emit('closeMenu')
			},

			home() {
				router.push({ name: '/' })
				this.closeMenu()
			},

			services() {
				router.push({ name: 'services' })
				this.closeMenu()
			},

			directions() {
				router.push({ name: '/directions' })
				this.closeMenu()
			},

			gallery() {
				router.push({ name: 'gallery' })
				this.closeMenu()
			},

			about() {
				router.push({ name: 'about' })
				this.closeMenu()
			},

			contactUs() {
				router.push({ name: 'contact-us' })
				this.closeMenu()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.nav-drawer-menu {
		z-index: 2000;

		position: fixed;
		top: 0;
		left: 0;

		height: 100vh;
		width: 0;

		overflow-x: hidden;
		transition: 0.5s;
	}

	.nav-drawer-menu button {
		transition: 0.3s;
		font-size: 2em;

		&:hover { background: hsl(224, 47%, 65%); }
	}
	
	.isOpen { width: 75%; }
</style>
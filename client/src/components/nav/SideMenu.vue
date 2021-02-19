<template>
	<nav
		class="bg-light shadow nav-drawer-menu"
		:class="{ isOpen: sideMenuOpen }"
	>
		<!-- Close Button -->
		<BButton
			v-show="sideMenuOpen"
			variant="primary"
			class="w-100 mb-2 p-4 text-light"
			@click="menuItemClicked('close-menu')"
		><XIcon size="36" /></BButton>

		<!-- Menu Items -->
		<BButton
			v-for="button in buttons"
			:key="button.type"
			v-show="sideMenuOpen"
			variant="outline-seconadry"
			class="w-100 p-2 text-primary"
			@click="menuItemClicked(button.type)"
		>
			<p v-if="button.text" class="h1 my-3">{{ button.text }}</p>
			<span v-else v-html="button.slideMenuIcon"></span>
		</BButton>

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
	import SocialMediaPlug from '@/components/SocialMediaPlug'
	import companyInfo from '@/defaults/companyInfo'
	import buttons from '@/defaults/pageLinks'
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
				companyInfo: companyInfo,
				buttons: buttons,
			}
		},

		methods: {
			menuItemClicked(type) {
				switch(type) {
					case 'close-menu':
						this.sideMenuOpen = !this.sideMenuOpen
						this.$emit('closeMenu')
						break

					case 'home':
						router.push({ name: '/' })
						this.closeMenu()
						break

					case 'services':
						router.push({ name: 'services' })
						this.closeMenu()
						break


					case 'faq':
						router.push({ name: 'faq' })
						this.closeMenu()
						break


					case 'our-team':
						router.push({ name: 'our-team' })
						this.closeMenu()
						break

					case 'about':
						router.push({ name: 'about' })
						this.closeMenu()
						break

					case 'gallery':
						router.push({ name: 'gallery' })
						this.closeMenu()
						break

					case 'directions':
						router.push({ name: 'directions' })
						this.closeMenu()
						break
				}
			}
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
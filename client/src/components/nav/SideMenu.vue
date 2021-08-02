<template>
	<nav
		class="bg-light shadow nav-drawer-menu"
		:class="{ isOpen: $store.state.showMenu }"
	>
		<!-- Close Button -->
		<BButton
			v-show="$store.state.showMenu"
			variant="primary"
			class="w-100 mb-2 p-4 text-light"
			@click="menuItemClicked('close-menu')"
		><XIcon size="36" /></BButton>

		<!-- Menu Items -->
		<BButton
			v-for="button in buttons"
			:key="button.type"
			v-show="$store.state.showMenu"
			variant="outline-seconadry"
			class="w-100 text-primary"
			@click="menuItemClicked(button.type)"
		>
			<p v-if="button.text" class="h1 my-1">{{ button.text }}</p>
			<span v-else v-html="button.slideMenuIcon"></span>
		</BButton>

		<a v-show="$store.state.showMenu" :href="companyInfo.googleMapsLink" class="text-center">
			<h5 class="m-4 text-secondary">{{ companyInfo.address }}</h5>
		</a>

		<SocialMediaPlug
			v-show="$store.state.showMenu"
			size="1.8x"
			variant="secondary"
			class="m-4"
		/>
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
			closeMenu() {
				this.$store.state.showMenu = !this.$store.state.showMenu
			},

			menuItemClicked(type) {
				switch(type) {
					case 'close-menu':
						this.$store.state.showMenu = !this.$store.state.showMenu
						break

					case 'home':
						router.push({ name: '/' })
						this.closeMenu()
						break

					default:
						router.push({ name: type })
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
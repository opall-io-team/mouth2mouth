<template>
	<div class="w-100 bg-light border-bottom border-primary">
		<BContainer bg-variant="dark" class="d-flex justify-content-between container-fluid py-3">
			<!-- Title -->
			<div class="text-center">
				<RouterLink to="/" class="text-decoration-none">
					<img :src="require('../../assets/logo.png')"
						class="w-100 mb-2" style="max-width: 130px;"
					>
					<h6
						v-html="companyInfo.companyCaption1"
						class="m-0 font-weight-bold text-secondary"
						style="font-size: .8em;"
					></h6>
				</RouterLink>
			</div>

			<!-- Links -->
			<div class="d-none d-lg-block mx-auto">
				<a v-if="companyInfo.googleMapsLink" :href="companyInfo.googleMapsLink">
					<BButton variant="none" class="w-100 mb-2 text-primary">
						<h5 class="m-0">
							<MapPinIcon size="1x"/> {{ companyInfo.address }}
						</h5>
					</BButton>
				</a>
				<hr class="border-primary">

				<!-- Menu Items -->
				<RouterLink
					v-for="(button, i) in buttons"
					:key="i"
					:to="button.path"
				>
					<BButton
						variant="none"
						class="mx-2 mx-xl-4 px-1 py-0 font-weight-bold shadow-none text-secondary menu-link"
					>
						<span v-if="button.navIcon" v-html="button.navIcon"></span>
						<span v-else>{{ button.text }}</span>
					</BButton>
				</RouterLink>
			</div>

			<!-- Phone # & Social Media -->
			<div class="ml-auto text-right">
				<a :href="companyInfo.phoneNumberLink">
					<BButton variant="outline-primary" class="mb-3 px-4"
						style="border-width: 2px; border-radius: 8px !important;"
					>
						<PhoneIcon stroke-width="2" size="1.5x" />
					</BButton>
				</a>

				<div class="w-100">
					<SocialMediaPlug
						size="1.8x"
						variant="secondary"
						class="d-none d-sm-block float-lg-right"
					/>
				</div>
			</div>
		</BContainer>

		<BContainer>
			<!-- [HIDDEN] Menu Button -->
			<div class="w-100 d-block d-lg-none mb-3">
				<BButton
					variant="secondary"
					class="w-100"
					@click="toggle()"
				><MenuIcon /></BButton>
			</div>
		</BContainer>

		<!-- Hidden Side Menu -->
		<SideMenu />
	</div>
</template>

<script>
	import { MapPinIcon, MenuIcon, PhoneIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SideMenu from '@/components/nav/SideMenu'
	import SocialMediaPlug from '@/components/SocialMediaPlug'
	import companyInfo from '@/defaults/companyInfo'
	import buttons from '@/defaults/pageLinks'
	import router from '../../router'

	export default {
		components: {
			MapPinIcon,
			MenuIcon,
			PhoneIcon,
			SideMenu,
			SocialMediaPlug
		},

		data() {
			return {
				companyInfo: companyInfo,
				buttons: buttons,
				loggedIn: false,
				decoded: {},
				sideMenuOpen: false,router:router
			}
		},

		methods: {
			toggle() { this.$store.state.showMenu = !this.$store.state.showMenu },
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/bootstrap-override.scss';

	.menu-link {
		:hover {
			@extend .text-primary;
		}
	}

	.router-link-exact-active {
		.menu-link {
			@extend .text-primary;
		}
	}
</style>
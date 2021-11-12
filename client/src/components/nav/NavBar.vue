<template>
	<div class="w-100 bg-secondary-lighter">
		<BContainer bg-variant="dark" class="d-flex justify-content-between container-fluid pt-3">
			<!-- Title -->
			<div class="text-left">
				<RouterLink to="/" class="text-decoration-none">
					<img :src="companyInfo.companyLogo"
						class="w-100 mb-2"
						style="max-width: 130px;"
					>
				</RouterLink>
			</div>

			<!-- Links -->
			<div class="d-none d-lg-block mx-auto my-4">
				<a v-if="companyInfo.googleMapsLink" :href="companyInfo.googleMapsLink">
					<BButton variant="none" class="w-100 mb-2 text-primary">
						<h5 class="m-0">
							<MapPinIcon size="1x"/> {{ companyInfo.address }}
						</h5>
					</BButton>
				</a>

				<!-- Menu Items -->
				<RouterLink
					v-for="(button, i) in buttons"
					:key="i"
					:to="button.path"
				>
					<BButton
						variant="none"
						class="mx-4 px-1 py-4 font-weight-bold shadow-none text-primary menu-link"
					>
						<span>{{ button.text }}</span>
					</BButton>
				</RouterLink>
			</div>

			<!-- Phone # & Social Media -->
			<div class="ml-auto text-right">
				<a :href="companyInfo.phoneNumberLink">
					<BButton variant="secondary" class="mb-3 px-4"
					>
						<PhoneIcon stroke-width="2" size="1.5x" />
					</BButton>
				</a>

				<div class="w-100">
					<SocialMediaPlug
						size="1.8x"
						variant="primary"
						class="d-none d-sm-block float-lg-right"
					/>
				</div>
			</div>
		</BContainer>

		<BContainer class="d-block d-lg-none pb-3">
			<!-- [HIDDEN] Menu Button -->
			<div class="w-100">
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
	import router from '@/router'

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
		transition: 1s;
		@extend .border-top-0;
		@extend .border-left-0;
		@extend .border-right-0;

		:hover {
			@extend .text-secondary;
		}
	}

	@media (min-width: 1600px) {
		.menu-link {
			margin: 0 50px !important;
		}
	}

	.router-link-exact-active {
		.menu-link {
			@extend .text-secondary;
			@extend .border-bottom;
			@extend .border-secondary;

			border-width: 2px !important;
		}
	}
</style>
<template>
	<div class="w-100 pt-4 bg-light border-bottom border-primary">
		<BContainer bg-variant="dark">
			<BRow>
				<!-- Title -->
				<BCol cols="12" md="12" lg="2" class="mb-3 text-center">
					<RouterLink to="/" class="text-decoration-none">
						<h2 class="m-0 font-weight-bold text-primary">
							{{ companyInfo.companyName }}
						</h2>
						<h4 class="m-0 font-weight-bold text-info">
							{{ companyInfo.companyCaption1 }}
						</h4>
					</RouterLink>
				</BCol>

				<!-- Links -->
				<BCol cols="12" md="12" lg="8" class="d-none d-md-block mb-3 text-center">
					<a :href="companyInfo.googleMapsLink">
						<BButton variant="light" class="mb-2 text-secondary">
						<h4 class="m-0">{{ companyInfo.address }}</h4>
						</BButton>
					</a><br>

					<!-- Menu Items -->
					<RouterLink
						v-for="button in buttons"
						:key="button.type"
						:to="button.path"
					>
						<BButton
							variant="light"
							class="text-info font-weight-bold"
							@click="menuItemClicked(button.type)"
						>
							<span v-if="button.text">{{ button.text }}</span>
							<span v-else v-html="button.navIcon"></span>
						</BButton>
					</RouterLink>
				</BCol>

				<!-- Phone # & Social Media-->
				<BCol cols="12" md="12" lg="2" class="mb-3 text-center text-lg-right">
					<a :href="companyInfo.phoneNumberLink">
						<BButton variant="outline-primary" size="lg" class="mb-3">
							{{ companyInfo.phoneNumber }} 
						</BButton>
					</a>

					<div class="w-100">
						<SocialMediaPlug size="2x" variant="info" class="float-lg-right" />
					</div>
				</BCol>

				<!-- Hidden Menu Button -->
				<BCol cols="12" class="d-block d-md-none mb-3">
					<BButton
						variant="primary"
						class="w-100"
						@click="toggle()"
					><MenuIcon /></BButton>
				</BCol>
			</BRow>
		</BContainer>

		<!-- Hidden Side Menu -->
		<SideMenu :sideMenuOpen="sideMenuOpen" @closeMenu="toggle()" />
	</div>
</template>

<script>
	import { MenuIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SideMenu from '@/components/nav/SideMenu'
	import SocialMediaPlug from '@/components/SocialMediaPlug'
	import companyInfo from '@/defaults/companyInfo'
	import buttons from '@/defaults/pageLinks'

	export default {
		components: {
			MenuIcon,
			SideMenu,
			SocialMediaPlug
		},

		data() {
			return {
				companyInfo: companyInfo,
				buttons: buttons,
				loggedIn: false,
				decoded: {},
				sideMenuOpen: false
			}
		},

		methods: {
			toggle() { this.sideMenuOpen = !this.sideMenuOpen },
		},
	}
</script>

<style lang="scss" scoped>
	.nav {
		top: 0;
		z-index: 10;
		background-color: rgba(0, 0, 0, 0.726) !important;
	}
</style>
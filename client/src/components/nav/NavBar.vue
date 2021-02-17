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
						<h5 class="m-0 font-weight-bold text-info">
							{{ companyInfo.companyCaption1 }}
						</h5>
					</RouterLink>
				</BCol>

				<!-- Links -->
				<BCol cols="12" md="12" lg="8" class="d-none d-md-block mb-3 text-center">
					<h6 class="m-0 font-weight-bold">
						<RouterLink
							to="/"
							class="h5 mx-2 text-info"
						>Home</RouterLink>

						<RouterLink
							to="/services"
							class="h5 mx-2 text-info"
						>Our Services</RouterLink>

						<RouterLink
							to="/directions"
							class="h5 mx-2 text-info"
						>Get Directions</RouterLink>

						<RouterLink
							to="/gallery"
							class="h5 mx-2 text-info"
						>Gallery</RouterLink>

						<RouterLink
							to="/about"
							class="h5 mx-2 text-info"
						>About</RouterLink>

						<RouterLink
							to="/contact-us"
							class="h5 mx-2 text-info"
						>Contact Us</RouterLink>
					</h6>
				</BCol>

				<!-- Phone # & Social Media-->
				<BCol cols="12" md="12" lg="2" class="mb-3 text-center text-lg-right">
					<a :href="companyInfo.phoneNumberLink">
						<BButton variant="primary" pill>
							Call Us: {{ companyInfo.phoneNumber }} 
						</BButton>
					</a>

					<div class="w-100 mt-3">
						<SocialMediaPlug size="2x" variant="info" />
					</div>
				</BCol>

				<!-- Hidden Menu Button -->
				<BCol cols="12" class="d-block d-md-none mb-3">
					<BButton
						variant="primary"
						class="w-100"
						@click="toggle()"
					>menu</BButton>
				</BCol>
			</BRow>
		</BContainer>

		<!-- Hidden Side Menu -->
		<SideMenu :sideMenuOpen="sideMenuOpen" @closeMenu="toggle()" />
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import SideMenu from '@/components/nav/SideMenu'
	import SocialMediaPlug from '@/components/SocialMediaPlug'
	import companyInfo from '@/defaults/companyInfo'

	export default {
		components: {
			SideMenu,
			SocialMediaPlug
		},

		data() {
			return {
				companyInfo: companyInfo,
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
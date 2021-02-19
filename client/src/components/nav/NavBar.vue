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
					<a :href="companyInfo.googleMapsLink" >
						<h4 class="mb-2 text-secondary">{{ companyInfo.address }}</h4>
					</a>
					
					<RouterLink to="/">
						<BButton variant="light" class="text-info font-weight-bold">
							<HomeIcon size="1.1x" stroke-width="2.4" />
						</BButton>
					</RouterLink>

					<RouterLink to="/services">
						<BButton variant="light" class="text-info font-weight-bold">
							<h4 class="m-0">Services</h4>
						</BButton>
					</RouterLink>

					<RouterLink to="/faq">
						<BButton variant="light" class="text-info font-weight-bold">
							<h4 class="m-0">FAQ</h4>
						</BButton>
					</RouterLink>

					<RouterLink to="/our-team">
						<BButton variant="light" class="text-info font-weight-bold">
							<h4 class="m-0">Our Team</h4>
						</BButton>
					</RouterLink>

					<RouterLink to="/about">
						<BButton variant="light" class="text-info font-weight-bold">
							<h4 class="m-0">About Us</h4>
						</BButton>
					</RouterLink>

					<RouterLink to="/gallery">
						<BButton variant="light" class="text-info font-weight-bold">
							<h4 class="m-0">Gallery</h4>
						</BButton>
					</RouterLink>

					<RouterLink to="/directions">
						<BButton variant="light" class="text-info font-weight-bold">
							<h4 class="m-0">Directions</h4>
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
	import { HomeIcon, MenuIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SideMenu from '@/components/nav/SideMenu'
	import SocialMediaPlug from '@/components/SocialMediaPlug'
	import companyInfo from '@/defaults/companyInfo'

	export default {
		components: {
			HomeIcon,
			MenuIcon,
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
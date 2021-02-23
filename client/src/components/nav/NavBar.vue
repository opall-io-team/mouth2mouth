<template>
	<div class="w-100 pt-4 bg-light border-bottom border-primary">
		<BContainer bg-variant="dark">
			<BRow>
				<!-- Title -->
				<BCol cols="12" md="12" lg="3" class="mb-3 text-center">
					<RouterLink to="/" class="text-decoration-none">
						<img :src="companyInfo.companyLogo" class="w-100" style="max-width: 260px;">
						<h4 class="m-0 font-weight-bold text-info">
							{{ companyInfo.companyCaption1 }}
						</h4>
					</RouterLink>
				</BCol>

				<!-- Links -->
				<BCol cols="12" md="12" lg="6" class="d-none d-md-block mb-3 text-center">
					<a :href="companyInfo.googleMapsLink">
						<BButton variant="light" class="mb-2 text-secondary">
							<h5 class="m-0">
								<MapPinIcon size="1x"/> {{ companyInfo.address }}
							</h5>
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
							class="mx-1 px-2 py-0 font-weight-bold text-info"
							@click="menuItemClicked(button.type)"
						>
							<span v-if="button.text">{{ button.text }}</span>
							<span v-else v-html="button.navIcon"></span>
						</BButton>
					</RouterLink>
				</BCol>

				<!-- Phone # & Social Media-->
				<BCol cols="12" md="12" lg="3" class="mb-3 text-center text-lg-right">
					<a :href="companyInfo.phoneNumberLink">
						<BButton variant="outline-primary" class="mb-3">
							<PhoneIcon size="1x" />
							{{ companyInfo.phoneNumber }} 
						</BButton>
					</a>

					<div class="w-100">
						<SocialMediaPlug size="1.8x" variant="info" class="float-lg-right" />
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
	import { MapPinIcon, MenuIcon, PhoneIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SideMenu from '@/components/nav/SideMenu'
	import SocialMediaPlug from '@/components/SocialMediaPlug'
	import companyInfo from '@/defaults/companyInfo'
	import buttons from '@/defaults/pageLinks'

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
				sideMenuOpen: false
			}
		},

		methods: {
			toggle() { this.sideMenuOpen = !this.sideMenuOpen },
		},
	}
</script>
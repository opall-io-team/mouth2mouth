<template>
	<div class="w-100 pt-4 bg-light border-bottom border-primary">
		<BContainer bg-variant="dark" class="py-3 d-flex container-fluid">
			<!-- Title -->
			<div class="mb-3 text-center">
				<RouterLink to="/" class="text-decoration-none">
					<h3>{{ companyInfo.companyName }}</h3>
					<h6 class="m-0 d-none d-md-block font-weight-bold text-info">
						{{ companyInfo.companyCaption1 }}
					</h6>
				</RouterLink>
			</div>

			<!-- Links -->
			<div class="d-none d-lg-block mx-auto text-lg-left">
				<a :href="companyInfo.googleMapsLink">
					<BButton variant="none" class="w-100 mb-2 text-primary">
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
						variant="none"
						class="mx-1 px-1 py-0 font-weight-bold text-info"
					>
						<span v-if="button.text">{{ button.text }}</span>
						<span v-else v-html="button.navIcon"></span>
					</BButton>
				</RouterLink>
			</div>

			<!-- Phone # & Social Media-->
			<div class="ml-auto mb-3 text-center text-lg-right">
				<a :href="companyInfo.phoneNumberLink">
					<BButton variant="info" class="mb-3">
						<PhoneIcon size="2x" />
					</BButton>
				</a>

				<div class="w-100">
					<SocialMediaPlug
						size="1.8x"
						variant="info"
						class="d-none d-sm-block float-lg-right"
					/>
				</div>
			</div>
		</BContainer>

		<BContainer>
			<!-- Hidden Menu Button -->
			<div class="w-100 d-block d-lg-none mb-3">
				<BButton
					variant="primary"
					class="w-100"
					@click="toggle()"
				><MenuIcon /></BButton>
			</div>
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
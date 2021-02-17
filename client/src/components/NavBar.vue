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
							class="mx-3 text-info"
						>Home</RouterLink>

						<RouterLink
							to="/services"
							class="mx-3 text-info"
						>Our Services</RouterLink>

						<RouterLink
							to="/directions"
							class="mx-3 text-info"
						>Get Directions</RouterLink>

						<RouterLink
							to="/about"
							class="mx-3 text-info"
						>About</RouterLink>

						<RouterLink
						to="/gallery"
						class="mx-3 text-info"
						>Gallery</RouterLink>
					</h6>
				</BCol>

				<!-- Phone # & Social Media-->
				<BCol cols="12" md="12" lg="2" class="mb-3 text-center text-lg-right">
					<a :href="companyInfo.phoneNumberLink">
						<BButton variant="primary" pill>
							Call Us: {{ companyInfo.phoneNumber }} 
						</BButton>
					</a>

					<div class="w-100 mt-3 text-center text-lg-right font-weight-bold">
						<a
							:href="companyInfo.companyInstagram"
							class="text-info"
						>
							<span class="mr-3">Follow us:</span>
							<InstagramIcon size="1.5x" />
						</a>
					</div>
				</BCol>

				<!-- Hidden Menu Button -->
				<BCol cols="12" class="d-block d-md-none mb-3">
					<BButton variant="primary" class="w-100">menu</BButton>
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	import companyInfo from '../defaults/companyInfo'
	import { InstagramIcon } from 'vue-feather-icons'

	export default {
		components: {
			InstagramIcon
		},

		data() {
			return {
				companyInfo: companyInfo
			}
		},
	}
</script>
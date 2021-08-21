<template>
	<BContainer class="my-5">
		<BRow>
			<BCol cols="12">
				<BCard bg-variant="light" class="text-center shadow">
					<h1 class="mb-3 text-center font-weight-bold text-primary">
						Find Us
					</h1>
					<hr>

					<!-- Number -->
					<h3 class="font-weight-bold text-primary">Number</h3>
					<a
						:href="companyInfo.phoneNumberLink"
						class="text-decoration-none"
					>
						<BButton variant="secondary" size="lg" class="m-3">
							<PhoneIcon size="1x" />
							{{ companyInfo.phoneNumber }} 
						</BButton>
					</a>

					<!-- Location -->
					<h3 v-if="companyInfo.googleMapsLink" class="text-secondary">
						Location
					</h3>
					<a
						v-if="companyInfo.googleMapsLink"
						:href="companyInfo.googleMapsLink"
						class="text-decoration-none"
					>
						<BButton variant="primary" size="lg" class="m-3">
							<MapPinIcon size="1x" />
							{{ companyInfo.address }}
						</BButton>
					</a>

					<!-- Hours -->
					<h3
						v-if="companyInfo.hoursOfOperation > 0"
						class="text-secondary"
					>Hours</h3>
					<ul
						v-if="companyInfo.hoursOfOperation > 0"
						class="list-unstyled text-small text-light"
					>
						<li
							v-for="(hoo, index) in companyInfo.hoursOfOperation"
							:key="index"
							class="text-primary h5"
						>{{ hoo.days }}: {{ hoo.hours }}</li>
					</ul>
					<br>
					<br>

					<!-- Social Media -->
					<h3 class="mb-3 text-center font-weight-bold text-primary">Follow Us!</h3>
					<SocialMediaPlug strokeWidth="1" size="4x" variant="secondary" />
				</BCard>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	// [IMPORT] //
	import { MapPinIcon, PhoneIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SocialMediaPlug from '../components/SocialMediaPlug.vue'
	import companyInfo from '../defaults/companyInfo'

	export default {
		components: {
			MapPinIcon,
			PhoneIcon,
			SocialMediaPlug,
		},

		data() {
			return {
				companyInfo: companyInfo,
			}
		},
	}
</script>
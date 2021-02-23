<template>
	<BContainer class="my-3">
		<BRow>
			<BCol cols="12">
				<BCard variant="white" class="text-center">
					<h1 class="mb-3 text-center font-weight-bold text-primary">
						Find Us
					</h1>

					<!-- Number -->
					<h3 class="text-secondary">Number</h3>
					<a
						:href="companyInfo.phoneNumberLink"
						class="text-decoration-none"
					>
						<BButton variant="outline-primary" size="lg" class="m-3">
							<PhoneIcon size="1x" />
							{{ companyInfo.phoneNumber }} 
						</BButton>
					</a>

					<!-- Location -->
					<h3 class="text-secondary">Location</h3>
					<a
						:href="companyInfo.googleMapsLink"
						class="text-decoration-none"
					>
						<BButton variant="outline-primary" size="lg" class="m-3">
							<MapPinIcon size="1x" />
							{{ companyInfo.address }}
						</BButton>
					</a>

					<!-- Hours -->
					<h3 class="text-secondary">Hours</h3>
					<ul class="list-unstyled text-small text-light">
						<li
							v-for="(hoo, index) in companyInfo.hoursOfOperation"
							:key="index"
							class="text-primary h5"
						>{{ hoo.days }}: {{ hoo.hours }}</li>
					</ul>
					<hr>
				</BCard>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	// [IMPORT] //
	import { MapPinIcon, PhoneIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import companyInfo from '../defaults/companyInfo'

	export default {
		components: {
			MapPinIcon,
			PhoneIcon,
		},

		data() {
			return {
				companyInfo: companyInfo,
			}
		},
	}
</script>
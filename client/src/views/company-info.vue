<template>
	<BContainer class="my-3">
		<BRow>
			<BCol cols="12">
				<BCard class="text-center shadow">
					<a :href="companyInfo.phoneNumberLink">
						<h1>Call Us</h1>
						<h1>{{ companyInfo.phoneNumber }}</h1>
						<PhoneIcon size="5x" class="mb-4 text-primary" />
					</a>

					<a :href="companyInfo.googleMapsLink" class="text-secondary">
						<h2>{{ companyInfo.address }}</h2>
					</a>
				</BCard>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
import companyInfo from '../defaults/companyInfo'
import { PhoneIcon } from 'vue-feather-icons'

export default {
	components: {
		PhoneIcon
	},

	data() {
		return {
			companyInfo: companyInfo,
		}
	},
}
</script>
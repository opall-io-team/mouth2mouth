<template>
	<BContainer class="my-4">
		<BRow>
			<BCol cols="12">
				<BCard bg-variant="light" class="text-center shadow">
					<a :href="companyInfo.phoneNumberLink" class="text-decoration-none">
							<h1>Call Us</h1>
							<h1>{{ companyInfo.phoneNumber }}</h1>

						<BButton variant="outline-secondary" class="my-4 px-5">
							<PhoneIcon size="3x" stroke-width=".6" />
						</BButton>
					</a>

					<a :href="companyInfo.googleMapsLink" class="text-decoration-none text-secondary">
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
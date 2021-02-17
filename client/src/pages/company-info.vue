<template>
	<BContainer class="my-4">
		<BRow>
			<BCol cols="12">
				<BCard bg-variant="light" class="text-center shadow">
					<BRow>
						<BCol cols="12" md="6">
							<h1 class="font-weight-bold text-primary">
								Call Us
							</h1>
							<a :href="companyInfo.phoneNumberLink" class="text-decoration-none">
								<h2 class="m-0 font-weight-bold text-info">
									
								</h2>

								<BButton variant="info" class="mt-4 mb-5 px-5">
									<PhoneIcon size="5x" stroke-width="2" class="text-light" />
									<p class="h2 text-light">{{ companyInfo.phoneNumber }}</p>
								</BButton>
							</a>
						</BCol>
						
						<BCol cols="12" md="6">
							<h1 class="font-weight-bold text-primary">
								Address
							</h1>

							<a :href="companyInfo.googleMapsLink" class="text-decoration-none text-secondary">
								<p class="h2 font-weight-bold">{{ companyInfo.address }}</p>
							</a>
						</BCol>
					</BRow>
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
<template>
	<div class="p-3 bg-secondary-lighter">
		<BRow>
			<BCol cols="12" md="8">
				<h1 class="text-secondary">Contact Me</h1>
			
				<h5 class="text-dark">
					Please contact me directly if you have any questions:
					<a :href="companyInfo.phoneNumberLink">
						<span class="font-weight-bold">
							{{ companyInfo.phoneNumber }}
						</span>
					</a>
				</h5>
			</BCol>

			<BCol cols="12" md="4">
				<RouterLink to="/contact">
					<BButton
						variant="secondary"
						size="lg"
						pill
						class="my-3 my-md-4 w-100"
					>Book Now</BButton>
				</RouterLink>
			</BCol>
		</BRow>
	</div>	
</template>

<script>
import companyInfo from '../defaults/companyInfo'

export default {
	data() {
		return {
			companyInfo
		}
	},
}
</script>
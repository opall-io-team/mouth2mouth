<template>
	<BContainer class="py-5">
		<BRow>
			<!-- IMAGE -->
			<BCol cols="12" md="4" class="d-none d-md-block">
				<div class="text-center">
					<img
						:src="companyInfo.companyLogo"
						class="w-100"
						style="max-width: 300px;"
					>
				</div>
			</BCol>

			<!-- TEXT -->
			<BCol cols="12" md="8" class="px-5">
				<div data-aos="fade-up">
					<h1 class="text-center font-weight-bold text-primary text-fancy">
						About {{ companyInfo.companyName }}
					</h1>
					<br>
					<p
						v-html="companyInfo.aboutHTML"
						class="mb-4 h5 text-center text-dark"
					></p>

					<div class="text-center">
						<RouterLink to="/services">
							<BButton
								size="lg"
								variant="secondary"
								class="mt-3"
							>Check Out All of Our Services</BButton>
						</RouterLink>
					</div>
				</div>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	import companyInfo from '../../defaults/companyInfo'

	export default {
		data() {
			return {
				companyInfo
			}
		},
	}
</script>
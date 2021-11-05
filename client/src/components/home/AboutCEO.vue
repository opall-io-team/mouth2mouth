<template>
	<BContainer class="py-5">
		<BRow>
			<!-- TEXT -->
			<BCol cols="12" md="8" order="1" order-md="0" class="px-5">
				<div data-aos="fade-up">
					<h1 class="text-center font-weight-bold text-primary text-fancy">
						{{ companyInfo.ceo.name.firstName }}, CEO/Founder of Balance Within
					</h1>
					<h5 class="text-center text-secondary">
						{{ companyInfo.ceo.title }}
					</h5>
					<br>
					<p
						v-html="companyInfo.messageHTML"
						class="mb-4 h5 text-center text-dark"
					></p>

					<div class="w-100 text-center">
						<RouterLink to="/our-team">
							<BButton
								variant="secondary"
								size="lg"
								class="mb-4"
							>Read More</BButton>
						</RouterLink>
					</div>
				</div>
			</BCol>

			<!-- IMAGE -->
			<BCol cols="12" md="4" order="0" order-md="1">
				<BCarousel
					:slideObjs="companyInfo.ceo.caraousel"
					:maxHeight="600"
					class="mb-3"
				/>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	import BCarousel from '@/components/display/BCarousel'
	import companyInfo from '@/defaults/companyInfo'

	export default {
		data() {
			return {
				companyInfo
			}
		},

		components: {
			BCarousel,
		},
	}
</script>
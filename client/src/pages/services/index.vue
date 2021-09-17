<template>
	<BContainer v-if="services != []" class="my-5">
		<BCard bg-variant="light" class="shadow">
			<BRow>
				<BCol cols="12">
					<h1 class="mb-4 text-center text-primary">{{ pData.title }}</h1>
					<hr class="mb-5 bg-secondary">
				</BCol>

				<!-- Service Cards -->
				<BCol
					v-for="(s, i) in services" :key="i"
					cols="12" md="6" lg="4"
				>
					<RouterLink :to="`/services/${s.id}`" class="text-decoration-none">
						<BCard
							no-body
							border-variant=""
							bg-variant="light"
							class="mb-4 service-card"
							style="min-height: 331px;"
						>
							<BCardBody>
								<BCardTitle
									class="h3 text-center text-primary"
									style="height: 120px;"
								>
									{{ s.title }}
									<hr>
								</BCardTitle>

								<BCardText class="text-dark">
									<BRow>
										<BCol
											cols="12"
											class="pr-xl-0"
											style="height: 180px;"
										>
											<p class="mb-2">
												{{
													s.description.length > 200 ?
														s.description.substring(0, 200 - 3) + '...' :
														s.description
												}}
											</p>
										</BCol>

										<BCol cols="12">
											<BButton
												size="lg"
												class="w-100 shadow"
											>Click to Learn More!</BButton>
										</BCol>
									</BRow>
								</BCardText>
							</BCardBody>
						</BCard>
					</RouterLink>
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>

<script>
	import pData from '@/defaults/pages/services'
	import PageService from '@/services/PageService'

	export default {
		data() {
			return {
				loading: true,
				reqData: {},
				pData: pData,
				services: [],
			}
		},

		async created() {
			this.reqData = await PageService.s_services()

			if (this.reqData.status) { this.services = this.reqData.services }
			else { this.error = this.reqData.message }

			this.loading = false
		},
	}
</script>

<style lang="scss" scoped>
	.service-card:hover {
		background-color: rgba(0, 0, 0, 0.10) !important;
	}
	
</style>
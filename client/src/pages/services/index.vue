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
							tag="article"
							no-body
							border-variant=""
							bg-variant="light"
							class="mb-4 shadow service-card"
						>
							<BCardBody>
								<BCardTitle class="h3 text-center text-primary">
									{{ s.title }}
									<hr>
								</BCardTitle>

								<BCardText class="text-dark">
									<BRow>
										<BCol cols="12" xl="8" class="pr-xl-0">
											<p class="mb-2">
												{{
													s.description.length > 200 ?
														s.description.substring(0, 200 - 3) + '...' :
														s.description
												}}
											</p>
										</BCol>

										<BCol cols="12" xl="4">
											<div
												class="d-none d-md-block"
												style="height: 200px; overflow: hidden;"
											>
												<img
													v-if="s.cardImage"
													:src="s.cardImage"
													class="w-100 rounded-lg"
													style=""
												>
												<img v-else :src="s.image" class="w-100 rounded-lg">

											</div>
										</BCol>

										<BCol cols="12">
											<hr>

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
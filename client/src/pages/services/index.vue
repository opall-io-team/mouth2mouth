<template>
	<BContainer v-if="services != []" class="my-5">
		<BCard bg-variant="light" no-body class="rounded-0 shadow">
			<BRow class="m-0 p-0">
				<BCol cols="12" class="bg-primary-lighter">
					<h1 class="mx-0 my-4 text-center font-weight-bold text-primary">
						{{ pData.title }}
					</h1>
				</BCol>

				<BCol cols="12" class="px-4 py-5">
					<BRow>
						<!-- Service Cards -->
						<BCol
							v-for="(s, i) in services" :key="i"
							cols="12" md="12" lg="6"
							class="d-flex align-items-stretch"
						>
							<BCard
								bg-variant="light"
								no-body
								class="w-100 mb-5 border rounded-0"
								:style="`
									background-image: url(${s.image});
									background-position: center;'
									border-color: grey !important;
								`"
							>
								<BCardHeader class="text-center bg-shade border-0 rounded-0">
									<h1 class="m-0 text-primary font-weight-bold fancy-text">
										{{ s.title }}
									</h1>
								</BCardHeader>

								<BCardBody class="px-5 py-3 rounded-0 bg-shade show">
									<h4 class="text-center mb-2 text-dark">
									{{
										s.description.length > 100 ?
											s.description.substring(0, 100 - 3) + '...' :
											s.description
									}}
									</h4>
								</BCardBody>

								<BCardFooter class="text-center px-5 py-4 border-0 bg-shade">
									<RouterLink
										:to="`/services/${s.id}`"
										class="text-decoration-none"
									>
										<BButton
											variant="secondary"
											size=""
											class="w-100"
											style="max-width: 250px;"
										>Click to Learn More</BButton>
									</RouterLink>
								</BCardFooter>
							</BCard>
						</BCol>
					</BRow>
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
	.bg-shade {
		background-color: rgba(255, 255, 255, 0.75) !important;
	}

	.module {
		background-blend-mode: difference;
		background-color: salmon;
		background: rgb(114, 139, 250);
		background-size: cover;
	}
</style>
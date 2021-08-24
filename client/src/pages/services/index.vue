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
							border-variant="secondary"
							class="mb-4 shadow service-card"
						>
							<BCardBody>
								<BCardTitle class="h4 text-center text-primary">
									{{ s.title }}
								</BCardTitle>
								<BCardText class="text-dark">
									<img v-if="s.cardImage" :src="s.cardImage" alt="" class="w-100">
									<img v-else :src="s.image" alt="" class="w-100">
									<!--
									{{
										s.description.length > 200 ?
											s.description.substring(0, 200 - 3) + '...' :
											s.description
									}}
									-->
								</BCardText>
								<BButton class="w-100">Click to Learn More!</BButton>
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
		background-color: rgba(0, 0, 0, 0.10);
	}
	
</style>
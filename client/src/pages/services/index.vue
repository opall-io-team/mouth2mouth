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
					class="d-flex align-items-stretch"
				>
					<BCard
						bg-variant="light"
						no-body
						class="mb-4"
					>
						<BCardHeader class="h4 text-center border-0 bg-light text-primary">
							{{ s.title }}
						</BCardHeader>

						<BCardBody class="text-dark">
							<p class="mb-2">
								{{
									s.description.length > 200 ?
										s.description.substring(0, 200 - 3) + '...' :
										s.description
								}}
							</p>
						</BCardBody>

						<BCardFooter class="border-0 bg-light">
							<RouterLink
								:to="`/services/${s.id}`"
								class="text-decoration-none"
							>
								<BButton
									size="lg"
									class="w-100"
								>Click to Learn More!</BButton>
							</RouterLink>
						</BCardFooter>
					</BCard>
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
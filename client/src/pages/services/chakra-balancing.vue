<template>
	<BContainer v-if="services != []" class="my-5">
		<BCard bg-variant="light" class="shadow">
			<BRow>
				<BCol cols="12">
					<h1 class="mb-3 text-center text-primary">
						{{ services[1].title }}
					</h1>
				</BCol>

				<BCol cols="12" md="3" class="d-none d-md-block">
					<img :src="services[1].image" class="w-100 mb-3 rounded">
				</BCol>

				<BCol cols="12" md="9">
					<p>{{ services[1].description }}</p>

					<div v-if="services[1].processSteps.length > 0">
						<h5 class="text-info">Session Process</h5>
						<ul>
							<li
								v-for="(p, i) in services[1].processSteps"
								:key="i"
							>{{ p }}</li>
						</ul>
					</div>
				</BCol>

				<BCol cols="12">
					<RouterLink to="/contact">
						<BButton variant="primary" size="lg" class="w-100 mt-3">
							Book Now
						</BButton>
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
				reqData: {},
				pData: pData,
				services: [],
			}
		},

		async created() {
			this.reqData = await PageService.s_services()

			if (this.reqData.status) { this.services = this.reqData.services }
			else { this.error = this.reqData.message }
		},
	}
</script>
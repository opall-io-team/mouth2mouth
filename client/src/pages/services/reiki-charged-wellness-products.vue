<template>
	<BContainer class="my-5">
		<BCard class="shadow">
			<BRow>
				<BCol cols="12">
					<h1 class="mb-3 text-center text-primary">
						{{ pData.services[7].title }}
					</h1>
				</BCol>

				<BCol cols="12" md="3" class="d-none d-md-block">
					<img :src="pData.services[7].image" class="w-100 mb-3 rounded">
				</BCol>

				<BCol cols="12" md="9">
					<p>{{ pData.services[7].description }}</p>

					<div v-if="pData.services[7].processSteps.length > 0">
						<h5 class="text-info">Session Process</h5>
						<ul>
							<li
								v-for="(p, i) in pData.services[7].processSteps"
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
export default {
	data() {
		return {
			pData: pData,
		}
	},
}
</script>
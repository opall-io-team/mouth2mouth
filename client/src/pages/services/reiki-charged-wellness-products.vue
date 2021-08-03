<template>
	<BContainer class="my-5">
		<BCard class="shadow">
			<h1 class="mb-3 text-center text-primary">
				{{ pData.services[8].title }}
			</h1>
			
			<p>{{ pData.services[8].description }}</p>

			<div v-if="pData.services[8].processSteps.length > 0">
				<h5 class="text-info">Session Process</h5>
				<ul>
					<li
						v-for="(p, i) in pData.services[8].processSteps"
						:key="i"
					>{{ p }}</li>
				</ul>
			</div>
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
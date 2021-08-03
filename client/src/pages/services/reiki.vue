<template>
	<BContainer class="my-5">
		<BCard class="shadow">
			<h1 class="mb-3 text-center text-primary">{{ pData.services[0].title }}</h1>
			
			<p>{{ pData.services[0].description }}</p>

			<div v-if="pData.services[0].processSteps.length > 0">
				<h5 class="text-info">Session Process</h5>
				<ul>
					<li
						v-for="(p, i) in pData.services[0].processSteps"
						:key="i"
					>{{ p }}</li>
				</ul>
			</div>

			<!-- Reiki FAQ -->
			<h5 class="text-info">{{ pData.faq.faq[0].q }}</h5>
			<p v-html="pData.faq.faq[0].a" class="text-dark"></p>

			<h5 class="text-info">{{ pData.faq.faq[1].q }}</h5>
			<p v-html="pData.faq.faq[1].a" class="text-dark"></p>

			<h5 class="text-info">{{ pData.faq.faq[2].q }}</h5>
			<p v-html="pData.faq.faq[2].a" class="text-dark"></p>
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
<template>
	<BContainer class="my-5">
		<BCard class="shadow">
			<h1 class="text-center text-primary">{{ pData.title }}</h1>

			<div v-for="(s, i) in pData.services" :key="i">
				<h3 :id="s.id" class="text-secondary">{{ s.title }}</h3>

				<p>{{ s.description }}</p>

				<div v-if="s.processSteps.length > 0">
					<h5 class="text-info">Session Process</h5>
					<ul>
						<li v-for="(p, i) in s.processSteps" :key="i">{{ p }}</li>
					</ul>
				</div>

				<!-- Reiki -->
				<div v-if="s.id == 'reiki'">
					<h5 class="text-info">{{ pData.faq.faq[0].q }}</h5>
					<p v-html="pData.faq.faq[0].a" class="text-dark"></p>

					<h5 class="text-info">{{ pData.faq.faq[1].q }}</h5>
					<p v-html="pData.faq.faq[1].a" class="text-dark"></p>

					<h5 class="text-info">{{ pData.faq.faq[2].q }}</h5>
					<p v-html="pData.faq.faq[2].a" class="text-dark"></p>
				</div>

				<hr>
			</div>
		</BCard>
	</BContainer>
</template>

<script>
import pData from '../defaults/pages/services'
export default {
	data() {
		return {
			pData: pData,
		}
	},
}
</script>
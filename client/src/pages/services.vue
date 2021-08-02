<template>
	<BContainer class="my-5">
		<BCard class="shadow">
			<h1 class="text-center text-primary">{{ pData.title }}</h1>

			<div v-for="(s, i) in pData.services" :key="i">
				<h3 :id="s.id" class="text-secondary">{{ s.title }}</h3>
				<hr>

				<p>{{ s.description }}</p>
				<hr>
				<div v-if="s.id == 'reiki'">
					<h5 class="text-info">{{ pData.faq.faq[0].q }}</h5>
					<p v-html="pData.faq.faq[0].a" class="text-dark"></p>
					<hr>
				</div>
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
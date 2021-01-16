<template>
	<div class="">
		<BCarousel :slideObjs="slideObjs" />

		<BContainer class="mt-3 text-center">
			<!-- Caption -->
			<h4>Permanent Cosmetic Studio</h4>

			<!-- Address -->
			<h1 class="text-center">3 Banta Place Hackensack NJ 07601</h1>

			<BButton variant="primary">Create Apointment</BButton>
		</BContainer>
	</div>
</template>

<script>
// [IMPORT] //
import Carousel from '@/defaults/carousel_imges'
import BCarousel from '@/components/BCarousel'
import PageService from '@/services/PageService'

export default {
	name: 'Home',

	data() {
		return {
			slideObjs: Carousel,
			reqData: '',
		}
	},

	components: {
		BCarousel,
	},

	created: async function() {
		this.getPageData()
	},

	methods: {
		async getPageData() {
		this.reqData = await PageService.s_()
		}
	},
}
</script>

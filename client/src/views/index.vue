<template>
	<div class="">
		<BCarousel :slideObjs="slideObjs" />

		<BContainer>
			<h1>Hello</h1>
			<button class="btn btn-primary">Test</button>
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

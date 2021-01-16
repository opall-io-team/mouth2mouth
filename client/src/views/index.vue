<template>
	<div class="">
		<BCarousel :slideObjs="slideObjs" />

		<BContainer>
		</BContainer>
	</div>
</template>

<script>
import carousel from '@/defaults/carousel_imges'
import BCarousel from '@/components/BCarousel'
import PageService from '@/services/PageService'

export default {
	name: 'Home',

	data() {
		return {
			slideObjs: carousel,
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

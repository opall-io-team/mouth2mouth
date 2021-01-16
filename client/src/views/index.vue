<template>
	<div class="">
		<BCarousel :slideObjs="slideObjs" />

		<BContainer class="mt-3 text-center">
			<!-- Caption -->
			<h4>Permanent Cosmetic Studio</h4>

			<!-- Address -->
			<h1 class="text-center">3 Banta Place Hackensack NJ 07601</h1>

			<BButton variant="primary mt-3">Create Apointment</BButton>
		</BContainer>

		<BCard class="mt-3">
			<BContainer>
				<BRow>
					<BCol cols="12" sm="6">
						<h5>{{ DPage.aboutUs.header }}</h5>
						<p>{{ DPage.aboutUs.text }}</p>
					</BCol>

					<BCol cols="12" sm="6">
						<img
							:src="DPage.aboutUs.image"
							alt="No Image"
							class="w-100"
							style="width: 250px; height: 400px; object-fit: cover;"
						>
					</BCol>
				</BRow>
			</BContainer>
		</BCard>
	</div>
</template>

<script>
// [IMPORT] //
import Carousel from '@/defaults/carousel_imges'
import DPage from '@/defaults/pages'
import BCarousel from '@/components/BCarousel'
import PageService from '@/services/PageService'

export default {
	name: 'Home',

	data() {
		return {
			slideObjs: Carousel,
			reqData: '',
			DPage: DPage
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

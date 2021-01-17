<template>
	<div class="">
		<!-- Caraousel -->
		<BCarousel :slideObjs="DPage.caraousel" class="shadow" />

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
							:src="DPage.teethCleaning.image"
							alt="No Image"
							class="w-100"
							style=""
						>
						
					</BCol>
				</BRow>

				<BRow class="mt-3">
					<BCol cols="12" sm="6">
						<BCarousel :slideObjs="DPage.aboutUs.caraousel" class="shadow" />
					</BCol>

					<BCol cols="12" sm="6">
						<h5>{{ DPage.teethCleaning.header }}</h5>
						<p>{{ DPage.teethCleaning.text }}</p>
					</BCol>
				</BRow>
			</BContainer>
		</BCard>
	</div>
</template>

<script>
// [IMPORT] //
import DPage from '@/defaults/pages'
import BCarousel from '@/components/BCarousel'
import PageService from '@/services/PageService'

export default {
	name: 'Home',

	data() {
		return {
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

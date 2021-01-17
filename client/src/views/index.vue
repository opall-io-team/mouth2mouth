<template>
	<div class="">
		<!-- Caraousel -->
		<BCarousel :slideObjs="DPage.caraousel" class="shadow" />

		<!-- Main Details -->
		<BContainer class="mt-5 text-center">
			<!-- Caption -->
			<h1>{{ DPage.mainDetails.caption1 }}</h1>
			<h2>{{ DPage.mainDetails.caption2 }}</h2>

			<!-- Address -->
			<h4 class="text-center">{{ DPage.mainDetails.address }}</h4>

			<BButton variant="primary mt-3">Book Apointment</BButton>
		</BContainer>

		<BCard class="mt-5">
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
							style="height: 600px; object-fit: cover;"
						>
						
					</BCol>
				</BRow>

				<BRow class="mt-4">
					<BCol cols="12" sm="6">
						<BCarousel :slideObjs="DPage.teethCleaning.caraousel" class="shadow" />
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

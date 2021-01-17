<template>
	<div>
		<!-- Caraousel -->
		<BCarousel :slideObjs="DPage.caraousel" class="shadow" />

		<!-- Main Details -->
		<BContainer class="mt-5 text-center">
			<BCard bg-variant="info" border-variant="info" class="text-light">
				<!-- Captions -->
				<h1>{{ DPage.mainDetails.caption1 }}</h1>
				<h2>{{ DPage.mainDetails.caption2 }}</h2>
				
				<!-- Address -->
				<a :href="DPage.mainDetails.googleMapsLink">
					<h4 class="text-center">{{ DPage.mainDetails.address }}</h4>
				</a>

				<BButton variant="primary mt-3">Book Apointment</BButton>
			</BCard>
		</BContainer>

		<!-- More Details -->
		<BCard class="mt-5">
			<BContainer>
				<BRow>
					<BCol cols="12" sm="8">
						<Transition name="fade">
							<div v-if="show">
								<h5>{{ DPage.moreDetails.aboutUs.header }}</h5>
								<p>{{ DPage.moreDetails.aboutUs.text }}</p>
							</div>
						</Transition>
					</BCol>

					<BCol cols="12" sm="4">
						<Transition name="fade">
							<img
								v-if="show"
								:src="DPage.moreDetails.aboutUs.image"
								alt="No Image"
								class="w-100 mb-3 shadow"
								style="height: 400px; object-fit: cover;"
							>
						</Transition>
					</BCol>
				</BRow>

				<BRow class="mt-4">
					<BCol cols="12" sm="6">
						<Transition name="fade">
							<BCarousel
								v-if="show"
								:slideObjs="DPage.moreDetails.meetTheStaff.caraousel"
								class="mb-3 shadow"
							/>
						</Transition>
					</BCol>

					<BCol cols="12" sm="6">
						<Transition name="fade">
							<div v-if="show">
								<h5 >{{ DPage.moreDetails.meetTheStaff.header }}</h5>
								<p>{{ DPage.moreDetails.meetTheStaff.text }}</p>
							</div>
						</Transition>
					</BCol>
				</BRow>
			</BContainer>
		</BCard>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import DPage from '@/defaults/pages'
	import BCarousel from '@/components/BCarousel'
	import PageService from '@/services/PageService'

	export default {
		name: 'Home',

		data() {
			return {
				DPage: DPage,
				reqData: '',
				show: false,
			}
		},

		components: {
			BCarousel,
		},

		created: async function() {
			this.getPageData()
		},

		mounted() {
			this.show = true
		},

		methods: {
			async getPageData() {
				this.reqData = await PageService.s_()
			},
		}
	}
</script>

<style lang="scss">
	.fade-enter-active,
	.fade-leave-active { transition: opacity 1s; }
	.fade-enter,
	.fade-leave-to { opacity: 0; }
</style>

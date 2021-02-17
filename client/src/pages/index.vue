<template>
	<div>
		<!-- Caraousel -->
		<BCarousel :slideObjs="DPage.caraousel" :maxHeight="300" class="shadow" />

		<!-- Main Details -->
		<BContainer class="mt-5 text-center">
			<BCard bg-variant="light" class="shadow">
				<!-- Captions -->
				<h1 class="m-0 font-weight-bold text-primary">
					{{ DPage.mainDetails.caption1 }}
				</h1>
				<h2 class="font-weight-bold text-info">
					{{ DPage.mainDetails.caption2 }}
				</h2>
				
				<!-- Address -->
				<a :href="DPage.mainDetails.googleMapsLink">
					<h4 class="text-center font-weight-bold text-secondary">
						{{ DPage.mainDetails.address }}
					</h4>
				</a>

				
			</BCard>
		</BContainer>

		<!-- More Details -->
		<BContainer fluid class="mt-5 bg-white border-top border-info shadow-lg">
			<BContainer>
				<!-- Black Marble Now Booking New Clients -->
				<BRow class="mb-3">
					<Transition name="fade">
						<BCol cols="12">
							<img
								v-if="show"
								:src="DPage.moreDetails.row1.image"
								alt="No Image"
								class="img-responsive w-100 my-3"
								style="height: 146px; object-fit: cover;"
							>
							<div class="carousel-caption">
								<RouterLink
									to="company-info"
									class="font-weight-bold text-decoration-none"
								>
									<h1 class="font-weight-bold">
										Now Booking New Clients
									</h1>
								</RouterLink>
								

								<BButton
									variant="info"
									class="mt-3"
									@click="redirectCompanyInfo()"
								>Book Apointment</BButton>
							</div>
						</BCol>
					</Transition>
				</BRow>
				
				<!-- What We Can Do For You -->
				<BRow class="mb-3">
					<BCol cols="12" sm="8">
						<Transition name="fade">
							<div v-if="show">
								<h2 class="text-primary font-weight-bold">
									{{ DPage.moreDetails.row2.header }}
								</h2>
								<p class="h4 text-secondary">{{ DPage.moreDetails.row2.text }}</p>
							</div>
						</Transition>
					</BCol>

					<BCol cols="12" sm="4">
						<Transition name="fade">
							<img
								v-if="show"
								:src="DPage.moreDetails.row2.image"
								alt="No Image"
								class="w-100 mb-3 shadow"
								style="height: 400px; object-fit: cover;"
							>
						</Transition>
					</BCol>
				</BRow>

				<!-- Meet Our Staff -->
				<BRow class="mb-4">
					<BCol cols="12" sm="6">
						<Transition name="fade">
							<BCarousel
								v-if="show"
								:slideObjs="DPage.moreDetails.row3.caraousel"
								class="mb-3 shadow"
							/>
						</Transition>
					</BCol>

					<BCol cols="12" sm="6">
						<Transition name="fade">
							<div v-if="show">
								<h2 class="text-primary font-weight-bold">
									{{ DPage.moreDetails.row3.header }}
								</h2>
								<p class="mb-4 h4 text-secondary">
									{{ DPage.moreDetails.row3.description1 }}
								</p>
								<p class="h4 text-secondary">
									{{ DPage.moreDetails.row3.description2 }}
								</p>
							</div>
						</Transition>
					</BCol>
				</BRow>
			</BContainer>
		</BContainer>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import DPage from '@/defaults/pages'
	import BCarousel from '@/components/BCarousel'
	import PageService from '@/services/PageService'
	import router from '@/router'

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

		async created() {
			this.getPageData()
		},

		mounted() {
			this.show = true
		},

		methods: {
			async getPageData() { this.reqData = await PageService.s_() },

			redirectCompanyInfo() { router.push({ name: 'company-info' }) },
		},
	}
</script>

<style lang="scss">
	.fade-enter-active,
	.fade-leave-active { transition: opacity 1s; }
	.fade-enter,
	.fade-leave-to { opacity: 0; }
</style>

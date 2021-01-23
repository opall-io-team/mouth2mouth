<template>
	<div>
		<!-- Caraousel -->
		<BCarousel :slideObjs="DPage.caraousel" :maxHeight="300" class="shadow" />

		<!-- Main Details -->
		<BContainer class="mt-5 text-center">
			<BCard bg-variant="light" border-variant="info" class="shadow text-info">
				<!-- Captions -->
				<h1>{{ DPage.mainDetails.caption1 }}</h1>
				<h2>{{ DPage.mainDetails.caption2 }}</h2>
				
				<!-- Address -->
				<a :href="DPage.mainDetails.googleMapsLink">
					<h4 class="text-center">{{ DPage.mainDetails.address }}</h4>
				</a>

				<BButton
					variant="info"
					class="mt-3"
					@click="redirectCompanyInfo()"
				>Book Apointment</BButton>
			</BCard>
		</BContainer>

		<!-- More Details -->
		<BCard bg-variant="" border-variant="light" class="mt-5 shadow rounded-0">
			<BContainer>
				<BRow>
					<Transition name="fade">
						<BCol cols="12">
							<img
								v-if="show"
								:src="DPage.moreDetails.row1.image"
								alt="No Image"
								class="img-responsive w-100 mb-3"
								style="height: 136px; object-fit: cover;"
							>
							<div class="carousel-caption">
								<h1 class="m-0">
									<RouterLink to="company-info" class="text-decoration-none">
										<span class="h5">Now Booking</span>
										<br>
										<span>New Clients</span>
									</RouterLink>
								</h1>
							</div>
						</BCol>
					</Transition>
				</BRow>
				
				<!-- What We Can Do For You -->
				<BRow>
					<BCol cols="12" sm="8">
						<Transition name="fade">
							<div v-if="show">
								<h5 class="text-info font-weight-bold">
									{{ DPage.moreDetails.row2.header }}
								</h5>
								<p>{{ DPage.moreDetails.row2.text }}</p>
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
				<BRow class="mt-4">
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
								<h5 class="text-info font-weight-bold">
									{{ DPage.moreDetails.row3.header }}
								</h5>
								<p>{{ DPage.moreDetails.row3.text }}</p>
							</div>
						</Transition>
					</BCol>
				</BRow>

				<BRow class="mt-4">
					<Transition name="fade">
						<BCol cols="4">
							
						</BCol>
					</Transition>

					<Transition name="fade">
						<BCol cols="12" md="8">
							<img
								v-if="show"
								:src="DPage.moreDetails.row4.image1"
								alt="No Image"
								class="w-50 p-2"
								style="height: 300px; object-fit: cover;"
							>

							<img
								v-if="show"
								:src="DPage.moreDetails.row4.image3"
								alt="No Image"
								class="w-50 p-2"
								style="height: 300px; object-fit: cover;"
							>

							<img
								v-if="show"
								:src="DPage.moreDetails.row4.image3"
								alt="No Image"
								class="w-50 p-2"
								style="height: 300px; object-fit: cover;"
							>

							<img
								v-if="show"
								:src="DPage.moreDetails.row4.image1"
								alt="No Image"
								class="w-50 p-2"
								style="height: 300px; object-fit: cover;"
							>
						</BCol>
					</Transition>
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

			redirectCompanyInfo() {
				router.push({ name: 'company-info' })
			},
		},
	}
</script>

<style lang="scss">
	.fade-enter-active,
	.fade-leave-active { transition: opacity 1s; }
	.fade-enter,
	.fade-leave-to { opacity: 0; }
</style>

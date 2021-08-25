<template>
	<div>
		<!-- Caraousel -->
		<BCarousel
			:showContent="true"
			:mainText="'Healing for the Mind, Body and Soul'"
			:slideObjs="DPage.caraousel"
			:maxHeight="600"
			:rellaxNumber="1"
			class="mb-4 shadow"
			data-aos="fade-up"
		/>

		<!-- Main Details -->
		<BContainer class="mb-4 text-center">
			<BCard bg-variant="light" border-variant="secondary" class="rounded shadow">
				<!-- Captions -->
				<h2 data-aos="fade" class="font-weight-bold text-primary">
					{{ DPage.mainDetails.caption1 }}
				</h2>
				
				<!-- Address -->
				<p
					v-if="DPage.mainDetails.hoursOfOperation.length > 0"
					class="h6 mb-4 text-center font-weight-bold text-secondary"
				>Our Hours</p>
				
				<!-- Hours of Operation -->
				<ul
					v-if="DPage.mainDetails.hoursOfOperation.length > 0"
					class="m-0 mb-4 p-0 text-dark"
				>
					<li
						v-for="(hoo, index) in DPage.mainDetails.hoursOfOperation"
						:key="index"
						class="m-0 list-unstyled text-center"
					><p class="h6">{{ hoo.days }}<br>{{ hoo.hours }}</p></li>
				</ul>

				<h4 class="mb-3 text-dark">{{ DPage.mainDetails.text }}</h4>

				<RouterLink to="/book">
					<BButton variant="secondary">
						Contact Us!
					</BButton>
				</RouterLink>
			</BCard>
		</BContainer>

		<BContainer fluid v-if="0==1">
			<!-- [R1] Conveyor -->
			<BRow>
				<!-- [R1.C1] -->
				<BCol cols="12" class="mb-4">
					<h1 class="text-center">Our Satified Customers</h1>

					<Conveyor :images="DPage.sliderImages" :totalOnLg="4" />
				</BCol>
			</BRow>
		</BContainer>

		<!-- More Details -->
		<BContainer fluid class="bg-white border-top border-secondary -lg">
			<BContainer class="pb-3">
				<!-- Black Marble Now Booking New Clients -->
				<BRow class="mb-3" data-aos="fade">
					<Transition name="fade">
						<BCol cols="12">
							<img
								v-if="show"
								:src="DPage.moreDetails.row1.image"
								alt="No Image"
								class="img-responsive w-100 my-3 shadow"
								style="height: 176px; object-fit: cover;"
							>
							<div class="carousel-caption">
								<RouterLink
									to="book"
									class="font-weight-bold text-decoration-none"
								>
									<h2 class="font-weight-bold text-light">
										Now Booking New Clients
									</h2>
								</RouterLink>
								

								<BButton
									variant="secondary"
									size="lg"
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
						<div v-if="show">
							<h2 class="text-primary font-weight-bold">
								{{ reikiTitle }}
							</h2>
							<p class="mb-4 h5 text-dark">
								{{ reikiDescription }}
							</p>

							<div class="w-100 text-center">
								<a href="/services/#reiki">
									<BButton
										variant="secondary"
										size="lg"
										class="mb-4"
									>Read More</BButton>
								</a>
							</div>
						</div>
					</BCol>

					<BCol cols="12" sm="4" data-aos="fade-up">
						<img
							v-if="show"
							:src="DPage.moreDetails.row2.image"
							alt="No Image"
							data-aos="fade"
							class="d-none d-sm-block w-100 mb-3 shadow"
							style="height: 400px; object-fit: cover;"
						>
					</BCol>
				</BRow>
				
				<!-- Meet Pamela -->
				<BRow class="mb-4">
					<BCol cols="12" sm="6" data-aos="fade-up">
						<BCarousel
							v-if="show"
							:slideObjs="DPage.moreDetails.row3.caraousel"
							class="mb-3 shadow"
						/>
					</BCol>

					<BCol cols="12" sm="6">
						<div v-if="show">
							<h2 class="text-primary font-weight-bold">
								{{ DPage.moreDetails.row3.header }}
							</h2>
							<p class="mb-4 h5 text-dark">
								{{ DPage.moreDetails.row3.description1 }}
								<br><br>
								{{ DPage.moreDetails.row3.description2 }}
							</p>

							<div class="w-100 text-center">
								<RouterLink to="/our-team">
									<BButton
										variant="secondary"
										size="lg"
										class="mb-4"
									>Read More</BButton>
								</RouterLink>
							</div>
						</div>
					</BCol>
				</BRow>
			</BContainer>
		</BContainer>


		<BContainer fluid class="px-0 py-5 bg-secondary">
			
				<BRow class="w-100 m-0 p-0">
					<BCol cols="12" md="2" class="d-none d-md-block p-0 text-left">
						<img
							src="https://images2.imgbox.com/c3/c3/XQ36FnwY_o.png"
							class="w-100"
							style="max-width: 200px;"
						>
					</BCol>

					<BCol cols="12" md="8" class="m-auto">
						<h1 class="mb-4 text-center text-light">Interested?</h1>

						<div class="text-center">
							<RouterLink to="/services">
								<BButton
									size="lg"
									variant="light"
									class="text-primary shadow"
								>Check Out Our Services</BButton>
							</RouterLink>
						</div>
					</BCol>

					<BCol cols="12" md="2" class="p-0 text-right">
						<img
							src="https://images2.imgbox.com/11/93/PmJs689J_o.png"
							class="w-100"
							style="max-width: 200px;"
						>
					</BCol>
				</BRow>
		</BContainer>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import PageService from '../services/PageService'
	import DPage from '@/defaults/pages'
	import BCarousel from '@/components/display/BCarousel'
	import Conveyor from '@/components/display/Conveyor'
	import router from '@/router'

	export default {
		name: 'Home',

		components: {
			BCarousel,
			Conveyor,
		},

		data() {
			return {
				DPage: DPage,
				reqData: {},
				show: false,
				reikiTitle: 'Reiki Title',
				reikiDescription: 'Reiki description goes here',
			}
		},

		async created() {
			this.reqData = await PageService.s_()

			if (this.reqData.status) {
				this.reikiTitle = this.reqData.reikiTitle
				this.reikiDescription = this.reqData.reikiDescription
			}
		},

		mounted() {
			this.show = true
		},

		methods: {
			redirectCompanyInfo() { router.push({ name: 'book' }) },
		},
	}
</script>

<style lang="scss">
	.fade-enter-active,
	.fade-leave-active { transition: opacity 1s; }
	.fade-enter,
	.fade-leave-to { opacity: 0; }
</style>

<template>
	<div>
		<!-- Caraousel -->
		<BCarousel
			:showContent="true"
			:mainText="'Healing for the Mind, Body, and Soul..'"
			:slideObjs="pageData.caraousel"
			:maxHeight="600"
			:rellaxNumber="1"
			class="mb-5 shadow"
			data-aos="fade-up"
		/>

		<!-- Main Details -->
		<BContainer class="mb-5 text-center">
			<BCard
				no-body
				bg-variant="primary"
				class="my-5 rounded-0 shadow"
				style="
					background-image: url('https://images2.imgbox.com/c2/ae/Wi5C61BU_o.jpg') !important;
					background-position: right;
				"
			>
				<div class="p-3 text-light bg-shade">
					<!-- Captions -->
					<h2 class="font-weight-bold text-light">
						{{ pageData.mainDetails.caption1 }}
					</h2>
					
					<!-- Address -->
					<p
						v-if="pageData.mainDetails.hoursOfOperation.length > 0"
						class="h6 mb-4 text-center font-weight-bold text-secondary"
					>Our Hours</p>
					
					<!-- Hours of Operation -->
					<ul
						v-if="pageData.mainDetails.hoursOfOperation.length > 0"
						class="m-0 mb-4 p-0 text-dark"
					>
						<li
							v-for="(hoo, index) in pageData.mainDetails.hoursOfOperation"
							:key="index"
							class="m-0 list-unstyled text-center"
						><p class="h6">{{ hoo.days }}<br>{{ hoo.hours }}</p></li>
					</ul>

					<h4 class="mb-3 text-light">{{ pageData.mainDetails.text }}</h4>

					<RouterLink to="/book">
						<BButton size="lg" variant="secondary" class="">
							Contact Us
						</BButton>
					</RouterLink>
				</div>
			</BCard>
		</BContainer>

		<!-- More Details -->
		<BContainer fluid class="bg-white border-top border-secondary -lg">
			<BContainer class="pb-3">
				<!-- Meet Pamela -->
				<BRow class="mb-4 py-4">
					<BCol cols="12" sm="7">
						<div v-if="show" class="py-5 pr-5">
							<h2 class="text-primary font-weight-bold">
								{{ pageData.moreDetails.row3.header }}
							</h2>
							<h5 class="text-secondary">
								{{ pageData.moreDetails.row3.header2 }}
							</h5>
							<br>
							<p
								v-html="pageData.moreDetails.row3.messageHTML"
								class="mb-4 h5 text-dark"
							></p>

							<div class="w-100 text-center">
								<RouterLink to="/our-team">
									<BButton
										variant="secondary"
										size="lg"
										class="mb-4 shadow"
									>Read More</BButton>
								</RouterLink>
							</div>
						</div>
					</BCol>

					<!-- Pamela Image -->
					<BCol cols="12" sm="5" data-aos="fade-up">
						<BCarousel
							v-if="show"
							:slideObjs="pageData.moreDetails.row3.caraousel"
							class="mb-3 shadow"
						/>
					</BCol>
				</BRow>
			</BContainer>
		</BContainer>

		<!-- INTERESTED? -->
		<BContainer fluid class="px-0 py-3 bg-secondary">
			<BRow class="w-100 m-0 p-0">
				<BCol cols="12" md="2" class="d-none d-md-block p-0 text-left">
					<img
						src="https://images2.imgbox.com/c3/c3/XQ36FnwY_o.png"
						class="w-100 mt-5"
						style="max-width: 200px;"
					>
				</BCol>

				<BCol cols="12" md="8" class="m-auto">
					<BRow>
						<BCol cols="12">
							<h1 class="my-5 text-center text-light">
								Some Services We Provide
							</h1>
						</BCol>

						<BCol cols="12" md="6" class="d-flex align-items-stretch">
							<BCard
								bg-variant="secondary"
								text-variant="light"
								border-variant="muted"
								no-body
								:img-src="services[0].image"
								img-top
								tag="article"
								class="mb-5"
							>
								<BCardHeader>
									<h3 class="m-0 text-center">
										{{ services[0].title }}
									</h3>
								</BCardHeader>

								<BCardBody>{{ services[0].description }}</BCardBody>

								<BCardFooter class="">
									<RouterLink :to="`/services/${services[0].id}`">
										<BButton
											variant="outline-light"
											size="lg"
											class="w-100 my-3"
										>Read More</BButton>
									</RouterLink>
								</BCardFooter>
							</BCard>
						</BCol>

						<BCol cols="12" md="6" class="d-flex align-items-stretch">
							<BCard
								bg-variant="secondary"
								text-variant="light"
								border-variant="muted"
								no-body
								:img-src="services[1].image"
								img-top
								tag="article"
								class="mb-5"
							>
								<BCardHeader class="">
									<h3 class="m-0 text-center">
										{{ services[1].title }}
									</h3>
								</BCardHeader>

								<BCardBody>{{ services[1].description }}</BCardBody>

								<BCardFooter class="">
									<RouterLink :to="`/services/${services[1].id}`">
										<BButton
											variant="outline-light"
											size="lg"
											class="w-100 my-3"
										>Read More</BButton>
									</RouterLink>
								</BCardFooter>
							</BCard>
						</BCol>

						<BCol cols="12">
							<div class="text-center">
								<RouterLink to="/services">
									<BButton
										size="lg"
										variant="light"
										class="mb-5 shadow"
									>Check Out All of Our Services</BButton>
								</RouterLink>
							</div>
						</BCol>
					</BRow>
				</BCol>

				<BCol cols="12" md="2" class="p-0 text-right">
					<img
						src="https://images2.imgbox.com/11/93/PmJs689J_o.png"
						class="w-100 mt-5"
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
	import pageData from '@/defaults/pages'
	import BCarousel from '@/components/display/BCarousel'
	import router from '@/router'

	export default {
		name: 'Home',

		components: {
			BCarousel,
		},

		data() {
			return {
				pageData: pageData,
				reqData: {},
				show: false,
				reikiTitle: 'Reiki Title',
				reikiDescription: 'Reiki description goes here',
				services: [],
			}
		},

		async created() {
			this.reqData = await PageService.s_()

			if (this.reqData.status) {
				this.reikiTitle = this.reqData.reikiTitle
				this.reikiDescription = this.reqData.reikiDescription
				this.services = this.reqData.services
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

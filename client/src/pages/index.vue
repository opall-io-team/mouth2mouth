<template>
	<div>
		<!-- Caraousel -->
		<BCarousel
			:showContent="true"
			:mainText="'Healing for the Mind, Body, and Soul..'"
			:slideObjs="pageData.caraousel"
			:maxHeight="600"
			:rellaxNumber="1"
			class=""
			data-aos="fade-up"
		/>

		<!-- GUIDE -->
		<BContainer fluid class="bg-white">
			<BContainer class="">
				<Guide />
			</BContainer>
		</BContainer>

		<!-- About Balance Within -->
		<BContainer fluid class="py-5 bg-secondary-lighter">
			<BContainer class="py-5">
				<BRow>
					<!-- IMAGE -->
					<BCol cols="12" md="4" class="d-none d-md-block">
						<div class="text-center">
							<img
								:src="pageData.bodyDetails.row0.image"
								class="w-100"
								style="max-width: 300px;"
							>
						</div>
					</BCol>

					<!-- TEXT -->
					<BCol cols="12" md="8" class="px-5">
						<div v-if="show" data-aos="fade-up">
							<h1 class="text-center text-primary text-fancy">
								{{ pageData.bodyDetails.row0.header }}
							</h1>
							<br>
							<p
								v-html="pageData.bodyDetails.row0.aboutCompanyHTML"
								class="mb-4 h5 text-center text-dark"
							></p>

							<div class="text-center">
								<RouterLink to="/services">
									<BButton
										size="lg"
										variant="secondary"
										class="mt-3"
									>Check Out All of Our Services</BButton>
								</RouterLink>
							</div>
						</div>
					</BCol>
				</BRow>
			</BContainer>
		</BContainer>

		<!-- About Me -->
		<BContainer fluid class="py-5 bg-light">
			<BContainer class="py-5">
				<BRow>
					<!-- TEXT -->
					<BCol cols="12" md="8" order="1" order-md="0" class="px-5">
						<div v-if="show" data-aos="fade-up">
							<h1 class="text-center text-primary text-fancy">
								{{ pageData.bodyDetails.row1.header }}
							</h1>
							<h5 class="text-center text-secondary">
								{{ pageData.bodyDetails.row1.header2 }}
							</h5>
							<br>
							<p
								v-html="pageData.bodyDetails.row1.messageHTML"
								class="mb-4 h5 text-center text-dark"
							></p>

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

					<!-- IMAGE -->
					<BCol cols="12" md="4" order="0" order-md="1">
						<div v-if="show">
							<BCarousel
								v-if="show"
								:slideObjs="pageData.bodyDetails.row1.caraousel"
								:maxHeight="600"
								class="mb-3"
							/>
						</div>
					</BCol>
				</BRow>
			</BContainer>
		</BContainer>

		<!-- INTERESTED? -->
		<BContainer fluid class="px-0 py-3 bg-secondary">
			<BContainer class="">
				<BRow>
					<BCol cols="12">
						<h2 class="my-4 text-center font-weight-bold text-light">
							{{ services[0].title }}
						</h2>
					</BCol>


					<BCol cols="12" md="4" class="pb-5">
						<img
							:src="services[0].image"
							class="w-100"
						/>
					</BCol>

					<BCol cols="12" md="8" class="pb-5">
						<!-- [CHECK-LIST] -->
						<BListGroup class="border-0 text-light">
							<BListGroupItem
								v-for="(item, ii) in services[0].content[0].items"
								:key="ii"
								class="m-0 pb-1 border-0 transparent"
							>
								<h4 class="m-0 text-fancy">
									<span class="text-light">✓</span>
									{{ item }}
								</h4>
							</BListGroupItem>
						</BListGroup>
						<br>
					</BCol>

					<BCol cols="12">
						<div class="text-center">
							<RouterLink to="/services">
								<BButton
									size="lg"
									variant="light"
									class="mb-5"
								>Check Out All of Our Services</BButton>
							</RouterLink>
						</div>
					</BCol>
				</BRow>
			</BContainer>
		</BContainer>

		<!-- Star Details -->
		<BContainer class="mb-5 text-center">
			<StarDetails />
		</BContainer>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import BCarousel from '@/components/display/BCarousel'
	import StarDetails from '@/components/home/StarDetails'
	import Guide from '@/components/home/Guide'
	import pageData from '@/defaults/pages'
	import PageService from '@/services/PageService'
	import router from '@/router'

	export default {
		name: 'Home',

		components: {
			BCarousel,
			StarDetails,
			Guide,
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

<style lang="scss" scoped>
	@import url('https://fonts.googleapis.com/css2?family=Caveat&display=swap');

	.fade-enter-active,
	.fade-leave-active { transition: opacity 1s; }
	.fade-enter,
	.fade-leave-to { opacity: 0; }

	.hero-text {
		font-family: 'Caveat', cursive !important;
	}

	.text-fancy {
		font-family: 'Caveat', cursive !important;
	}
</style>

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
		<BContainer v-if="show" fluid class="bg-white">
			<BContainer>
				<Guide class="py-2" />
			</BContainer>
		</BContainer>

		<!-- About Balance Within -->
		<BContainer v-if="show" fluid class="py-5 b-lighter">
			<AboutBalanceWithin />
		</BContainer>

		<!-- About Me -->
		<BContainer v-if="show" fluid class="py-5 bg-light">
			<AboutCEO />
		</BContainer>

		<!-- INTERESTED? -->
		<BContainer v-if="show" fluid class="px-0 py-5 bg-secondary-light">
			<BContainer>
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
								v-for="(item, i) in services[0].content[0].items"
								:key="i"
								class="m-0 pb-1 border-0 transparent"
							>
								<h3 class="m-0 text-fancy">
									<span class="text-light">✓</span>
									{{ item }}
								</h3>
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
	import AboutBalanceWithin from '@/components/home/AboutBalanceWithin'
	import AboutCEO from '@/components/home/AboutCEO'
	import StarDetails from '@/components/home/StarDetails'
	import Guide from '@/components/home/Guide'
	import pageData from '@/defaults/pages'
	import PageService from '@/services/PageService'
	import router from '@/router'

	export default {
		name: 'Home',

		components: {
			BCarousel,
			AboutBalanceWithin,
			AboutCEO,
			StarDetails,
			Guide
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
	.fade-enter-active,
	.fade-leave-active { transition: opacity 1s; }
	.fade-enter,
	.fade-leave-to { opacity: 0; }
</style>

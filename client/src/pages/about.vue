<template>
	<BContainer class="my-5" data-aos="fade-up">
		<BCard no-body bg-variant="white" class="text-center border-0 shadow">
			<BRow class="m-0">
				<BCol cols="12" class="bg-secondary-lighter">
					<h1 class="my-4 text-center font-weight-bold text-primary">
						{{ pageData.title }}
					</h1>
				</BCol>
			</BRow>

			<BRow class="m-0">
				<!-- CONTACT -->
				<BCol
					cols="12" lg="4" xl="3"
					order="2" order-lg="1"
					class="px-5 py-4 bg-primary-lightest"
				>
					<h3 class="mb-3 text-center font-weight-bold text-secondary">
						Contact Us
					</h3>

					<!-- EMAIL -->
					<div v-if="companyInfo.emailLink">
						<h3 class="text-primary font-weight-bold text-fancy">
							Email
						</h3>
						<a
							:href="companyInfo.emailLink"
							class="text-decoration-none"
						>
							<BButton variant="secondary" class="w-100 mt-2 mb-4">
								<h6 class="m-0">{{ companyInfo.email }}</h6>
							</BButton>
						</a>
					</div>

					<!-- Number -->
					<div v-if="companyInfo.phoneNumberLink">
						<h3 class="text-primary font-weight-bold text-fancy">
							Cell
						</h3>
						<a
							:href="companyInfo.phoneNumberLink"
							class="text-decoration-none"
						>
							<BButton variant="secondary" class="w-100 mt-2 mb-4">
								<h6 class="m-0">
									<PhoneIcon size="1x" />
									{{ companyInfo.phoneNumber }}
								</h6>
							</BButton>
						</a>
					</div>

					<!-- [LEFT][IMAGE] -->
					<img
						:src="pageData.image"
						class="d-none d-lg-block w-100 mx-auto my-2"
						style="max-width: 130px;"
					>
				</BCol>

				<!-- CONTENT -->
				<BCol
					cols="12" lg="8" xl="9"
					order="1" order-lg="2"
					class="px-sm-4 py-4"
					data-aos="fade"
				>
					<AboutCEO />
					<AboutBalanceWithin/>
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>

<script>
	import companyInfo from '@/defaults/companyInfo'
	import pageData from '@/defaults/pages/about'
	import AboutCEO from '../components/home/AboutCEO'
	import AboutBalanceWithin from '../components/home/AboutBalanceWithin.vue'

	export default {
		components: {
			AboutCEO,
			AboutBalanceWithin,
		},

		data() {
			return {
				companyInfo: companyInfo,
				pageData: pageData,
			}
		},
	}
</script>
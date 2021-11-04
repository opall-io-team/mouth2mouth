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
				<BCol
					cols="12" lg="5" xl="4"
					order="2" order-lg="1"
					class="px-5 py-4 bg-primary-lighter"
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
					<img :src="companyInfo.companyLogo"
						class="w-100 mb-2" style="max-width: 130px;"
					>
				</BCol>

				<!-- CONTENT -->
				<BCol
					cols="12" lg="7" xl="8"
					order="1" order-lg="2"
					class="px-sm-4 py-4"
					data-aos="fade"
				>
					<p class="h6 text-dark">
						<!-- [RIGHT][IMAGE] -->
						<img
							src="https://images2.imgbox.com/6f/f3/kiqIewcm_o.jpg" 
							class="d-none d-md-block w-100 float-right mx-4 mb-3 rounded-lg shadow"
							style="max-width: 180px;"
							data-aos="fade-up"
						/>
						<span class="h3 font-weight-bold text-secondary text-fancy">
							{{ pageData.title1 }}
						</span>
						<br>
						<br>
						<span v-html="pageData.description"></span>
					</p>
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>

<script>
	import companyInfo from '@/defaults/companyInfo'
	import pageData from '@/defaults/pages/about'

	export default {
		components: {
			
		},

		data() {
			return {
				companyInfo: companyInfo,
				pageData: pageData,
			}
		},
	}
</script>
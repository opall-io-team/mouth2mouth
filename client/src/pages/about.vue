<template>
	<BContainer class="my-4">
		<BCard bg-variant="light" class=" shadow">
			<BRow class="mb-3">
				<BCol cols="12">
					<h1 class="text-center font-weight-bold text-info">{{ pageData.title }}</h1>
				</BCol>
			</BRow>

			<BRow>
				<BCol cols="12" md="4" class="px-5" data-aos="fade">
					<h1 class="mb-3 text-center font-weight-bold text-primary">
						Find Us
					</h1>

					<!-- Number -->
					<h3 class="text-secondary">Number</h3>
					<a
						:href="companyInfo.phoneNumberLink"
						class="text-decoration-none"
					>
						<p class="h4 font-weight-bold text-info">
							{{ companyInfo.phoneNumber }}
						</p>
					</a>

					<!-- Location -->
					<h3 class="text-secondary">Location</h3>
					<a
						:href="companyInfo.googleMapsLink"
						class="text-decoration-none text-info"
					>
						<p class="h4 font-weight-bold">
							{{ companyInfo.address }}
						</p>
					</a>

					<!-- Hours -->
					<h3 class="text-secondary">Hours</h3>
				</BCol>

				<BCol cols="12" md="8" class="px-5">
					
					<p class="h4 text-secondary">
						<img
							:src="pageData.image"
							width="400"
							class="float-right m-3 rounded shadow"
							data-aos="fade-left"
						/>
						{{ pageData.description }}
					</p>
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>

<script>
	import companyInfo from '../defaults/companyInfo'
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
<template>
	<BContainer class="my-4" data-aos="fade-up">
		<BCard bg-variant="light" class=" shadow">
			<BRow class="mb-3">
				<BCol cols="12">
					<h1 class="text-center font-weight-bold text-info">{{ pageData.title }}</h1>
				</BCol>
			</BRow>

			<BRow>
				<BCol cols="12" lg="4" xl="3" class="px-5" data-aos="fade">
					<h1 class="mb-3 text-center font-weight-bold text-primary">
						Find Us
					</h1>

					<!-- Number -->
					<h3 class="text-secondary">Number</h3>
					<a
						:href="companyInfo.phoneNumberLink"
						class="text-decoration-none"
					>
						<p class="h4 mb-4 font-weight-bold text-info">
							{{ companyInfo.phoneNumber }}
						</p>
					</a>

					<!-- Location -->
					<h3 class="text-secondary">Location</h3>
					<a
						:href="companyInfo.googleMapsLink"
						class="text-decoration-none text-info"
					>
						<p class="h4 mb-4 font-weight-bold">
							{{ companyInfo.address }}
						</p>
					</a>

					<!-- Hours -->
					<h3 class="text-secondary">Hours</h3>
					<ul class="list-unstyled text-small text-light">
						<li
							v-for="(hoo, index) in companyInfo.hoursOfOperation"
							:key="index"
							class="text-primary h5"
						>{{ hoo.days }}: {{ hoo.hours }}</li>
					</ul>
				</BCol>

				<BCol cols="12" lg="8" xl="9" class="px-5">
					
					<p class="h5 text-secondary">
						<img
							:src="pageData.image"
							class="w-100 float-right m-3 rounded shadow"
							style="max-width: 300px;"
							data-aos="fade-up"
						/>
						{{ pageData.description1 }}
						<br>
						<br>
						{{ pageData.description2 }}
						<br>
						<br>
						{{ pageData.description3 }}
						<br>
						<br>
						{{ pageData.description4 }}
						<br>
						<br>
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
<template>
	<BContainer class="my-5">
		<BRow>
			<BCol cols="12">
				<BCard no-body bg-variant="white" class="text-center border-0 shadow">
					<BRow class="m-0">
						<!-- Title Header -->
						<BCol cols="12" class="bg-secondary-lighter">
							<h1 class="my-4 text-center font-weight-bold text-primary">
								Contact Us
							</h1>
						</BCol>

						<!-- CONTENT -->
						<BCol cols="12" lg="7" class="m-auto px-2 py-5 px-lg-5">
							<!-- EMAIL -->
							<div v-if="companyInfo.emailLink">
								<h1 class="font-weight-bold text-primary text-fancy">
									Email
								</h1>
								<a
									:href="companyInfo.emailLink"
									class="text-decoration-none"
								>
									<BButton variant="secondary" size="lg" class="my-3">
										<h6 class="m-0">{{ companyInfo.email }}</h6>
									</BButton>
								</a>
								<br><br>
							</div>

							<!-- Number -->
							<div v-if="companyInfo.phoneNumberLink">
								<h1 class="font-weight-bold text-primary text-fancy">
									{{ companyInfo.contactName }}
								</h1>
								<a
									:href="companyInfo.phoneNumberLink"
									class="text-decoration-none"
								>
									<BButton variant="secondary" size="lg" class="my-3">
										<h6 class="m-0">
											<PhoneIcon size="1x" />
											{{ companyInfo.phoneNumber }}
										</h6>
									</BButton>
								</a>
								<br><br>
							</div>

							<!-- LOCATION -->
							<div v-if="companyInfo.googleMapsLink">
								<h2 class="font-weight-bold text-secondary text-fancy">
									Location
								</h2>
								<a
									:href="companyInfo.googleMapsLink"
									class="text-decoration-none"
								>
									<BButton variant="primary" size="lg" class="m-3">
										<MapPinIcon size="1x" />
										{{ companyInfo.address }}
									</BButton>
								</a>
							</div>

							<!-- HOURS -->
							<div v-if="companyInfo.hoursOfOperation > 0">
								<h3 class="font-weight-bold text-secondary text-fancy">
									Hours
								</h3>
								<ul class="list-unstyled text-small text-light">
									<li
										v-for="(hoo, i) in companyInfo.hoursOfOperation"
										:key="i"
										class="text-primary h5"
									>{{ hoo.days }}: {{ hoo.hours }}</li>
								</ul>
								<br><br>
							</div>

							<!-- Social Media -->
							<h1 class="mb-3 font-weight-bold text-primary text-fancy">
								Follow Us!
							</h1>
							<SocialMediaPlug
								strokeWidth="2"
								size="3x"
								variant="secondary"
								class="mb-5"
							/>
						</BCol>

						<!-- IMAGE SECTION -->
						<BCol cols="12" lg="5" class="d-none d-lg-block p-0">
							<BCarousel
								:slideObjs="[
									{
										caption: '',
										text: '',
										img: 'https://images2.imgbox.com/9e/f5/8rTtdi1C_o.png',
									},
								]"
								class="w-100 m-0 p-0 border-0"
								:maxHeight="1000"
							/>
						</BCol>
					</BRow>
				</BCard>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	// [IMPORT] //
	import { MapPinIcon, PhoneIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import BCarousel from '@/components/display/BCarousel'
	import SocialMediaPlug from '@/components/SocialMediaPlug.vue'
	import companyInfo from '@/defaults/companyInfo'

	export default {
		components: {
			BCarousel,
			MapPinIcon,
			PhoneIcon,
			SocialMediaPlug,
		},

		data() {
			return {
				companyInfo: companyInfo,
			}
		},
	}
</script>
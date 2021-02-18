<template>
	<div class="w-100 bg-dark text-secondary">
		<BContainer>
			<BRow class="pt-4">
				<BCol cols="12" class="text-center" data-aos="fade">
					<RouterLink to="/" class="text-decoration-none">
						<h5 class="m-0 text-light">
							{{ companyInfo.companyName }}
						</h5>
						<h6 v-html="companyInfo.companyCaption1" class="text-secondary">
						</h6>
						<hr>
					</RouterLink>
				</BCol>

				<BCol cols="12" sm="4" class="text-center text-sm-left" data-aos="fade-up">
					<h4 class="text-secondary">Location</h4>
					<a :href="companyInfo.googleMapsLink" class="mb-3 text-light">
						<h5 class="mb-4">{{ companyInfo.address }}</h5>
					</a>

					<h4 class="text-secondary">Hours</h4>
					<ul class="list-unstyled text-small text-light">
						<li
							v-for="(hoo, index) in companyInfo.hoursOfOperation"
							:key="index"
						>
							<span class="text-secondary">{{ hoo.days }}:</span>
							{{ hoo.hours }}
						</li>
					</ul>
					<hr>
				</BCol>

				<BCol cols="12" sm="4" class="text-center" data-aos="fade-up">
					<h4>Check Us Out</h4>
					<ul class="list-unstyled text-small">
						<li>
							<RouterLink to="/services" class="text-light">
								Services
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/gallery" class="text-light">
								Gallery
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/about" class="text-light">
								About
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/directions" class="text-light">
								Directions
							</RouterLink>
						</li>
					</ul>
					<hr>
				</BCol>

				<BCol cols="12" sm="4" class="text-center" data-aos="fade-up">
					<h4>Follow Us</h4>
					<SocialMediaPlug variant="light" />
				</BCol>

				<BCol cols="12" class="my-3 text-center text-secondary">
					<h6>© w3st.io {{ new Date().getFullYear() }}</h6>
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	import SocialMediaPlug from '../../components/SocialMediaPlug'
	import companyInfo from '../../defaults/companyInfo'

	export default {
		components: {
			SocialMediaPlug
		},

		data() {
			return {
				companyInfo: companyInfo
			}
		},
	}
</script>
<template>
	<div class="w-100 bg-dark text-light">
		<BContainer>
			<BRow class="pt-4">
				<BCol cols="12" class="text-center" data-aos="fade">
					<RouterLink to="/" class="text-decoration-none">
						<h5 class="text-primary">
							{{ companyInfo.companyName }} {{ new Date().getFullYear() }}
						</h5>
						<h6 v-html="companyInfo.companyCaption1" class="text-light">
						</h6>
						<hr>
					</RouterLink>
				</BCol>

				<BCol cols="12" sm="4" class="text-center text-sm-left" data-aos="fade-up">
					<h4 class="text-light">Location</h4>
					<a :href="companyInfo.googleMapsLink" class="mb-3">
						<h5 class="mb-4">{{ companyInfo.address }}</h5>
					</a>

					<h4 class="text-light">Hours</h4>
					<ul class="list-unstyled text-small text-secondary">
						<li
							v-for="(hoo, index) in companyInfo.hoursOfOperation"
							:key="index"
						>
							<span class="text-light">{{ hoo.days }}:</span>
							{{ hoo.hours }}
						</li>
					</ul>
					<hr>
				</BCol>

				<BCol cols="12" sm="4" class="text-center" data-aos="fade-up">
					<h4>Check Us Out</h4>
					<ul class="list-unstyled text-small">
						<li>
							<RouterLink to="/services">
								Services
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/gallery">
								Gallery
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/about">
								About
							</RouterLink>
						</li>
						<li>
							<RouterLink to="/directions">
								Directions
							</RouterLink>
						</li>
					</ul>
					<hr>
				</BCol>

				<BCol cols="12" sm="4" class="text-center" data-aos="fade-up">
					<h4>Follow Us</h4>
					<SocialMediaPlug variant="primary" />
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
<template>
	<div class="w-100 text-primary">
		<div class="wave">
			<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
				<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".7" class="shape-fill-0"></path>
				<path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill-1"></path>
				<path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill-2"></path>
			</svg>
		</div>
		<div class="w-100 bg-color">
			<BContainer class="">
				<BRow class="pt-4">
					<BCol cols="12" class="text-center">
						<RouterLink to="/" class="text-decoration-none">
							<h5 class="m-0 text-secondary">
								{{ companyInfo.companyName }}
							</h5>
							<h6 v-html="companyInfo.companyCaption1" class="text-primary">
							</h6>
							<hr>
						</RouterLink>
					</BCol>

					<BCol cols="12" sm="4" class="text-center text-sm-left">
						<h4 class="text-primary">Location</h4>
						<a :href="companyInfo.googleMapsLink" class="mb-3 text-dark">
							<h5 class="mb-4">{{ companyInfo.address }}</h5>
						</a>

						<h4 class="text-primary">Hours</h4>
						<ul class="list-unstyled text-small text-dark">
							<li
								v-for="(hoo, index) in companyInfo.hoursOfOperation"
								:key="index"
							>
								<span class="text-primary">{{ hoo.days }}:</span>
								{{ hoo.hours }}
							</li>
						</ul>
					</BCol>

					<BCol cols="12" sm="4" class="text-center">
						<h4>Check Us Out</h4>
						<ul class="list-unstyled text-small">
							<li v-for="(link, i) in pageLinks" :key="i">
								<RouterLink to="/services" class="text-dark">
									<span v-if="link.text">{{ link.text }}</span>
									<span v-else v-html="link.navIcon"></span>
								</RouterLink>
							</li>
						</ul>
						<br>

						<h4>Legal</h4>
						<ul class="list-unstyled text-small">
							<li>
								<RouterLink to="/privacy-policy" class="text-dark">
									Privacy Policy & Terms of Service
								</RouterLink>
							</li>
						</ul>
					</BCol>

					<BCol cols="12" sm="4" class="text-center">
						<h4>Follow Us</h4>
						<SocialMediaPlug variant="dark" />
					</BCol>

					<BCol cols="12" class="my-3 text-center text-primary">
						<h6>
							<a href="https://www.w3st.io" target="_blank">© w3st.io {{ new Date().getFullYear() }}</a>
						</h6>
						<br><br><br><br><br>
					</BCol>
				</BRow>
			</BContainer>
		</div>
	</div>
</template>

<script>
	import SocialMediaPlug from '../../components/SocialMediaPlug'
	import companyInfo from '../../defaults/companyInfo'
	import pageLinks from '../../defaults/pageLinks'

	export default {
		components: {
			SocialMediaPlug
		},

		data() {
			return {
				companyInfo: companyInfo,
				pageLinks: pageLinks,
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/styles/variables.scss';

	.wave {
		position: relative;
		bottom: 0;
		left: 0;
		width: 100%;
		overflow: hidden;
		line-height: 0;
		transform: rotate(180deg);

		svg {
			position: relative;
			display: block;
			width: calc(152% + 1.3px);
			height: 100px;

			@media (max-width: 600px) {
				height: 40px;
			}
		}

		.shape-fill-0 {
			fill: $white;
		}

		.shape-fill-1 {
			fill: $secondary-light;
		}

		.shape-fill-2 {
			fill: $primary-lightest;
		}
	}

	.bg-color {
		background-color: $primary-lightest;
	}
</style>
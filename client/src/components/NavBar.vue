<template>
	<div class="w-100 pt-4 bg-light border-bottom border-info">
		<BContainer
			variant="light"
			class="bg-light"
		>
			<BRow>
				<!-- Title -->
				<BCol cols="12" md="6" lg="3" class="mb-3 text-center">
					<RouterLink to="/">
						<h4 class="m-0 font-weight-bold text-info">Mouth 2 Mouth</h4>
						<h5 class="m-0 font-weight-bold">
							The Beauty Bar
						</h5>
					</RouterLink>
				</BCol>

				<!-- Phone # -->
				<BCol cols="12" md="6" lg="4" class="mb-3 text-center">
					<h6 class="m-0 font-weight-bold">
						Call Us: (201) 403-1984 
					</h6>
				</BCol>

				<!-- Links -->
				<BCol cols="12" md="12" lg="5" class="mb-3">
					<div class="text-center text-lg-right">
						<h6 class="m-0 font-weight-bold">
							<RouterLink
								to="/"
								class="text-primary"
							>Home</RouterLink> |

							<RouterLink
								to="/services"
								class="text-primary"
							>Our Services</RouterLink> |

							<RouterLink
								to="/directions"
								class="text-primary"
							>Get Directions</RouterLink> |

							<RouterLink
								to="/about"
								class="text-primary"
							>About</RouterLink> |

							<RouterLink
							to="/gallery"
							class="text-primary"
							>Gallery</RouterLink>
						</h6>
					</div>
					<div class="w-100 mt-3 text-center text-lg-right font-weight-bold">
						<a
							href="https://www.instagram.com/mouth2mouthbeautybar/?hl=en"
							class="text-secondary"
						>
							<span class="mr-3">Follow us:</span>
							<InstagramIcon size="1.5x" />
						</a>
					</div>
				</BCol>
			</BRow>
			<BRow>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	import { InstagramIcon } from 'vue-feather-icons'

	export default {
		components: {
			InstagramIcon
		}
	}
</script>
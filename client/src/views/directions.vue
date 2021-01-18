<template>
	<BContainer class="my-4">
		<BCard bg-variant="light" class="mt-3 shadow">
			<BRow>
				<BCol cols="12" class="my-3 text-center">
					<h3 class="text-primary text-center">Directions</h3>
				</BCol>

				<BCol cols="12" lg="6" class="text-center">		
					<a
						:href="DPage.googleMapsLink"
						class="mt-5 text-secondary"
					><h5>{{ DPage.address }}</h5></a>

					<a :href="DPage.googleMapsLink" class="text-secondary">
						<BButton variant="info" size="lg" class="mt-3">
							Open Google Maps
						</BButton>
					</a>
				</BCol>

				<BCol cols="12" lg="6">
					<a
						:href="DPage.googleMapsLink"
						class="mt-5 text-secondary text-center"
					><img :src="DPage.gMapsPlaceholder" class="mt-3 w-100"></a>
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>

<script>
	// [IMPORT] Personal //
	import DPage from '@/defaults/pages/directions'

	export default {
		data() {
			return {
				DPage: DPage,
			}
		},
	}
</script>
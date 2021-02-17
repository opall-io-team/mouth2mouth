<template>
	<BContainer class="my-4">
		<BCard bg-variant="light" class="mt-3 shadow">
			<BRow>
				<BCol cols="12" class="my-3 text-center">
					<h3 class="text-primary text-center">{{ DPage.title }}</h3>
				</BCol>

				<BCol cols="12" lg="6" class="text-center">		
					<a
						:href="DPage.googleMapsLink"
						class="mt-5 text-secondary"
					><h4>{{ DPage.address }}</h4></a>

					<a :href="DPage.googleMapsLink" class="text-secondary">
						<BButton variant="info" size="lg" class="my-3">
							{{ DPage.buttonText }}
						</BButton>
					</a>
				</BCol>

				<BCol cols="12" lg="6">
					<BCard variant="white" border-variant="light" class="shadow">
						<a
							:href="DPage.googleMapsLink"
							class="text-secondary text-center"
						><img :src="DPage.gMapsPlaceholder" class="w-100"></a>
					</BCard>
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
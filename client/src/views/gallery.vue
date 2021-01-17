<template>
	<BContainer class="mt-3">
		<BCard bg-variant="light" class="mt-3">
			<h3 class="mb-3 text-primary text-center">{{ DPage.title }}</h3>

			<!-- viewer -->
			<viewer :options="{ title: false, transition: false, }" :images="allImages">
				<BRow>
					<BCol
						v-for="(image, index) in allImages"
						:key="index"
						cols="12" sm="6" md="4" lg="4" xl="3"
					>
						<BCard variant="white" border-variant="white" class="mb-3 shadow rounded-0">
							<img
								:src="image"
								alt="No Photo"
								class="w-100"
								style="height: 300px; object-fit: cover;"
							>
						</BCard>
					</BCol>
				</BRow>
			</viewer>
		</BCard>
	</BContainer>
</template>

<script>
	// [IMPORT] Personal //
	import DPage from '@/defaults/pages/gallery'

	export default {
		data() {
			return {
				DPage: DPage,
				allImages: DPage.allImages
			}
		},
	}
</script>
<template>
	<BContainer class="mt-3">
		<BCard bg-variant="light" class="mt-3">
			<h3 class="text-primary text-center">{{ DPage.title }}</h3>

			<!-- viewer -->
			<viewer :options="{ title: false, transition: false, }" :images="allImages">
				<BRow>
					<BCol v-for="(image, index) in allImages" :key="index" cols="4">
						<img
							:src="image"
							alt=""
							class="w-100 m-2 shadow"
							style="height: 300px; object-fit: cover;"
						>
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
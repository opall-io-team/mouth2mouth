<template>
	<BContainer class="mt-3">
		<BCard bg-variant="light" class="mt-3">
			<h3 class="text-primary text-center">Gallery</h3>

			<!-- component -->
			<viewer :images="allImages">
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
	import allImages from '@/defaults/allImages'

	export default {
		data() {
			return {
				allImages: allImages
			}
		},
	}
</script>
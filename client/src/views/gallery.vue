<template>
	<BContainer class="bg-light">
		<BRow>
			<BCol v-for="(image, index) in allImages" :key="index" cols="3">
				<BCard class="mt-3">
					<img :src="image" alt="" class="w-100">
				</BCard>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
import allImages from '../defaults/allImages'
export default {
	data() {
		return {
			allImages: allImages
		}
	},
}
</script>
<template>
	<BRow class="pt-5">
		<BCol
			v-for="(img, i) in images"
			:key="i"
			cols="12" sm="6" md="4"
			class="mx-auto"
		>
			<RouterLink to="/about">
				<div class="px-2 pb-3 pb-sm-4 pb-md-5">
					<img :src="img" class="w-100">
				</div>
				<h3 class="mb-3 mb-sm-4 mb-md-5 text-center text-primary">About Balance Within</h3>
			</RouterLink>
		</BCol>
	</BRow>
</template>

<script>
export default {
	data() {
		return {
			images: [
				require('../../assets/images/meditation.jpeg'),
				require('../../assets/images/services.jpeg'),
				require('../../assets/images/blog.jpeg'),
			]
		}
	},
}
</script>
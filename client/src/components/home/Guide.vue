<template>
	<BRow>
		<BCol cols="12" md="4">
			<RouterLink to="/about">
				<div class="px-2 py-5">
					<img :src="images[0]" class="w-100">
				</div>
				<h3 class="mb-5 text-center text-primary">About Balance Within</h3>
			</RouterLink>
		</BCol>

		<BCol cols="12" md="4">
			<RouterLink to="/services">
				<div class="px-2 py-5">
					<img :src="images[1]" class="w-100">
				</div>
				<h3 class="mb-5 text-center text-primary">Therapies</h3>
			</RouterLink>
		</BCol>

		<BCol cols="12" md="4">
			<RouterLink to="/blog">
				<div class="px-2 py-5">
					<img :src="images[2]" class="w-100">
				</div>
				<h3 class="mb-5 text-center text-primary">Blog</h3>
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
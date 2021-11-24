<template>
	<BRow class="py-5">
		<BCol
			v-for="(s, i) in sections"
			:key="i"
			cols="12" sm="6" md="4"
			class="mx-auto"
		>
			<RouterLink :to="s.to">
				<div class="px-2 pb-3 pb-sm-4 pb-md-5">
					<img :src="s.img" class="w-100">
				</div>
				<h3 class="mb-3 mb-sm-4 mb-md-0 text-center text-primary">
					{{ s.text }}
				</h3>
			</RouterLink>
		</BCol>
	</BRow>
</template>

<script>
export default {
	data() {
		return {
			sections: [
				{
					text: 'About Balance Within',
					to: '/about',
					img: require('../../assets/images/meditation.jpeg'),
				},
				{
					text: 'Therapies',
					to: '/services',
					img: require('../../assets/images/services.jpeg'),
				},
				{
					text: 'Blog',
					to: '/blog',
					img: require('../../assets/images/blog.jpeg'),
				},
			]
		}
	},
}
</script>
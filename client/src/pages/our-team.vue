<template>
	<div>
		<Parallax
			:imgURL="pageData.parallax"
			:height="280"
			:text="pageData.pageTitle"
			data-aos="fade-up"
		/>	
		
		<BContainer class="my-4" v-rellax="{ speed: 6 }" data-aos="fade">
			<BRow class="mb-3">
				<BCol
					v-for="(col, index) in pageData.r1.cx" :key="index"
					cols="12" sm="12" md="6" lg="4"
					class="mb-3"
				>
					<BCard :img-src="col.image">
						<h3 class="card-title">{{ col.title }}</h3>
						<p class="card-text">{{ col.description }}</p>
					</BCard>
				</BCol>
			</BRow>
		</BContainer>
	</div>
</template>

<script>
	import Parallax from '@/components/display/Parallax'
	import pageData from '@/defaults/pages/our-team'

	export default {
		components: {
			Parallax
		},

		data() {
			return {
				pageData: pageData
			}
		},
	}
</script>
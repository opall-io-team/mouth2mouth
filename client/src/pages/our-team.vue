<template>
	<div>
		<Parallax :imgURL="pageData.parallax" :height="300" />	
		
		<BContainer class="my-4" v-rellax="{ speed: 4 }">
			<BCard bg-variant="light" class="mt-3 shadow">
				<h1 class="text-center text-primary font-weight-bold">
					{{ pageData.pageTitle }}
				</h1>

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
			</BCard>
		</BContainer>
	</div>
</template>

<script>
	import Parallax from '../components/display/Parallax'
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
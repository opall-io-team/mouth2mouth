<template>
	<BContainer class="my-4">
		<BCard bg-variant="light" class="mt-3 shadow">
			<h1 class="text-center text-primary font-weight-bold">
				{{ pageData.pageTitle }}
			</h1>

			<BRow>
				<BCol cols="12">
					
				</BCol>
				<BCol cols="12" md="6">
					<h2 class="text-center text-info">{{ pageData.r1.c1.title }}</h2>
					<img :src="pageData.r1.c1.image" class="w-100">
				</BCol>
				<BCol cols="12" md="6">
					<p>{{ pageData.r1.c2.description }}</p>
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>

<script>
import pageData from '@/defaults/pages/our-team'
export default {
	data() {
		return {
			pageData: pageData
		}
	},
}
</script>
<template>
	<BContainer class="my-4">
		<BCard class="shadow">
			<BRow>
				<BCol cols="12" md="7">
					<h1 class="font-weight-bold text-info">{{ DPage.title }}</h1>
			
					<p>{{ DPage.description }}</p>
				</BCol>

				<BCol cols="12" md="5" class="px-5">
					<BCard variant="white" border-variant="white" class="shadow">
						<img :src="DPage.image" alt="No Image" class="w-100">
					</BCard>
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>


<script>
	// [IMPORT] Personal //
	import DPage from '@/defaults/pages/about'

	export default {
		data() {
			return {
				DPage: DPage,
			}
		},	
}
</script>
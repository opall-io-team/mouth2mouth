<template>
	<BContainer class="my-4">
		<BCard bg-variant="light" class="mt-3 shadow">
			<!-- Page Title -->
			<h1 class="mb-3 text-center font-weight-bold text-primary">
				{{ pageData.title }}
			</h1>

			<viewer :options="{ title: false, transition: false, }">
				<!-- [Rx] Image Section -->
				<BRow v-for="(row, index) in pageData.rx" :key="index" class="mb-3">
					<!-- [C1] Title -->
					<BCol cols="12">
						<p class="mb-3 h2 text-info">{{ row.c1.title }}</p>
					</BCol>

					<!-- [CX] Images -->
					<BCol
						v-for="(image, index) in row.cx"
						:key="index"
						cols="12" sm="6" md="4" lg="4" xl="3"
					>
						<img
							:src="image"
							alt="No Photo"
							class="w-100 mb-4 shadow"
							style="height: 300px; object-fit: cover;"
							data-aos="fade-up"
						>
					</BCol>
				</BRow>
			</viewer>
		</BCard>
	</BContainer>
</template>

<script>
	// [IMPORT] Personal //
	import pageData from '@/defaults/pages/gallery'

	export default {
		data() {
			return {
				pageData: pageData,
			}
		},
	}
</script>
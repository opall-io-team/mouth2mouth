<template>
	<BContainer class="my-4">
		<BCard bg-variant="light" class="mt-3 shadow">
			<h1 class="text-center text-primary font-weight-bold">
				{{ pageData.pageTitle }}
			</h1>
		</BCard>
	</BContainer>
</template>

<script>
import pageData from '@/defaults/pages/faq'
export default {
	data() {
		return {
			pageData: pageData
		}
	},
}
</script>
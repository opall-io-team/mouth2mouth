<template>
	<BCard
		no-body
		bg-variant="secondary"
		class="my-5 rounded-0"
		style="
			background-image: url('https://images2.imgbox.com/c2/ae/Wi5C61BU_o.jpg') !important;
			background-position: right;
		"
	>
		<div class="p-3 text-light bg-shade">
			<!-- Captions -->
			<h1 class="text-light hero-text">
				{{ pageData.headerDetails.caption1 }}
			</h1>
			
			<!-- Address -->
			<p
				v-if="pageData.headerDetails.hoursOfOperation.length > 0"
				class="h6 mb-4 text-center font-weight-bold text-secondary"
			>Our Hours</p>
			
			<!-- Hours of Operation -->
			<ul
				v-if="pageData.headerDetails.hoursOfOperation.length > 0"
				class="m-0 mb-4 p-0 text-dark"
			>
				<li
					v-for="(hoo, index) in pageData.headerDetails.hoursOfOperation"
					:key="index"
					class="m-0 list-unstyled text-center"
				><p class="h6">{{ hoo.days }}<br>{{ hoo.hours }}</p></li>
			</ul>

			<h4 class="mb-3 text-light">{{ pageData.headerDetails.text }}</h4>

			<RouterLink to="/book">
				<BButton size="lg" variant="secondary" class="">
					Contact Us
				</BButton>
			</RouterLink>
		</div>
	</BCard>
</template>

<script>
	import pageData from '@/defaults/pages'

	export default {
		data() {
			return {
				pageData: pageData,
			}
		},
	}
</script>
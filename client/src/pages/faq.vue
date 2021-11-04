<template>
	<BContainer class="my-5">
		<BCard no-body bg-variant="light" class="mt-3 border-0 rounded-0 shadow">
			<div class="bg-primary-lighter">
				<h1 class="my-4 text-center text-primary font-weight-bold">
					{{ pageData.pageTitle }}
				</h1>
			</div>

			<BContainer fluid class="my-4">
				<div v-for="(qa, index) in pageData.faq" :key="index">
					<BListGroup class="mb-3">
						<BListGroupItem
							variant="white"
							class="d-flex justify-content-between align-items-center q"
							@click="toggler(index)"
						>
							<h3 class="m-0 font-weight-bold text-secondary">
								{{ qa.q }}
							</h3>
							<h2 v-if="!inOpened(index)" class="m-0">+</h2>
							<h2 v-if="inOpened(index)" class="m-0">-</h2>
						</BListGroupItem>

						<BListGroupItem
							v-if="inOpened(index)"
							class="d-flex justify-content-between align-items-center"
						><p v-html="qa.a" class="h5 font-weight-light"></p></BListGroupItem>
					</BListGroup>				
				</div>
			</BContainer>
		</BCard>
	</BContainer>
</template>

<script>
import pageData from '@/defaults/pages/faq'
export default {
	data() {
		return {
			pageData: pageData,
			opened: [],
		}
	},

	methods: {
		toggler(index) {
			if (this.inOpened(index)) this.removeTab(index)
			else this.addTab(index)
		},
			
		inOpened(index) {
			let found = false

			this.opened.filter((value) => {
				if (value == index) found = true
			})

			return found
		},

		addTab(index) {
			let found = false

			this.opened.filter((value) => {
				if (value == index) found = true
			})
			
			if (!found) this.opened.push(index)
		},

		removeTab(index) {
			let array = []

			this.opened.filter((value) => {
				if (value != index) array.push(value)
			})

			this.opened = array
		}
	},
}
</script>

<style lang="scss">
	.q { transition: .5s; }

	.q:hover {
		background-color: rgba(0, 0, 0, 0.1);
		cursor: pointer;
	}
</style>
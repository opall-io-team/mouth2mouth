<template>
	<BRow>
		<BCol cols="12">
			<h1 class="mb-3 text-center font-weight-bold  text-primary">
				{{ product.title }}
			</h1>
			<h6 class="mb-3 text-center font-weight-bold text-secondary">
				{{ product.heading1 }}
			</h6>
			<hr>
		</BCol>

		<BCol cols="12" md="3" class="d-none d-md-block">
			<img :src="product.image" class="w-100 mb-3 rounded">
		</BCol>

		<BCol cols="12" md="9">
			<p>{{ product.description }}</p>

			<!-- [CONTENT] -->
			<div v-for="(c, i) in product.content" :key="i">
				<!-- [LIST] -->
				<div v-if="c.type == 'list'" class="mb-3">
					<BListGroup>
						<BListGroupItem>
							<h5 class="m-0 text-center text-primary">
								{{ c.title }}
							</h5>
						</BListGroupItem>
						<BListGroupItem
							v-for="(item, ii) in c.items"
							:key="ii"
							class="m-0 py-1"
						>{{ item }}</BListGroupItem>
					</BListGroup>
				</div>

				<!-- [LIST] -->
				<div v-if="c.type == 'check-list'" class="mb-3">
					<BListGroup class="border-0 transparent">
						<BListGroupItem class="px-0 border-0 transparent">
							<h5 class="m-0 text-primary">
								{{ c.title }}
							</h5>
						</BListGroupItem>
						<BListGroupItem
							v-for="(item, ii) in c.items"
							:key="ii"
							class="m-0 py-1 border-0 transparent"
						>✓{{ item }}</BListGroupItem>
					</BListGroup>
				</div>

				<!-- [PARAGRAPH] -->
				<div v-if="c.type == 'paragraph'" class="mb-3">
					<h5 class="text-primary">{{ c.title }}</h5>
					<p>{{ c.content }}</p>
				</div>
			</div>
			<hr>

			<!-- [PRICING] -->
			<div class="">
				<BListGroup>
					<BListGroupItem variant="light" class="text-center">
						<h5 class="m-0 text-primary">Pricing</h5>
					</BListGroupItem>
		
					<BListGroupItem
						v-for="(p, i) in product.pricing"
						:key="i"
						variant="light"
						class="py-2"
					>
						<BRow>
							<BCol cols="12" md="9">
								<h6 class="m-0 text-primary">
									{{ p.title }}
								</h6>
							</BCol>
							<BCol cols="12" md="3">
								<h6 class="m-0 text-success">
									{{ p.costString }}
								</h6>
							</BCol>
						</BRow>
					</BListGroupItem>
				</BListGroup>
			</div>
		</BCol>

		<BCol cols="12">
			<RouterLink to="/contact">
				<BButton variant="primary" size="lg" class="w-100 mt-3">
					Book Now
				</BButton>
			</RouterLink>
		</BCol>
	</BRow>
</template>

<script>
export default {
	props: {
		product: {
			type: Object,
			required: true,
		}
	},
}
</script>

<style lang="scss" scoped>
	.transparent {
		background-color: transparent !important;
	}
</style>
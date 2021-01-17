<template>
	<BContainer class="mt-3">
		<BCard bg-variant="light" class="mt-3">
			<BRow>
				<!-- Title -->
				<BCol cols="12">
					<h3 class="text-primary text-center">{{ DPage.title }}</h3>
				</BCol>

				<!-- Best Sellers -->
				<BCol cols="12" md="6" lg="4">
					<h4 class="text-center text-info font-weight-bold">Best Sellers</h4>

					<h6 class="font-weight-bold">Classic/Natural</h6>
					<BListGroup class="mb-3">
						<BListGroupItem
							v-for="(service, index) in DPage.services.bestSellers.classic_natural"
							:key="index"
							class="d-flex justify-content-between align-items-center"
						>
							{{ service.name }}
							<BBadge variant="primary" class="badge-pill">
								<h6 class="m-0 font-weight-bold">${{ service.price }}</h6>
							</BBadge>
						</BListGroupItem>
					</BListGroup>

					<h6 class="font-weight-bold">Maga Volume</h6>
					<BListGroup class="mb-3">
						<BListGroupItem
							v-for="(service, index) in DPage.services.bestSellers.megaVolume"
							:key="index"
							class="d-flex justify-content-between align-items-center"
						>
							{{ service.name }}
							<BBadge variant="primary" class="badge-pill">
								<h6 class="m-0 font-weight-bold">${{ service.price }}</h6>
							</BBadge>
						</BListGroupItem>
					</BListGroup>

					<h6 class="font-weight-bold">Volume</h6>
					<BListGroup class="mb-3">
						<BListGroupItem
							v-for="(service, index) in DPage.services.bestSellers.volume"
							:key="index"
							class="d-flex justify-content-between align-items-center"
						>
							{{ service.name }}
							<BBadge variant="primary" class="badge-pill">
								<h6 class="m-0 font-weight-bold">${{ service.price }}</h6>
							</BBadge>
						</BListGroupItem>
					</BListGroup>

					<h6 class="m-0 font-weight-bold">Hybrid</h6>
					<BListGroup class="mb-3">
						<BListGroupItem
							v-for="(service, index) in DPage.services.bestSellers.hybrid"
							:key="index"
							class="d-flex justify-content-between align-items-center"
						>
							{{ service.name }}
							<BBadge variant="primary" class="badge-pill">
								<h6 class="m-0 font-weight-bold">${{ service.price }}</h6>
							</BBadge>
						</BListGroupItem>
					</BListGroup>
				</BCol>

				<!-- Permanent Makeup -->
				<BCol cols="12" md="6" lg="4">
					<h4 class="text-center text-info font-weight-bold">Permanent Makeup</h4>

					<BListGroup class="mb-3">
						<BListGroupItem
							v-for="(service, index) in DPage.services.permanentMakeup"
							:key="index"
							class="d-flex justify-content-between align-items-center"
						>
							{{ service.name }}
							<BBadge variant="primary" class="badge-pill">
								<h6 class="m-0 font-weight-bold">${{ service.price }}</h6>
							</BBadge>
						</BListGroupItem>
					</BListGroup>
				</BCol>

				<!-- Spa -->
				<BCol cols="12" md="6" lg="4">
					<h4 class="text-center text-info font-weight-bold">Spa</h4>

					<BListGroup class="mb-3">
						<BListGroupItem
							v-for="(service, index) in DPage.services.spa"
							:key="index"
							class="d-flex justify-content-between align-items-center"
						>
							{{ service.name }}
							<BBadge variant="primary" class="badge-pill">
								<h6 class="m-0 font-weight-bold">${{ service.price }}</h6>
							</BBadge>
						</BListGroupItem>
					</BListGroup>
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>

<script>
	// [IMPORT] Personal //
	import DPage from '@/defaults/pages/services'

	export default {
		data() {
			return {
				DPage: DPage,
			}
		},
	}
</script>
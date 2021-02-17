<template>
	<BContainer class="my-4">
		<BCard bg-variant="light" class="mt-3 shadow">
			<BRow>
				<!-- Title -->
				<BCol cols="12">
					<h1 class="text-center font-weight-bold text-primary ">
						{{ DPage.title }}
					</h1>
				</BCol>

				<!-- Best Sellers -->
				<BCol cols="12" md="6" lg="4">
					<h2 class="text-center text-info font-weight-bold">Best Sellers</h2>

					<h4 class="font-weight-bold text-secondary">Classic/Natural</h4>
					<BListGroup class="mb-3">
						<BListGroupItem
							v-for="(service, index) in DPage.services.bestSellers.classic_natural"
							:key="index"
							variant="info"
							class="d-flex justify-content-between align-items-center"
						>
							<p class="m-0 h5">{{ service.name }}</p>
							<BBadge variant="primary" class="badge-pill">
								<p class="m-0 h5 font-weight-bold">
									${{ service.price }}
								</p>
							</BBadge>
						</BListGroupItem>
					</BListGroup>

					<h4 class="font-weight-bold text-secondary">Maga Volume</h4>
					<BListGroup class="mb-3">
						<BListGroupItem
							v-for="(service, index) in DPage.services.bestSellers.megaVolume"
							:key="index"
							variant="info"
							class="d-flex justify-content-between align-items-center"
						>
							<p class="m-0 h5">{{ service.name }}</p>
							<BBadge variant="primary" class="badge-pill">
								<p class="m-0 h5 font-weight-bold">
									${{ service.price }}
								</p>
							</BBadge>
						</BListGroupItem>
					</BListGroup>

					<h4 class="font-weight-bold text-secondary">Volume</h4>
					<BListGroup class="mb-3">
						<BListGroupItem
							v-for="(service, index) in DPage.services.bestSellers.volume"
							:key="index"
							variant="info"
							class="d-flex justify-content-between align-items-center"
						>
							<p class="m-0 h5">{{ service.name }}</p>
							<BBadge variant="primary" class="badge-pill">
								<p class="m-0 h5 font-weight-bold">
									${{ service.price }}
								</p>
							</BBadge>
						</BListGroupItem>
					</BListGroup>

					<h4 class="font-weight-bold text-secondary">Hybrid</h4>
					<BListGroup class="mb-3">
						<BListGroupItem
							v-for="(service, index) in DPage.services.bestSellers.hybrid"
							:key="index"
							variant="info"
							class="d-flex justify-content-between align-items-center"
						>
							<p class="m-0 h5">{{ service.name }}</p>
							<BBadge variant="primary" class="badge-pill">
								<p class="m-0 h5 font-weight-bold">
									${{ service.price }}
								</p>
							</BBadge>
						</BListGroupItem>
					</BListGroup>
				</BCol>

				<!-- Permanent Makeup -->
				<BCol cols="12" md="6" lg="4">
					<h2 class="text-center text-info font-weight-bold">Permanent Makeup</h2>

					<BListGroup class="mb-3">
						<BListGroupItem
							v-for="(service, index) in DPage.services.permanentMakeup"
							:key="index"
							variant="info"
							class="d-flex justify-content-between align-items-center"
						>
							<p class="m-0 h5">{{ service.name }}</p>
							<BBadge variant="primary" class="badge-pill">
								<p class="m-0 h5 font-weight-bold">
									${{ service.price }}
								</p>
							</BBadge>
						</BListGroupItem>
					</BListGroup>
				</BCol>

				<!-- Spa -->
				<BCol cols="12" md="6" lg="4">
					<h2 class="text-center text-info font-weight-bold">Spa</h2>

					<BListGroup class="mb-3">
						<BListGroupItem
							v-for="(service, index) in DPage.services.spa"
							:key="index"
							variant="info"
							class="d-flex justify-content-between align-items-center"
						>
							<p class="m-0 h5">{{ service.name }}</p>
							<BBadge variant="primary" class="badge-pill">
								<p class="m-0 h5 font-weight-bold">
									${{ service.price }}
								</p>
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
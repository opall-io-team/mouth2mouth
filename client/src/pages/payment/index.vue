<template>
	<BContainer class="my-3">
		<BRow>
			<BCol cols="8">
				<BCard variant="white">
					<h1>Check Out</h1>

					<!-- Email -->
					<label for="email">Your Email</label>
					<input
						v-model="email"
						name="email"
						type="email"
						placeholder="Your Email"
						class="form-control mb-3"
					>

					<!-- [CARD-INFO] Stripe -->
					<label for="card-info">Please Enter Card Info</label>
					<Card
						name="card-info"
						:stripe="STRIPE_PK"
						:class="{ complete }"
						class="mb-3 stripe-card form-control"
						@change="complete = $event.complete"
					/>

					<!-- [SUBMIT] -->
					<BButton
						:disabled='!complete'
						variant="primary"
						class="pay-with-stripe mb-3"
						@click="pay"
					>Pay with credit card</BButton>

					<!-- Error -->
					<p class="h6 text-danger">{{ error }}</p>
				</BCard>
			</BCol>
		</BRow>
	</BContainer>
</template>
 
<script>
	// [IMPORT] //
	import { Card, createToken } from 'vue-stripe-elements-plus'

	// [IMPORT] Personal //
	import PaymentsService from '@/services/PaymentsService'
	
	export default {
		components: { Card },
			
		data () {
			return {
				product_id: this.$route.params.product_id,
				STRIPE_PK: process.env.VUE_APP_STRIPE_PK,
				email: '',
				complete: false,
				token: {},
				reqData: {},
				error: '',
			}
		},
	
		methods: {
			async pay() {
				try {
					this.reqData = await createToken()

					this.reqData = await PaymentsService.s_charge(
						this.product_id,
						this.email,
						this.reqData.token
					)

					this.error = this.reqData
				}
				catch (err) { this.error = err }
			}
		}
	}
</script> 
 
<style>
	.stripe-card {
		width: 300px;
		border: 1px solid grey;
	}

	.stripe-card.complete {
		border-color: green;
	}
</style> 
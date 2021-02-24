<template>
	<BContainer class="my-3">
		<BRow>
			<BCol cols="12">
				<BCard bg-variant="white">
					<h1>Payment</h1>

					<StripeCheckout
						ref="checkoutRef"
						mode="payment"
						:line-items="lineItems"
						:success-url="`${successURL}/${sessionId}`"
						:cancel-url="cancelURL"
						:pk="publicKey"
						:session-id="sessionId"
					/>
					
					<BButton
						:disabled="loading"
						variant="primary"
						@click="submit()"
					>Pay Deposit Now</BButton>
				</BCard>
			</BCol>
		</BRow>
	</BContainer>
</template>


<script>
	import { StripeCheckout } from '@vue-stripe/vue-stripe'

	export default {
		components: {
			StripeCheckout,
		},

		data () {
			return {
				loading: false,
				sessionId: 'testId',
				publicKey: 'pk_test_51INvnfCC0rHo3XXZIRZAaLkXUGf7iVmAeycF7sA0FrsBRfK5TgrZHyYxBndMY0x7mrMEyUW2Xp9TdgVYC8gGkgxr00X5ZcfZM6',
				lineItems: [
					{
						price: 'price_1IO7UYCC0rHo3XXZenRbrkpv',
						quantity: 1,
					},
				],
				successURL: '',
				cancelURL: '',
			}
		},

		created() {
			this.determinUrls()
		},

		methods: {
			determinUrls() {
				if (window.webpackHotUpdate) {
					this.successURL = 'http://localhost:8080/payment/'
					this.cancelURL = 'http://localhost:8080/payment/'
				}
				else {
					this.successURL = 'http://localhost:8080/'
					this.cancelURL = 'http://localhost:8080/'
				}
			},

			submit() {
			// You will be redirected to Stripe's secure checkout page
			this.$refs.checkoutRef.redirectToCheckout()
			},
		},
	}
</script>
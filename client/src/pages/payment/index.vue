<template>
	<BContainer class="my-3">
		<h1>Payment</h1>

		<StripeCheckout
			ref="checkoutRef"
			mode="payment"
			:line-items="lineItems"
			:pk="pk"
		/>
		<BButton variant="primary" @click="submit">Pay now!</BButton>
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
				pk: 'pk_test_51INvnfCC0rHo3XXZIRZAaLkXUGf7iVmAeycF7sA0FrsBRfK5TgrZHyYxBndMY0x7mrMEyUW2Xp9TdgVYC8gGkgxr00X5ZcfZM6',
				loading: false,
				lineItems: [
					{
						price: 'price_1IO7UYCC0rHo3XXZenRbrkpv',
						quantity: 1,
					},
				],
				successURL: 'your-success-url',
				cancelURL: 'your-cancel-url',
			}
		},

		created() {
			if (window.webpackHotUpdate) {
				console.log('In Dev Mode')
			}
		},

		methods: {
			submit () {
			// You will be redirected to Stripe's secure checkout page
			this.$refs.checkoutRef.redirectToCheckout()
			},
		},
	}
</script>
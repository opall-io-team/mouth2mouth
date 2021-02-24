<template>
	<BContainer class="my-3">
		<BRow>
			<BCol cols="12">
				<BCard variant="white">
					<h1>Please give us your payment details:</h1>

					<Card
						stripe='pk_test_51INvnfCC0rHo3XXZIRZAaLkXUGf7iVmAeycF7sA0FrsBRfK5TgrZHyYxBndMY0x7mrMEyUW2Xp9TdgVYC8gGkgxr00X5ZcfZM6'
						class='mb-3 stripe-card'
						:class='{ complete }'
						@change="complete = $event.complete"
					/>

					<BButton
						:disabled='!complete'
						variant="primary"
						class="pay-with-stripe"
						@click="pay"
					>Pay with credit card</BButton>

					<h1 class="text-danger">{{ error }}</h1>
				</BCard>
			</BCol>
		</BRow>
	</BContainer>
</template>
 
<script>
import { Card, createToken } from 'vue-stripe-elements-plus'
 
export default {
	components: { Card },
		
	data () {
		return {
			complete: false,
			error: ''
		}
	},
 
	methods: {
		pay () {
			// createToken returns a Promise which resolves in a result object with
			// either a token or an error key.
			// See https://stripe.com/docs/api#tokens for the token object.
			// See https://stripe.com/docs/api#errors for the error object.
			// More general https://stripe.com/docs/stripe.js#stripe-create-token.

			createToken()
				.then(data => console.log(data.token))
				.catch(err => this.error = err)

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
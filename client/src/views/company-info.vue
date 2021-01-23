<template>
	<BContainer class="my-3">
		<BRow>
			<BCol cols="12">
				<BCard class="text-center shadow">
					<a href="tel:201-403-1984">
						<h1>Call Us</h1>
						<h1>(201) 403-1984</h1>
						<PhoneIcon size="5x" class="text-primary" />
					</a>
				</BCard>
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
import { PhoneIcon } from 'vue-feather-icons'

export default {
	components: {
		PhoneIcon
	}
}
</script>
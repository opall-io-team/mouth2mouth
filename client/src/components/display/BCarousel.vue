<template>
	<div>
		<BCarousel
			id="carousel-1"
			v-model="slide"
			:interval="3000"
			controls
			indicators
			fade
			background="#ababab"
			img-width="1024"
			img-height="680"
			style="text-shadow: 1px 1px 2px #333;"
			@sliding-start="onSlideStart"
			@sliding-end="onSlideEnd"
		>
			<!-- For loop for slideObj array -->
			<BCarouselSlide
				v-for="(slideObj, index) in slideObjs"
				:key="index"
				:caption="slideObj.caption"
				:text="slideObj.text"
				:img-src="slideObj.img"
				:style="`max-height: ${maxHeight}px;`"
				v-rellax
				data-rellax-xs-speed="0"
				data-rellax-mobile-speed="0"
				data-rellax-tablet-speed="0"
				:data-rellax-desktop-speed="rellaxNumber"
			>
				<!-- isHero -->
				<div v-if="showContent">
					<h3 class="d-none d-md-block font-weight-bold text-light">
						{{ mainText }}
					</h3>

					<RouterLink to="/book">
						<BButton
							variant="primary"
							size="lg"
							class="d-none d-sm-block m-auto"
						>Book Apointment</BButton>
					</RouterLink>
				</div>
			</BCarouselSlide>
		</BCarousel>
	</div>
</template>

<script>
	export default {
		props: {
			showContent: {
				type: Boolean,
				default: false,
			},

			slideObjs: {
				type: Array,
				required: true,
			},

			maxHeight: {
				type: Number,
				default: 400,
			},

			rellaxNumber: {
				type: Number,
				default: 0,
			},

			mainText: {
				type: String,
				default: '',
			},
		},

		data() {
			return {
				slide: 0,
				sliding: null,
				currentSlid: null,
			}
		},
		methods: {
			onSlideStart(slide) {
				this.currentSlid = slide
				this.sliding = true
			},

			onSlideEnd(slide) {
				this.currentSlid = slide
				this.sliding = false
			}
		}
	}
</script>
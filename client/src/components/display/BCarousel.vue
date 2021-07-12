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
				<div v-if="isHero">
					<h3 class="d-none d-md-block font-weight-bold text-light">
						Bergen County’s most luxurious permanent makeup and spa services
					</h3>

					<RouterLink to="/book">
						<BButton
							variant="primary"
							size="lg"
							class="d-none d-sm-block m-auto"
						>Book Apointment</BButton>

						<BButton
							variant="primary"
							size="lg"
							class="d-block d-sm-none m-auto"
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
			isHero: {
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

	/* Example Prop
	[
		{
			caption: 'The Beauty Bar',
			text: '3 Banta Place Hackensack NJ, 07601',
			textHtml: `
				<a href="/company-info">
					<button class="btn btn-light">Book Apointment</button>
				</a>
			`,
			img: http://www.blah.com/image-url-here.jpg,
		},
		{
			caption: '',
			text: '',
			textHtml: `
				<a href="/company-info">
					<button class="btn btn-light">Book Apointment</button>
				</a>
			`,
			img: img: http://www.blah.com/image-url-here.jpg,
		},
	]
	*/
</script>
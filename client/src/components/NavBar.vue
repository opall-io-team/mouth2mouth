<template>   
	<nav class="navbar navbar-light bg-light" style="height: 120px;">
		<div class="container">
			<div class="text-center">
				<RouterLink to="/">
					<h4 class="m-0 font-weight-bold text-info">Mouth 2 Mouth</h4>
					<h5 class="m-0 font-weight-bold">
						The Beauty Bar
					</h5>
				</RouterLink>
			</div>

			<h6 class="m-0 font-weight-bold">
				Call Us: (201) 403-1984 
			</h6>

			<div>
				<h6 class="m-0 font-weight-bold">
					<RouterLink
						to="/"
						class="text-primary"
					>Home</RouterLink> |

					<RouterLink
						to="/services"
						class="text-primary"
					>Our Services</RouterLink> |

					<RouterLink
						to="/directions"
						class="text-primary"
					>Get Directions</RouterLink> |

					<RouterLink
						to="/about"
						class="text-primary"
					>About</RouterLink> |

					<RouterLink
					to="/gallery"
					class="text-primary"
					>Gallery</RouterLink>
				</h6>
			</div>
		</div>
	</nav>
</template>
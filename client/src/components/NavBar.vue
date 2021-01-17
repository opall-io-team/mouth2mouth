<template>   
	<nav class="navbar navbar-light bg-light" style="height: 100px;">
		<div class="container">
			<div class="text-center">
				<RouterLink to="/">
					<h4 class="m-0 font-weight-bold text-info">Mouth 2 Mouth</h4>
					<h5 class="m-0 font-weight-bold">
						The Beauty Bar
					</h5>
				</RouterLink>
			</div>

			<h6 class="m-0">
				Call Us: (201) 403-1984 
			</h6>

			<div>
				<h6>
					<RouterLink
						to="/"
						class="text-secondary"
					>Home</RouterLink> |

					<RouterLink
						to="/services"
						class="text-secondary"
					>Our Services</RouterLink> |

					<RouterLink
						to="/directions"
						class="text-secondary"
					>Get Directions</RouterLink> |

					<RouterLink
						to="/about"
						class="text-secondary"
					>About</RouterLink> |

					<RouterLink
					to="/gallery"
					class="text-secondary"
					>Gallery</RouterLink>
				</h6>
			</div>
		</div>
	</nav>
</template>
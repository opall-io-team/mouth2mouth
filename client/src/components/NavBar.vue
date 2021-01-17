<template>   
	<nav class="navbar navbar-light bg-light" style="height: 100px;">
		<div class="container">
			<h6 class="m-0">
				Call: (201) 403-1984 
			</h6>

			<div class="text-center">
				<RouterLink to="/">
					<h3 class="m-0 font-weight-bold">The Beauty Bar</h3>
				</RouterLink>
			</div>

			<div>
				<h6>
					<RouterLink
						to="/"
						class="text-secondary"
					>Home</RouterLink> |

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